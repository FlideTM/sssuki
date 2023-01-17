<template>
  <div class="slave">
    <div class="add">Add slave</div>
    <SlaveTable />
  </div>
</template>
<script>
import SlaveTable from "@/components/SlaveTable.vue"
export default{
  components:{
    SlaveTable,
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
 border: 1px solid black;
 width: 200px; 
 padding: 6px;
 border-radius: 5px;
 margin-bottom: 1vh;
 background-color: lightgray;
 color: #42b983;
}
</style>