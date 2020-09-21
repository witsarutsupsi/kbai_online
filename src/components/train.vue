<template>
  <div style="height: 100vh; width: 100vw">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
    ></loading>
    <div class="train-panel">
      <button class="btn btn-option train" @click="onTrain()"></button>
      <button class="btn btn-option test" @click="onTest"></button>
      <button class="btn btn-option submit" @click="exportToServer"></button>
    </div>

    <b-card no-body class="train-pgr">
      <div class="bg-secondary text-light px-3 py-2 scroll-box" ref="logsBox">
        training result:<br />
        <div v-html="result" />
        <div v-html="logs" />
      </div>
    </b-card>

    <b-modal
      id="test-result"
      size="xl"
      title="Detected image"
      ok-only
      ok-variant="secondary"
      ok-title="Dismiss"
    >
      <img :src="imageData" />
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

var axiosInstance = axios.create({
  baseURL: `${location.protocol}//${location.hostname}`,
});

export default {
  name: "Training",
  components: {
    Loading,
  },
  props: {},
  created() {},
  data() {
    return {
      url: "",
      file: null,
      result: "",
      logs: "",
      loading: false,
      polling: null,
      lastState: "",
      isDone: false,
      isTraining: false,
      isDownloading: false,
      imageData: null,
      showModal: false,
      isLoading: false,
      fullPage: true,
    };
  },

  methods: {
    onCreate: () => {
      window.open(
        "https://colab.research.google.com/drive/1aG7kNzByeqW2fvWWHT5fM4Nmpt48nt8J",
        "_blank"
      );
    },
    prepareData: function () {
      this.result += `Preparing data ... <br />`;
      return axiosInstance.post(
        "/archiveFile",
        { path: this.getProjectDir },
        {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    checkRunning: function () {
      return axios.get(`${this.url}/train/is_running`);
    },
    stopTraining: function () {
      return axios.get(`${this.url}/train/stop`);
    },
    getLogs: function () {
      return axios.get(`${this.url}/train/log`);
    },
    onTest: function () {
      console.log("Now loading!!!!");
      this.isLoading = true;
      axiosInstance
        .post("/detect", {
          projectpath: this.$store.state.projectDir,
          filename: "1569404476961.png",
        })
        .then((response) => {
          /*       let blob = new Blob(
        [response.data], 
        { type: response.headers['content-type'] }
      ) */

          //const urlCreator = window.URL || window.webkitURL;
          //var b64Response = btoa(unescape(encodeURIComponent(response.data)))
          var str = response.data.ImageBytes;

          //this.imageData = url.createObjectURL(blob);

          this.isLoading = false;

          var base64data = str;
          //this.imageData = base64data
          console.log(base64data);
          //console.log(this.imageData)
          this.imageData = "data:image/png;base64," + base64data;
          console.log("get response");
          this.showModal = true;
          this.$root.$emit("bv::show::modal", "test-result");

          //this.imageData = 'data:image/png;base64,' + b64Response;
          //this.imageData = urlCreator.createObjectURL(blob);

          //console.log(this.imageData)

          //return this.imageData
        });
    },
    onTrain: async function () {
      this.isLoading = true;
      axiosInstance
        .post("/upload", {
          projectpath: this.$store.state.projectDir,
        })
        .then((response) => {
          console.log(response.data.status);
          this.isDone = true;
          this.isLoading = false;
        });
    },
    async exportToServer() {
      window.open(
        "https://sharebox.nstda.or.th/drive/group-public/G5f59ac09b6c50/home%2FEKidBrightAI",
        "_blank"
      );
    },
  },
  directives: {},
  mounted() {},
  updated() {
    var logsBox = this.$refs.logsBox;
    logsBox.scrollTop = logsBox.scrollHeight;
  },
  computed: {
    ...mapGetters([
      "getProjectDir",
      "getProjects",
      "getImages",
      "getProjectStatus",
      "getCmdVel",
    ]),

    trainable: function () {
      const regex = new RegExp(
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/
      );
      return this.url === "" || !regex.test(this.url) || this.loading;
    },
    variantType: function () {
      return this.isTraining ? "primary" : "outline-primary";
    },
    downloadable: function () {
      return this.isDone && !this.isDownloading;
    },
    testable: function () {
      return this.isDone;
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #007e4e;
.train-panel {
  padding: 20px;
  background: #fff;
  height: 100px;
}
.btn-create {
  border-radius: 10px 0 0 10px !important;
}
.input-url {
  border-radius: 0 10px 10px 0 !important;
}
.base-btn {
  color: white;
  background-color: $primary-color;
  margin-left: 10px !important;
  border-radius: 10px !important;
  &:disabled {
    opacity: 0.7;
  }
}
.btn-option {
  color: white;
  background-position: center center;
  background-size: cover;
  margin-left: 30px !important;
  border-radius: 10px !important;
  width: 30%;
  height: 60px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &.train {
    background-image: url("../assets/UI/png/Group 41.png");
  }
  &.test {
    background-image: url("../assets/UI/png/Group 42.png");
  }
  &.submit {
    background-image: url("../assets/UI/png/Group 43.png");
  }
}
.train-pgr {
  border: none !important;
}
.scroll-box {
  height: calc(100vh - 78px);
  overflow-y: scroll;
  text-align: left;
  padding: 20px !important;
  background-color: #333 !important;
}
</style>
