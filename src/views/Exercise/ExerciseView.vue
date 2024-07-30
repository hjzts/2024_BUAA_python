<template>
    <v-main>
        <v-progress-linear
            :model-value="(nowExercise / globalexerciselist.length) * 100"
            color="green-darken-1"
            absolute
            top></v-progress-linear>

        <v-fab
            color="green"
            prepend-icon="mdi-arrow-u-left-top"
            location="top start"
            position="sticky"
            size="x-large"
            text="返回"
            extended
            app
            @click="goBack"
            class="ml-4 mt-4" />

        <v-container fluid class="w-100 mt-10">
            <v-row class="w-100 justify-center mb-10">
                <p class="text-h4">题目 {{ nowExercise }} / {{ globalexerciselist.length }}</p>
            </v-row>
            <v-row class="w-100 justify-center">
                <ExerciseFinisher
                    v-model:loading="loading"
                    :exercise="exercise"
                    :isEnd="nowExercise == globalexerciselist.length"
                    @next="next" />
            </v-row>
        </v-container>
    </v-main>
</template>

<script lang="ts" setup name="ExerciseView">
    import ExerciseFinisher from "@/components/ExerciseView/ExerciseFinisher.vue"
    import { useGlobalExerciseList } from "@/stores/globalexerciselist"
    import type { GetExerciseByIDResponse, GotExercise } from "@/types"
    import { callapi } from "@/utils/callapi"
    import { onMounted, ref } from "vue"

    const globalexerciselist = useGlobalExerciseList()

    let exercise = ref(<GotExercise>{})
    let loading = ref(false)

    function getExercise(exerciseid: number) {
        loading.value = true
        callapi.get(
            "Exercise",
            "getExerciseByID",
            {
                exerciseid: exerciseid,
            },
            (data) => {
                exercise.value = (<GetExerciseByIDResponse>data).data
                loading.value = false
            }
        )
    }

    onMounted(() => {
        getExercise(globalexerciselist.list[0])
    })

    let nowExercise = ref(1)

    function next() {
        nowExercise.value += 1
        getExercise(globalexerciselist.list[nowExercise.value - 1])
    }

    function goBack() {
        window.close()
    }
</script>

<style scoped></style>
