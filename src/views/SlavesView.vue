<template>
  <div class="slave">
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
</style>