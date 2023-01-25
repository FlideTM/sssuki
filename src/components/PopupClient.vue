<template>
<div class="popup">
    <div class="front">
        <span>Контакты</span>
        <input type="text" placeholder="Контакты" v-model="form.contact" />
        <span>Имя Фамилия</span>
        <input type="text" placeholder="Имя Фамилия" v-model="form.name" />
        <span>Заказ</span>
        <input type="text" placeholder="Заказ" v-model="form.order" />
        <span>Срок выполнения</span>
        <input type="text" placeholder="Срок выполнения" v-model="form.deadlines" />
        <span>Цена</span>
        <input type="number" placeholder="Цена" v-model="form.price" />
        <input class="button" type="submit" value="Подтвердить" @click="created" />
        {{ articleId }}
    </div>
    <div class="back" @click="closePopup"></div>
    
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            form:{
                contact: '',
                name: '',
                order: '',
                deadlines: '',
                price: '',
            },
            articleId: 'null',
        }
    },
    methods:{
        closePopup(){this.$emit('popups')},
        async created() {
        // POST request using axios with async/await
            const response = await axios.post("http://localhost:8000/clientsAdd.php", this.form);
            this.articleId = response.data;
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
.button{
    padding: 5px;
    width: 100%;
    border: 1px solid black;
    font-size: 1vw;
    font-weight: bold;
    cursor: pointer;
}
.button:hover{
    background-color: gray;
}
.button:active{
    background-color: rgb(212, 212, 212);
}
.back{
    position: fixed;
    background-color: rgba(211, 211, 211, 0.685);
    width: 100%;
    height: 100%;
}
</style>