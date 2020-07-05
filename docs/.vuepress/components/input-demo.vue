<template>
    <div>
        <g-input></g-input>
        <g-input value="姓名" readonly></g-input>
        <g-input value="姓名" disabled></g-input>
        <g-input value="姓名" error="输入错误"></g-input>
    </div>
</template>
<script>
   import input from "../../../src/input";
    export default {
        components:{
            'g-input':input,

        },
    }
</script>