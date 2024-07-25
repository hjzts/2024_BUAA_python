import type { GotExercise } from "@/types"
import { defineStore } from "pinia"

export const useGlobalExerciseList = defineStore("globalexerciselist", {
    state: () => {
        return {
            list: <GotExercise[]>[],
        }
    },
    actions: {
        reload(newlist: GotExercise[]) {
            this.list = newlist
        },
    },
    persist: true,
})
