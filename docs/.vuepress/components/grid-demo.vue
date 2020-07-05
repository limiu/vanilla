<template>
    <div>
        <g-row class="demoRow">
            <g-col span="24"><div class="demoCol1">100%</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6"><div class="demoCol1">6</div></g-col>
            <g-col span="6"><div class="demoCol2">6</div></g-col>
            <g-col span="6"><div class="demoCol3">6</div></g-col>
            <g-col span="6"><div class="demoCol4">6</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="8"><div class="demoCol1">8</div></g-col>
            <g-col span="8"><div class="demoCol2">8</div></g-col>
            <g-col span="8"><div class="demoCol3">8</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="12"><div class="demoCol1">12</div></g-col>
            <g-col span="12"><div class="demoCol2">12</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="3"><div class="demoCol1">3</div></g-col>
            <g-col span="21"><div class="demoCol2">21</div></g-col>
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
        .demoCol3{
            display: flex;
            min-height: 50px;
            background: #4e6e8e;
            justify-content: center;
            align-items: center;
            color: white;

        }
        .demoCol4{
            display: flex;
            min-height: 50px;
            background: #2c3e50;
            justify-content: center;
            align-items: center;
            color: white;

        }

    }
</style>