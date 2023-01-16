<template>
  <nav>
    <router-link to="/">Клиенты</router-link>
    <router-link to="/slaves">Исполнители</router-link>
    <div class="topic" @click="topic = !topic">Сфера</div>
  </nav>
  <Topic v-if="topic" />
  <router-view/>
</template>

<script>
import Topic from '@/components/TopicApp.vue'
export default{
  components:{
    Topic,
  },
  data(){
    return{
      topic: false,
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  background-color: lightgray;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 2px 1px gray;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.topic{
  color: #2c3e50;
  font-weight: bold;
  cursor: pointer;
}
.topic:hover{
  color: #42b983;
}
</style>
