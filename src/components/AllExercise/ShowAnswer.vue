<template>
    <v-dialog max-width="500px0" v-model="model.isActive"> 
        <v-card>
            <v-toolbar>
                <v-btn icon="mdi-close" @click="model.isActive = false" />
            </v-toolbar>
            <v-card-title
                variant="outlined"
                class="ma-2"
                v-if="model.isRight"
                color="success">
                恭喜你，回答正确！
            </v-card-title>
            <v-card-title
                variant="outlined"
                class="ma-2"
                v-if="!model.isRight"
                color="red">
                抱歉，回答错误！
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup name="ShowAnswer">
    let model = defineModel({default: {
        isActive: false,
        isRight: false
    }})


</script>

<style scoped>

</style>