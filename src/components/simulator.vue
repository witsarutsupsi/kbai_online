<template>
  <div class="sim-panel">
    <link rel="shortcut icon" href="TemplateData/favicon.ico">
    <link rel="stylesheet" href="TemplateData/style.css">
    <script src="TemplateData/UnityProgress.js"></script>
    <script src="src/FileSaver.js"></script>
    <script src="Build/UnityLoader.js"></script>
    <div id="gameContainer" style="width: 990px; height: 557px"></div>
  </div>
</template>


<script>
export default {
      data () {
        return {
            var gameInstance = UnityLoader.instantiate("gameContainer", "Build/VKBuild.json", {onProgress: UnityProgress});
          }
        }
      }
    } 
</script>

<style>
.sim-panel {
  background-color: #fff2d6;
  padding: 20px;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
