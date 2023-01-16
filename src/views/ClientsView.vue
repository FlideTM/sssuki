<template>
  <div class="client">
    <ClientTable />
  </div>
</template>
<script>
import ClientTable from "@/components/ClientTable.vue"
export default{
  components:{
    ClientTable,
  }
}
</script>
<style scoped>
.client{
  margin-top: 5vh;
}
</style>