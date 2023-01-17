<template>
  <div class="client">
    <div class="add" @click="popup = !popup">Add client</div>
    <ClientTable />
    <Popup v-if="popup" />
  </div>
</template>
<script>
import ClientTable from "@/components/ClientTable.vue"
import Popup from "@/components/PopupClient.vue"
export default{
  components:{
    ClientTable,
    Popup,
  },
  data(){
    return{
      popup: false,
    }
  }
}
</script>
<style scoped>
.client{
  margin-top: 5vh;
}
.add{
 border: 2px solid gray;
 width: 200px; 
 padding: 6px;
 border-radius: 5px;
 margin-bottom: 1vh;
 background-color: lightgray;
 color: #2c3e50;
 cursor: pointer;
}
.add:hover{
  color: #42b983;
}
</style>