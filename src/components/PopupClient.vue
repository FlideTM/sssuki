<template>
<div class="popup">
    <div class="front">
        <span>Имя Фамилия</span>
        <input type="text" placeholder="Имя Фамилия" />
        <span>Заказ</span>
        <input type="text" placeholder="Заказ" />
        <span>Срок выполнения</span>
        <input type="date" placeholder="Срок выполнения" />
        <span>Цена</span>
        <input type="number" placeholder="Цена" />
        <div id="butt">
            <input class="button" type="submit" value="Подтвердить" />
            <input class="button" type="submit" value="Закрыть" />
        </div>
    </div>
    <div class="back" @click="close()"></div>
</div>
</template>
<script>
export default{
    methods:{
        close(){
            this.$emit(this.popup = false)
        }
    }
}
</script>
<style scoped>
.popup{
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.front{
    z-index: 999;
    width: 20%;
    border: 4px solid black;
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
}
.front input{
    padding: 7px;
    border: none;
    border-radius: 5px;
    background-color: rgba(211, 211, 211, 0.562);
    margin-bottom: 2vh;
}
.front span{
    color: #2c3e50;
    font-size: 1vw;
    font-weight: bold;
}
#butt{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
}
.button{
    padding: 3px;
    width: 45%;
    border: 1px solid black;
    font-size: 0.7vw;
    font-weight: bold;
}
.back{
    position: fixed;
    background-color: rgba(211, 211, 211, 0.685);
    width: 100%;
    height: 100%;
}
</style>