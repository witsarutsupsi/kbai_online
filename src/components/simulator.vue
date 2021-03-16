<template>
  <div class="sim-panel d-flex justify-content-center">
    <ul>

       <li class="project">   
         <a :href="publicPath + 'src/assets/UnityBuild/index.html'">Virtual Kanomchan</a> 
       </li>

    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>
.sim-panel {
  background-color: #fff2d6;
  padding: 20px;
  margin-top: 35px;
  margin-left: auto;
  width: 1280px;
  height: 720px;
}
</style>