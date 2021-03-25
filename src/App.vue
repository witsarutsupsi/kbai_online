<template>
<div id="app">

    <!--<LoadingScreen :isLoading="isLoading" />-->
    <!-- <LoadingScreen></LoadingScreen>
    <main v-if="!isLoading">
        <Main msg="Welcome to Your Vue.js App" />
        <Simulator msg="Welcome to Your Vue.js App" />
    </main> -->

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view />

</div>
</template>

<script>
import Main from './components/main.vue'
import Simulator from './components/simulator.vue'
import LoadingScreen from "./components/LoadingScreen";
/*import axios from 'axios'
var axiosInstance = axios.create({
    baseURL: `${location.protocol}//${location.hostname}:3000`,
})*/
export default {
    name: 'app',
    components: {
        Main, Simulator,
        LoadingScreen
    },
    data() {
        return {
            isLoading: false
        };
    },
    /*mounted() {
 
        const intervalObj = setInterval(() => {
            axiosInstance.get('getDrive').then((response) => {
              console.log(response.data.drives)
              if(response.data.drives === 'OK'){
                this.isLoading = false;
                console.log(response.data.mountPoints.path)
                this.$store.commit('setUsbPath', response.data.mountPoints.path)
                clearInterval(intervalObj);
              }
            })
        }, 1500);
    }*/
}
</script>

<style>
#app {
    font-family: 'Poppins', 'Sarabun', sans-serif;
    /*font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;*/
    color: #333;
}

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: unset;
}

ul {
    list-style: none;
    padding: 0;
}
</style>
