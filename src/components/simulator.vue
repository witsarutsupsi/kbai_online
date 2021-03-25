<template>
    <div class="sim-panel">
    <unity
        src="/assets/Build/VKBuild.json"
        width="1000"
        height="600"
        unityLoader="/assets/Build/UnityLoader.js" ref="myInstance">
     </unity>
    </div>
</template>


<script>
import Unity from 'vue-unity-webgl'

export default {
  name: "app",
  components: {
    Unity
  },
};
</script>

<style>
.sim-panel {
  background-color: #fff7d6;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
