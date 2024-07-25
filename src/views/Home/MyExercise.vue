<template>
    <v-container fluid class="pa-6">
        <p class="text-h4 mt-6 mb-4">我的题目</p>
        <p class="text-subtitle-2 mb-4">点击题目组，查看题目</p>

        <v-chip-group v-model="seletedTagId" mandatory selected-class="bg-green-darken-3">
            <v-chip v-for="item in currentUserTag" :key="item.tagid" :value="item.tagid">
                {{ item.tagname }}
            </v-chip>
        </v-chip-group>

        <v-data-table
            :headers="headers"
            :items="exerciseFromTag"
            item-value="exerciseid"
            disable-sort
            sticky
            items-per-page="20"
            show-select
            no-data-text="无题目"
            v-model="selectedExercise">
            <template v-slot:item.title="{ item }">
                <p class="text-break">{{ item.title }}</p>
            </template>

            <template v-slot:item.type="{ item }">
                {{ exerciseType[item.type] }}
            </template>

            <template v-slot:bottom>
                <div class="text-center mt-2">
                    <v-pagination v-model="nowPage" :length="exercisePages"></v-pagination>
                </div>
            </template>

            <template v-slot:item.tag="{ item }">
                <v-chip v-for="tag in item.tag" :key="tag.tagid" color="secondary" label class="me-1">{{
                    tag.tagname
                }}</v-chip>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-btn variant="tonal" icon density="comfortable" color="primary" class="me-1">
                    <v-icon size="default"> mdi-file-document </v-icon>
                </v-btn>
                <v-btn variant="tonal" icon density="comfortable" color="secondary" class="me-1">
                    <v-icon size="default"> mdi-tag-plus </v-icon>
                </v-btn>
                <v-btn
                    v-if="item.createusername == userInfo.username"
                    variant="tonal"
                    icon
                    density="comfortable"
                    color="green"
                    class="me-1">
                    <v-icon size="default"> mdi-pencil </v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>

<script lang="ts" setup name="MyExercise">
    import { useUserInfo } from "@/stores/userinfo"
    import type { FullTag, GetCurrentUserTagResponse, GetListExerciseResponse, GotExercise } from "@/types"
    import { callapi } from "@/utils/callapi"
    import { onMounted, ref, watch } from "vue"
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

    let seletedTagId = ref()
    let exerciseFromTag = ref(<GotExercise[]>[])
    let exercisePages = ref(0)
    let nowPage = ref(1)

    function getReachableExercise(page: number) {
        callapi.get(
            "Exercise",
            "getExerciseFromTag",
            {
                tagid: seletedTagId.value,
                page: page,
            },
            (data) => {
                const result = <GetListExerciseResponse>data
                exercisePages.value = result.pages
                exerciseFromTag.value = result.thispage
            }
        )
    }

    watch(nowPage, (newValue) => {
        getReachableExercise(newValue)
    })

    watch(seletedTagId, (newValue) => {
        getReachableExercise(1)
    })

    let selectedExercise = ref()
</script>

<style scoped></style>
