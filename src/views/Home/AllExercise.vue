<template>
    <v-container fluid class="pa-6">
        <p class="text-h4 mt-6 mb-4">所有题目</p>
        <p class="text-subtitle-2 mb-4">点击查看详情、添加到题目组</p>

        <v-data-table
            :headers="headers"
            :items="reachableExercise"
            item-value="exerciseid"
            :loading="table_loading"
            disable-sort
            sticky
            items-per-page="20"
            show-select
            no-data-text="无题目"
            loading-text="加载中"
            v-model="selectedExercise">
            <template v-slot:item.title="{ item }">
                <p class="text-break">{{ item.title }}</p>
            </template>

            <template v-slot:item.type="{ item }">
                {{ exerciseType[item.type] }}
            </template>

            <template v-slot:item.tag="{ item }">
                <v-chip v-for="tag in item.tag" :key="tag.tagid" color="secondary" label class="me-1">{{
                    tag.tagname
                }}</v-chip>
            </template>

            <template v-slot:item.actions="{ item, index }">
                <v-btn
                    variant="tonal"
                    icon
                    density="comfortable"
                    color="primary"
                    class="me-1"
                    @click="infoDialog(index)">
                    <v-icon size="default"> mdi-file-document </v-icon>
                </v-btn>

                <v-btn
                    v-if="item.createusername == userInfo.username"
                    variant="tonal"
                    icon
                    density="comfortable"
                    color="green"
                    class="me-1"
                    @click="editDialog(index)">
                    <v-icon size="default"> mdi-pencil </v-icon>
                </v-btn>

                <v-btn
                    v-else
                    variant="tonal"
                    icon
                    density="comfortable"
                    color="secondary"
                    class="me-1"
                    @click="addToTagDialog(item.exerciseid, item.title)">
                    <v-icon size="default"> mdi-tag-plus </v-icon>
                </v-btn>
            </template>

            <template v-slot:bottom>
                <div class="text-center mt-2">
                    <v-pagination v-model="nowPage" :length="reachablePages"></v-pagination>
                </div>
            </template>
        </v-data-table>
    </v-container>

    <v-dialog max-width="500px" v-model="editDialogActive">
        <v-toolbar>
            <v-btn icon="mdi-close" @click="editDialogActive = false" />
            <v-toolbar-title>编辑题目</v-toolbar-title>
        </v-toolbar>

        <ExerciseUpdater
            v-model="editExercise"
            :current_user_tag="currentUserTag"
            @add_tag="addTagDialogActive = true" />
    </v-dialog>

    <AddExerciseToTag
        v-model="addToTagDialogActive"
        :current_user_tag="currentUserTag"
        :exerciseid="addToTagExerciseID"
        :title="addToTagExerciseTitle"
        @add_finish="getReachableExercise(nowPage)" />

    <AddTag v-model="addTagDialogActive" @add_finish="getReachableExercise(nowPage)" />

    <ExerciseInfo v-model="infoDialogActive" :exercise="infoDialogExercise" />
</template>

<script lang="ts" setup name="AllExercise">
    import AddTag from "@/components/AddTag.vue"
    import AddExerciseToTag from "@/components/AllExercise/AddExerciseToTag.vue"
    import ExerciseInfo from "@/components/AllExercise/ExerciseInfo.vue"
    import ExerciseUpdater from "@/components/ExerciseUpdater.vue"
    import { useUserInfo } from "@/stores/userinfo"
    import type {
        FullTag,
        GetCurrentUserTagResponse,
        GetListExerciseResponse,
        GotExercise,
        NewExerciseItem,
    } from "@/types"
    import { callapi } from "@/utils/callapi"
    import { onMounted, ref, toValue, watch } from "vue"
    const userInfo = useUserInfo()

    const exerciseType = {
        0: "判断题",
        1: "单选题",
        2: "多选题",
        10: "填空题",
    }

    const headers = [
        { title: "ID", value: "exerciseid", width: "70px", minWidth: "70px" },
        { title: "创建者", key: "createusername" },
        { title: "类型", key: "type", width: "75px", minWidth: "75px" },
        { title: "标题", key: "title", maxWidth: "450px" },
        { title: "标签", key: "tag", maxWidth: "350px" },
        { title: "操作", key: "actions", sortable: false },
    ]

    let currentUserTag = ref(<FullTag[]>[])

    function getCurrentUserTag() {
        callapi.get("Tag", "getCurrentUserTag", null, (data) => {
            currentUserTag.value = (<GetCurrentUserTagResponse>data).tag
        })
    }

    onMounted(() => {
        getCurrentUserTag()
    })

    let reachableExercise = ref(<GotExercise[]>[])
    let reachablePages = ref(1)
    let nowPage = ref(1)
    let table_loading = ref(false)

    function getReachableExercise(page: number) {
        table_loading.value = true
        reachableExercise.value = <GotExercise[]>[]
        callapi.get(
            "Exercise",
            "getReachableExercise",
            {
                page: page,
            },
            (data) => {
                const result = <GetListExerciseResponse>data
                reachablePages.value = result.pages
                reachableExercise.value = result.thispage
                table_loading.value = false
            },
            (errCode) => {
                table_loading.value = false
            }
        )
    }

    onMounted(() => {
        getReachableExercise(1)
    })

    watch(nowPage, (newValue) => {
        getReachableExercise(newValue)
    })

    let editDialogActive = ref(false)
    let editExerciseIndex = ref(0)
    let editExercise = ref(<NewExerciseItem>{})

    function editDialog(index: number) {
        editExerciseIndex.value = index
        editExercise.value = {
            exerciseid: reachableExercise.value[index].exerciseid,
            exercise: {
                type: reachableExercise.value[index].type,
                title: reachableExercise.value[index].title,
                content: reachableExercise.value[index].content,
                option: reachableExercise.value[index].option,
                answer: reachableExercise.value[index].answer,
                tag: reachableExercise.value[index].tag.map((value) => value.tagid),
            },
        }
        editDialogActive.value = true
    }

    watch(editDialogActive, (newValue, oldValue) => {
        if (oldValue && !newValue) {
            getReachableExercise(nowPage.value)
        }
    })

    let addTagDialogActive = ref(false)

    let addToTagDialogActive = ref(false)
    let addToTagExerciseID = ref(-1)
    let addToTagExerciseTitle = ref("")

    function addToTagDialog(exerciseid: number, title: string) {
        addToTagExerciseID.value = exerciseid
        console.log(addToTagExerciseID.value)
        addToTagExerciseTitle.value = title
        addToTagDialogActive.value = true
    }

    let infoDialogActive = ref(false)
    let infoDialogExercise = ref(<GotExercise>{})

    function infoDialog(index: number) {
        infoDialogExercise.value = reachableExercise.value[index]
        infoDialogActive.value = true
    }

    let selectedExercise = ref()

    watch(selectedExercise, (newValue) => {
        console.log(newValue)
    })
</script>

<style scoped></style>
