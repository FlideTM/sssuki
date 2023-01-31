<template>
    <div class="buttons">
        <div class="calcButton" @click="calcProgger = !calcProgger">Proggers</div>
        <div class="calcButton" @click="calcService = !calcService">Services</div>
    </div>
    <CalcPP class="calc" v-if="calcProgger" @closePP="closeCalcProgger" />
    <CalcSP class="calc" v-if="calcService" @closeSP="closeCalcService" />
</template>
<script>
import CalcPP from "@/components/calculate/ProgrammistPrise.vue"
import CalcSP from "@/components/calculate/ServicesPrice.vue"
export default{
    components:{
        CalcPP,
        CalcSP,
    },
    data(){
        return{
            calcProgger: false,
            calcService: false,
        }
    },
    methods: {
        closeCalcProgger(){this.calcProgger = !this.calcProgger},
        closeCalcService(){this.calcService = !this.calcService}
    }
}
</script>
<style scoped>
.buttons{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.calcButton{
    background-color: #42b983;
    border-radius: 5px;
    display: flex;
    width: 10vw;
    height: 5vh;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 1.5vw;
    cursor: pointer;
    box-shadow: 1px 5px 1px #2e7e5a;
}
.calcButton:hover{background-color: #60ffb7;}
.calcButton:active{
    background-color: #2e7e5a;
    box-shadow: 1px 1px 1px #000000;
}
</style>