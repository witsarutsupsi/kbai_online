<template>
    <unity src="UnityBuild/Build/game.json" width="1000" height="600" unityLoader="UnityBuild/Build/UnityLoader.js"></unity>
</template>


<script>
  import Unity from 'vue-unity-webgl'
  
  new Vue({
    components: { Unity }
  })
</script>

<style>
.unity {
    .unity-container {
        canvas {
            
        }
    }
    .unity-loader {
        .bar {
            .fill {
                /* the width will be set by the component */
            }
        }
    }
}
</style>
