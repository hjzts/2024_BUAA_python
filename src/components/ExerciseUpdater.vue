<template>
    <v-card>
        <v-card-item>
            <v-text-field 
                label="请输入题目标题"
                variant="outlined" 
                color="primary"
                :rules="[(v:string) => !!v || '请输入题目标题']" >
            </v-text-field>

            <v-card-subtitle>
                请选择题目类型
            </v-card-subtitle>
            <div class="px-4 mb-2">
                <v-chip-group 
                    v-model="exercise_type" 
                    selected-class="bg-blue-darken-3" >
                    <v-chip>判断题</v-chip>
                    <v-chip>单选题</v-chip>
                    <v-chip>多选题</v-chip>
                    <v-chip>填空题</v-chip>
                </v-chip-group>
            </div>

            <v-textarea
                label="请输入题面"
                variant="outlined"
                color="primary"
                :rules="[(v:string) => !!v || '请输入题面']" >
            </v-textarea>

            <v-divider></v-divider>
<!-- ****************判断题****************** -->
            <v-radio-group
                v-if="exercise_type===0"
                v-model="answer"
            >            
                <v-card-subtitle>
                    请输入题目答案
                </v-card-subtitle>

                <v-radio 
                    label="对" 
                    value="A"
                    color="success">
                </v-radio>
                <v-radio 
                    label="错" 
                    value="B"
                    color="red">
                </v-radio>
            </v-radio-group>

<!-- ****************单选题****************** -->
            <v-radio-group
                v-if="exercise_type===1"
                v-model="selectedOption"
            >   
                <div v-for="(option,index) in options" :key="index"  class="d-flex align-center">
                    <v-row align="center">
                        <v-col cols="auto">
                            <v-radio
                                :label="option.label + '.'"
                                :value="option.value"
                                color="success"
                            >
                            </v-radio>
                        </v-col>
                        <v-col>
                            <v-text-field
                                :value="option.value"
                                :label="`请编辑选项${option.value}`"
                                variant="outlined"
                                color="primary"
                                :rules="[(v:string) => !!v || `请输入选项${option.value}的内容`]"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                
            </v-radio-group>

<!-- ****************多选题****************** -->
                <div 
                    v-for="(option,index) in options" 
                    :key="index"  
                    class="d-flex align-center"
                    v-if="exercise_type===2"
                >
                    <v-row align="center">
                        <v-col cols="auto">
                            <v-checkbox
                                v-model="selectedOptions"
                                :label="option.label + '.'"
                                :value="option.value"
                                color="success"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col>
                            <v-text-field
                                :value="option.value"
                                :label="`请编辑选项${option.value}`"
                                variant="outlined"
                                color="primary"
                                :rules="[(v:string) => !!v || `请输入选项${option.value}的内容`]"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                
                <v-row align="center">
                    <v-col class="d-flex align-center">
                        <v-btn
                            size="large"
                            variant="plain"
                            prepend-icon="mdi-plus-thick"
                            @click="addOptions"
                            v-if="exercise_type===1 || exercise_type===2"
                        >
                            添加选项
                        </v-btn>
                    </v-col>
                    <v-col class="d-flex align-center">
                        <v-btn
                            size="large"
                            variant="plain"
                            prepend-icon="mdi-minus-thick"
                            @click="deleteOptions"
                            v-if="exercise_type===1 || exercise_type===2"
                        >
                            删除选项
                        </v-btn>
                    </v-col>
                </v-row>


<!-- ****************多选题****************** -->

            <v-text-field 
                label="答案"
                variant="outlined" 
                color="primary"
                :rules="[(v:string) => !!v || '请输入填空题答案']"
                v-if="exercise_type===3" >
            </v-text-field>

        </v-card-item>
    </v-card>

    
</template>

<script lang="ts" setup name="CreateExercise">
    import { ref , watch , reactive } from 'vue'
    import emitter from "@/utils/emitter"
    // todo:这里是直接使用0 1 2 3表示type，需要与api中的0 1 2 10相统一
    let exercise_type = ref(2)
    // 判断题
    let answer = ref('A')
    // 单选题
    let selectedOption = ref()
    // 多选题
    let selectedOptions = ref([])
    // 单选与多选共享一个options
    let options = reactive([
        {label: 'A', value: 'A'}, 
        {label: 'B', value: 'B'}, 
    ])

    function addOptions() {
        if(options.length >= 26) {
            emitter.emit("normalerror", "不能超过26个选项")
        }else {
            let new_option=String.fromCharCode(65 + options.length)
            options.push({
                label:new_option, value:new_option
            })
        }
    }

    function deleteOptions() {
        if(options.length <= 2) {
            emitter.emit("normalerror", "不能少于2个选项")
        }else {
            options.pop()
        }
    }
</script>

<style scoped>

</style>
