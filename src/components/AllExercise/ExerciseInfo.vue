<template>
    <v-dialog :activator="activator" max-width="500px" v-model="isActive">
        <v-card>
            <v-toolbar>
                <v-btn icon="mdi-close" @click="isActive = false"/>
                <v-toolbar-title>题目信息</v-toolbar-title>
            </v-toolbar>
            
            <v-card-subtitle>题目创建者:{{ exercise.createusername }}</v-card-subtitle>
            <v-card-subtitle>题目类型:{{ getExerciseType }}</v-card-subtitle>
            <v-divider />
            
            <v-card-text>{{ exercise.content }}</v-card-text>
            <v-divider />
            
            <!-- ****************判断题****************** -->
            <!-- todo: 这里不应该是修改exercise.answer，而是需要重新存储并进行对比 -->
            <v-radio-group v-if="exercise.type === 0" v-model="exercise.answer[0]" hide-details>
                <p class="text-subtitle-2 mt-2">你的答案是</p>
                <v-radio label="对" value="A" color="success" />
                <v-radio label="错" value="B" color="red" />
            </v-radio-group>

            <!-- ****************单选题****************** -->
            <v-radio-group v-if="exercise.type === 1" v-model="exercise.answer[0]" hide-details>
                <p class="text-subtitle-2 mt-2">你的答案是</p>
                <div v-for="(option , index) in exercise.option" :key="'S' + option" class="d-flex mb-2">
                    <v-radio :value="option" color="success" :disabled="!exercise.option[index]" />
                    <p class="text-subtitle-2 mt-2">{{ exercise.option[index]}}</p>
                </div>
            </v-radio-group>

            


            <template v-slot:actions>
                <v-btn @click="isActive = false">取消</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup name="ExerciseInfo">
    import { ref } from "vue"
    import type { GotExercise } from "@/types"
    

    defineProps(['activator'])

    let exercise = defineModel({
        default: <GotExercise>{
            type: 1,
            title : "这是个单选题",
            content : "这是单选题的题面:\"这个题目是错的\",那么这个题目的答案是:",
            option:["这是A选项的内容:错误","这是B选项的内容:正确"],
            answer : ["A"],
            exerciseid: 1223,
            createusername: "hugo",
            tag: [
                {
                    tagid:111,
                    tagname:"python chapter 1"
                }
            ],
        },
    })
    let isActive = ref(false)
    function getExerciseType() {
        return  exercise.value.type === 0 ? "判断题" :
                exercise.value.type === 1 ? "单选题" :
                exercise.value.type === 2 ? "多选题" :
                "填空题" 
    }
</script>

<style scoped>

</style>