<template>
    <v-snackbar v-model="snackbar" color="red" :timeout="hold ? -1 : 5000">
        {{ text }}
        <template v-slot:actions>
            <v-btn color="white" variant="text" @click="snackbar = false" v-if="!hold"> 关闭 </v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts" setup name="ErrorSnackbars">
    import { ref } from "vue"
    import emitter from "@/utils/emitter"

    let snackbar = ref(false)
    let text = ref("")
    let hold = ref(false)

    emitter.on("apierror", (message) => {
        text.value = <string>message ? <string>message : "未知错误"
        hold.value = false
        snackbar.value = true
    })

    emitter.on("fatalerror", (message) => {
        text.value = <string>message ? <string>message : "未知错误"
        hold.value = true
        snackbar.value = true
    })

    emitter.on("normalerror", (message) => {
        text.value = <string>message ? <string>message : "未知错误"
        hold.value = false
        snackbar.value = true
    })
</script>
