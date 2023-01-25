<template>
  <div class="slave">
    <div class="add" @click="this.popup = !this.popup">Add slave</div>
    <SlaveTable />
    <Popup v-if="popup" @popups="closePopup" />
  </div>
</template>
<script>
import SlaveTable from "@/components/SlaveTable.vue"
import Popup from "@/components/PopupSlave.vue"
export default{
  components:{
    SlaveTable,
    Popup
  },
  data(){
    return{
      popup: false,
    }
  },
  methods:{
    closePopup(){
      this.popup = !this.popup;
    }
  }
}
</script>
<style scoped>
.slave{
  margin-top: 5vh;
}
button{
  right: 0;
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