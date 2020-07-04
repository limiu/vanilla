<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置</g-button>
        <g-button icon="thumbs-up">点赞</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>
        <g-button icon="loading" :loading="true">登陆中</g-button>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
        components:{
            'g-button':Button
        },
        data(){
            return {
                content:`
                <g-button>默认按钮</g-button>
                <g-button icon="settings">设置</g-button>
                <g-button icon="thumbs-up">点赞</g-button>
                <g-button icon="download" icon-position="right">下载</g-button>
                <g-button icon="loading" :loading="true">登陆中</g-button>>
                `
            }
        }
    }
</script>