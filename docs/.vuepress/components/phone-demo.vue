<template>
    <div>
        <g-row class="demoRow" >
            <g-col span="8"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"
            ><div class="demoCol1">6</div></g-col>
            <g-col :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"><div class="demoCol2">6</div></g-col>
            <g-col span="8"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"><div class="demoCol1">6</div></g-col>
        </g-row>
    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        components:{
            'g-col':Col,
            'g-row':Row
        },
    }
</script>
<style lang="scss" scoped>
    .demoRow{
        flex-wrap: nowrap;
        .col{
            height: 60px;
        }
        .demoCol1{
            display: flex;
            min-height: 50px;
            background: #4e6e8e;
            justify-content: center;
            align-items: center;
            color: white;

        }
        .demoCol2{
            display: flex;
            min-height: 50px;
            background: #2c3e50;
            justify-content: center;
            align-items: center;
            color: white;

        }

    }
</style>