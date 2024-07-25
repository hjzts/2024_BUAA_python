import type { NewExercise, NewExerciseItem } from "@/types"

export function getNewExerciseModel(): NewExercise {
    return {
        type: 0,
        title: "",
        content: "",
        option: [],
        answer: [],
        tag: [],
    }
}

export function getDefaultExerciseModel(type:0 | 1 | 2 | 10 ): NewExerciseItem {
    let exercise:NewExercise={
        type: type,
        title:  type===0 ? "python判断题" : 
                type===1 ? "python单选题" :
                type===2 ? "python多选题" :
                "python填空题",
        content: type===0 ? "请判断以下代码的输出结果" :
                    type===1 ? "以下哪个选项是正确的" :
                    type===2 ? "以下哪些选项是正确的" :
                    "请填写下面的代码",
        option: type===0 ? ["A", "B"] :
                type===1 ? ["A", "B", "C", "D"] :
                type===2 ? ["A", "B", "C", "D"] :
                ["____"],
        answer: type===0 ? ["A"] :
                type===1 ? ["A"] :
                type===2 ? ["A", "B"] :
                ["__填空题答案__"],
        tag: [0]
    }
    return {
        exerciseid: Math.floor(Math.random()*100),
        exercise: exercise,
        is_upload_success:true,
        last_upload_time: new Date().toLocaleString()
    }
}
