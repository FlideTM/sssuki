<template>
    <div class="Popup">
        <div class="Block">
            <div id="close"><span @click="this.$emit('closeSP')"><Icon icon="ri:close-circle-fill" /></span></div>
            
            <div class="newsletter">
                <select v-model="selected">
                    <option>Telegram</option>
                    <option>Instagram</option>
                    <option>Vk</option>
                    <option>WhatsApp</option>
                </select>
                <input v-model="count" type="number" placeholder="Укажите количество сообщений/услуг" />
                <input type="button" @click="getPrice(selected, count)" value="button" />
                {{ result }}
            </div>
            <div class="another">
                <select v-model="selected1">
                    <option>Боты</option>
                    <option>Дизайн социальных сетей</option>
                </select>
                <select v-model="socnet" v-if="selected1 == 'Боты'">
                    <option>Telegram</option>
                    <option>Instagram</option>
                    <option>Vk</option>
                    <option>WhatsApp</option>
                </select>
                <input type="button" @click="getPrice(selected1, socnet)" value="button" />
            </div>
        </div>
        <div class="Background" @click="this.$emit('closeSP')"></div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue';
import prices from '@/assets/price.json';
export default{
    components:{
        Icon,
    },
    data(){
        return{
            servivce: prices.services,
            selected: '',
            selected1: '',
            count: '',
            result: '',
            socnet: '',
        }
    },
    methods:{
        getPrice(SocNet, Count){
            let sum = this.servivce.newsletter;
            switch(SocNet){
                case "Telegram":
                    this.result = sum.telegram * Count;
                    break;
                case "Instagram":
                    this.result = sum.instagram * Count;
                    break;
                case "Vk":
                    this.result = sum.vk * Count;
                    break;
                case "WhatsApp":
                    this.result = sum.whatsapp * Count;
                    break;
                case "Боты":
                    break;
                case "Дизайн социальных сетей":
                    break;
            }
        }
    }
}
</script>
<style scoped>
.Popup{
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.Background{
    position: fixed;
    background-color: rgba(211, 211, 211, 0.685);
    width: 100%;
    height: 100%;
}
.Block{
    z-index: 999;
    border: 3px solid gray;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 12px;
    border-radius: 9px;
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