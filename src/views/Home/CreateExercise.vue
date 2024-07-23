<template>
    <v-container fluid class="fill-height">
        <v-row class="fill-height" justify="center" align-content="start">
            <v-col cols="6" align-self="start">
                <OCR />
            </v-col>
            <v-col>
                <v-btn size="large" color="primary" class="w-100 mb-3">
                    新建题目
                </v-btn>
                <v-btn size="large" color="green" class="w-100" disabled>
                    完成创建
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup name="CreateExercise">
    import OCR from "@/components/CreateExercise/OCR.vue"
</script>

<style scoped></style>
