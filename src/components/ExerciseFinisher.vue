<template>
    <v-card>
        <v-card-title class="text-h5">{{ exercise.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-2" color="blue-lighten-1" style="color: rgb(85, 163, 25)">题目创建者:{{ exercise.createusername }}</v-card-subtitle>
        <v-divider />
        <v-spacer />
        <v-card-subtitle class="text-subtitle-2" color="blue-lighten-1" style="color: rgb(85, 163, 25)">题目类型:{{ getExerciseType() }}</v-card-subtitle>
        
        <v-card-text>{{ exercise.content }}</v-card-text>
        <v-divider />
        
        <!-- ****************判断题****************** -->
        <!-- todo: 这里不应该是修改exercise.answer，而是需要重新存储并进行对比 -->
        <v-radio-group v-if="exercise.type === 0" v-model="userAnswer[0]" hide-details>
            <v-radio label="对" value="A" color="success" />
            <v-radio label="错" value="B" color="red" />
        </v-radio-group>

        <!-- ****************单选题****************** -->
        <v-radio-group v-if="exercise.type === 1" v-model="userAnswer[0]" hide-details>
            <div v-for="(option , index) in exercise.option" :key="'S' + option" class="d-flex mb-2 justify-begin">
                <div class="d-flex flex-wrap">
                    <v-radio :value="option" color="success" />
                    <p class="text-subtitle-2 ml-2 mt-2">{{ String.fromCharCode(65 + index) + '. ' + exercise.option[index] }}</p>
                </div>
            </div>
        </v-radio-group>

        <!-- ****************多选题****************** -->
        <div v-if="exercise.type === 2">
            <div 
                v-for="(option , index) in exercise.option" 
                :key="'M' + option" 
                class="d-flex mb-2 justify-begin"
            >
                <div class="d-flex flex-row">
                    <v-checkbox 
                        v-model="userAnswer"
                        :value="option" 
                        color="success"
                        hide-details />
                    <div class="d-flex text-justify align-center">{{ String.fromCharCode(65 + index) + '. ' + exercise.option[index] }}</div>
                </div>
            </div>
        </div>

        <!-- ****************标签****************** -->
        <v-chip-group v-model="selectedTags" selected-class="bg-green-darken-3" readonly>
            <v-chip 
                v-for="(item, index) in exercise.tag" 
                :key="item.tagid" 
                :value="item.tagid" 
                :style="{ 'margin-right': index < exercise.tag.length - 1 ? '10px' : '0px' }"
                color="Green flat"
                size="large">
                {{ item.tagname }}
            </v-chip>
        </v-chip-group>
        <v-divider />

        <v-card-actions class="d-flex justify-end">
            <v-btn
                color="orange"
                text="完成创建"
                size="large"
                prepend-icon="mdi-check-circle"
                @click="submit(exercise.exerciseid)">
                完成并提交</v-btn
            >
        </v-card-actions>
    </v-card>

    <v-dialog max-width="500px0" v-model="submitInfo.isActive"> 
        <v-card>
            <v-toolbar>
                <v-btn icon="mdi-close" @click="submitInfo.isActive = false" />
            </v-toolbar>
            <v-card-title
                variant="outlined"
                class="ma-2"
                v-if="submitInfo.isRight"
                color="success">
                恭喜你，回答正确！
            </v-card-title>
            <v-card-title
                variant="outlined"
                class="ma-2"
                v-if="!submitInfo.isRight"
                color="red"
                style="color: red;"
                >
                抱歉，回答错误！
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup name="ExerciseFinisher">
    import { ref, watch } from "vue"

    defineProps()
    defineEmits(["showAnswer"])

    let userAnswer = ref([])
    let exercise = ref({
            type: 2,
            title : "单选题标题",
            content : "题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面题面         ",
            option:["A选项A选项A选项A选项","B选项B选项B选项B选项","C选项C选项C选项C选项","D选项D选项D选项D选项"],
            answer : ["A"],
            exerciseid: "1223",
            createusername: "hugo",
            tag: [
                {
                    tagid:111,
                    tagname:"python chapter 1"
                },
                {
                    tagid:222,
                    tagname:"python chapter 2"
                }
            ],
    })
    let selectedTags = exercise.value.tag.map(item => item.tagid)
    let submitInfo = ref({
        isActive: false,
        isRight: false
    })

    watch(userAnswer, (newValue) => {
        console.log("userAnswer: ", newValue)
    })

    watch(submitInfo, (newValue) => {
        console.log("submitInfo: ", newValue)
    })

    function getExerciseType() {
        let type =  exercise.value.type === 0 ? "判断题" :
                    exercise.value.type === 1 ? "单选题" :
                    exercise.value.type === 2 ? "多选题" :
                    "填空题" 
        return type
    }

    function submit(exerciseid: string) {
        submitInfo.value.isRight = checkAnswer()
        submitInfo.value.isActive = true
    }

    function checkAnswer() {
        if (exercise.value.answer.length !== userAnswer.value.length) {
            return false;
        }
        const sortedUserAnswer = userAnswer.value.sort()
        const sortedExerciseAnswer = exercise.value.answer.sort()
        for (let i = 0; i < sortedExerciseAnswer.length; i++) {
            if(sortedUserAnswer[i] !== sortedExerciseAnswer[i]) {
                return false
            }
        }
        return true
    }
</script>

<style scoped></style>
