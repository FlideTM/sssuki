<template>
    <div class="Popup">
        <div class="Block">
            <div id="close"><span @click="this.$emit('closeSP')"><Icon icon="ri:close-circle-fill" /></span></div>

            

        </div>
        <div class="Background" @click="this.$emit('closeSP')"></div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    },
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