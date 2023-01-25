<template>
  <div class="client">
    <div class="buttons">
      <div class="add" @click="popup = !popup">Add client</div>
      <div class="add" @click="calc = !calc">Посчитать</div>
    </div>
    <ClientTable />
    <Popup v-if="popup" @popups="closePopup" />
    <Calc class="calc" v-if="calc" @closeCalc="closeCalc" />
  </div>
</template>
<script>
import ClientTable from "@/components/ClientTable.vue"
import Popup from "@/components/PopupClient.vue"
import Calc from "@/components/CalculatePrise.vue"
export default{
  components:{
    ClientTable,
    Popup,
    Calc,
  },
  data(){
    return{
      popup: false,
      calc: false,
    }
  },
  methods:{
    closePopup(){this.popup = !this.popup},
    closeCalc(){this.calc = !this.calc},
  }
}
</script>
<style scoped>
.client{
  margin-top: 5vh;
}
.buttons{
  display: flex;
  flex-direction: row;
}
.add{
 border: 2px solid gray;
 padding: 6px;
 border-radius: 5px;
 margin-bottom: 1vh;
 background-color: lightgray;
 color: #2c3e50;
 cursor: pointer;
 margin-right: 20px;
}
.add:hover{
  color: #42b983;
}
</style>