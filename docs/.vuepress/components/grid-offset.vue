<template>
    <div>
        <g-row class="demoRow" >
            <g-col span="12" offset="2"><div class="demoCol1">6</div></g-col>
            <g-col span="10"><div class="demoCol2">6</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="5"><div class="demoCol1">5</div></g-col>
            <g-col span="10" offset="9"><div class="demoCol2">10</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="5"><div class="demoCol1">5</div></g-col>
            <g-col span="5" ><div class="demoCol2">5</div></g-col>
            <g-col span="14" offset="3"><div class="demoCol2">14</div></g-col>
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