<template>
  <unity src="static/Build/VKBuild.json" width="1000" height="600" unityLoader="static/Build/UnityLoader.js"></unity>
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
