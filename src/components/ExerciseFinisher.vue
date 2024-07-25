<template>
    <v-card>
        <v-card-subtitle>题目创建者:{{ exercise.createusername }}</v-card-subtitle>
            <v-card-subtitle>题目类型:{{ getExerciseType() }}</v-card-subtitle>
            <v-divider />
            <v-spacer />
            
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
                <p class="text-body-1 mt-2 ">你的答案是</p>

                <!-- <div v-for = "(option , index) in exercise.option" :key="'S' + option" class="d-flex mt-2">
                    <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>
                        <v-list-item value="notifications">
                            <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list>
                </div> -->

                <div v-for="(option , index) in exercise.option" :key="'S' + option" class="d-flex mb-2 justify-begin">
                    <div class="d-flex flex-wrap">
                        <v-radio :value="option" color="success" />
                        <p class="text-subtitle-2 ml-2 mt-2">{{ exercise.option[index] }}</p>
                    </div>
                </div>
            </v-radio-group>
    </v-card>
</template>

<script lang="ts" setup name="ExerciseFinisher">
    import { ref } from "vue"
    // import type { GotExercise } from "@/types"

    let isActive = ref(false)
    let exercise = ref({
            type: 1,
            title : "这是个单选题",
            content : "这是单选题的题面:\"这个题目是错的\",那么这个题目的答案是:",
            option:["这是A选项的内容:错误","这是B选项的内容:正确"],
            answer : ["A"],
            exerciseid: "1223",
            createusername: "hugo",
            tag: [
                {
                    tagid:111,
                    tagname:"python chapter 1"
                }
            ],
    })
    function getExerciseType() {
        let type =  exercise.value.type === 0 ? "判断题" :
                    exercise.value.type === 1 ? "单选题" :
                    exercise.value.type === 2 ? "多选题" :
                    "填空题" 
        return type
    }
</script>

<style scoped></style>
