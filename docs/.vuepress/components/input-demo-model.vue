<template>
    <div>
        <div>
        message:<span>{{message}}</span>
        </div>
        <div><g-input  v-model="message"></g-input></div>
    </div>
</template>
<script>
    import Input from "../../../src/input"
export default {
        components: {
            'g-input': Input
        },
    data(){
            return{
                message : '我是双向绑定'
            }
    }
}
</script>