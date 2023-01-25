<template>
<div class="block">
    <div id="close"><span @click="this.$emit('closeCalc')"><Icon icon="ri:close-circle-fill" /></span></div>
    <span class="text">Колличество навыков</span>
    <input type="number" placeholder="укажите колличество" min="1" required v-model="skills" />

    <span class="text">Время на реализацию (в днях)</span>
    <input type="number" placeholder="укажите время" min="1" required v-model="time" />

    <span class="text">Накрутка в %</span>
    <input type="number" placeholder="укажите процент" max="100" required v-model="procent" />

    <div class="result">
        <input type="submit" value="Посчитать" @click="calc(skills, time, procent)" />&nbsp;
        <span> &equals; {{ result }}</span>
    </div>
</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    },
    data(){
        return{
            skills: '',
            time: '',
            procent: '',
            result: '',
        }
    },
    methods:{
        calc(skills, time, procent){
            let sredneeZarplata = 70000;
            let day = 30;
            let payForDay = Math.round(sredneeZarplata/day);
            let calculated = ((payForDay*time)*skills);
            this.result = Math.round(((calculated/100)*procent)+calculated);
        }
    }
}
</script>
<style scoped>
.block{
    border: 3px solid gray;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 12px;
    border-radius: 9px;
}
.block input{
    margin-bottom: 10px;
    border: none;
    border-radius: 3px;
    padding: 5px;
}
.block span{
    font-size: 1em;
}
.result{
    display: flex;
    flex-direction: row;
}
.result input{
    width: 50%;
}
.result span{
    font-size: 14pt;
    font-weight: bold;
}
#close{
    width: 100%;
    display: flex;
    justify-content: right;
}
#close span{
    cursor: pointer;
}
#close span:hover{
    color: black;
}
</style>