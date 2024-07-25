<template>
    <v-data-table :headers="headers" :items="items">
        <template v-slot:item.passed="{ item }">
            <v-checkbox v-model="item.passed" hide-details color="success" readonly></v-checkbox>
        </template>
        <template v-slot:item.action="{ item }">
            <v-btn icon @click="seeDetails(item)">
                <v-icon>mdi-file-document</v-icon>
            </v-btn>
        </template>

        <!-- <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog> -->

    </v-data-table>
</template>

<script lang="ts" setup name="AllExercise">
    import { getDefaultExerciseModel } from '@/utils/exercise';
    import { ref } from 'vue'
    let dialogDelete = ref(false)
    let headers = ref([
        { title: '测试点 ID', value: 'id' },
        { title: '名称', value: 'name' },
        { title: '已通过', value: 'passed' },
        { title: '判定信息', value: 'status' },
        { title: '分数', value: 'score' },
        { title: '操作', value: 'action', sortable: false },
    ])
    let items = ref([
        { id: 3971, name: '2024_unit1_hw1_strong_1', passed: false, status: 'ACCEPTED', score: 100 },
        { id: 3972, name: '2024_unit1_hw1_strong_2', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3973, name: '2024_unit1_hw1_strong_3', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3974, name: '2024_unit1_hw1_strong_4', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3975, name: '2024_unit1_hw1_strong_5', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3976, name: '2024_unit1_hw1_strong_6', passed: false, status: 'ACCEPTED', score: 100 },
        { id: 3977, name: '2024_unit1_hw1_strong_7', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3978, name: '2024_unit1_hw1_strong_8', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3979, name: '2024_unit1_hw1_strong_9', passed: true, status: 'ACCEPTED', score: 100 },
        { id: 3980, name: '2024_unit1_hw1_strong_10', passed: true, status: 'ACCEPTED', score: 100 },
    ])

    function seeDetails(item: any) {
        console.log(item)
        dialogDelete.value = true
    }

    function closeDelete() {
        dialogDelete.value = false
    }
</script>

<style scoped></style>
