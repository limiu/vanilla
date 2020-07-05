<template>
    <div>
        <g-button-group>
            <g-button>上一页</g-button>
            <g-button>下一页</g-button>
        </g-button-group>
    </div>
</template>
<script>
    import ButtonGroup from '../../../src/button-group'
    import Button from "../../../src/button";
    export default {
        components:{
            'g-button-group':ButtonGroup,
            'g-button':Button

        },
    }
</script>