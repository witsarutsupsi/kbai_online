<template>
<div class="w-100 h-100 vld-parent">    
        <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>    
        <div class="d-flex w-100 h-100 outer-wrap">
            <div class="d-flex flex-fill flex-column main-panel" style="background-color:white;">                
                <div class="img-slider">
                    <div :id="id" :class="{'img': true, 'active': imageActiveIndex === id }" v-for="(file, id) in images" :key="id" v-on:click="onSelect($event)">
                        <img class="thumb" :src="file.file" alt="" srcset=""><img class="cancel-btn" src="../assets/UI/png/cancel.png" @click="deleteImage(id)" alt="" srcset="">
                    </div>
                </div>
            </div>
            <div class="side-panel" style="width:300px;">
                <!-- <div class="center">
                    <img @click="takePhoto" v-on:click.prevent class="camera-btn op-btn" src="../assets/UI/png/Group 116.png" height="128" alt="" srcset="" />                    
                </div> -->
                <div class="center">
                    <img v-b-modal.modal-1  class="camera-btn op-btn" src="../assets/UI/png/Group 120.png" height="128" alt="" srcset="" />                                
                </div>
            </div>
        </div>
    
        <b-modal ref="capture-modal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3> New image has been captured!</h3>
            </div>
        </b-modal>

        <b-modal ref="modal-1-ref" id="modal-1" title="Upload images" ok-only ok-variant="secondary" ok-title="Dismiss">
            <div class="large-12 medium-12 small-12 cell">
                <label>Files
                    <input type="file" id="files" ref="files" accept="image/x-png,image/gif,image/jpeg" multiple v-on:change="handleFilesUpload()" />
                </label>
                <button v-on:click="submitFiles()" class="btn base-btn">Upload</button>
            </div>
        </b-modal>
    
</div>
</template>

<script>
//import VueSlickCarousel from "vue-slick-carousel";
//import "vue-slick-carousel/dist/vue-slick-carousel.css";

// optional style for arrows & dots
//import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";
//import LongPress from 'vue-directive-long-press'

//import VueAxios from 'vue-axios';
import "vue-awesome/icons";
// import Webcam from 'webcam-easy';
// import VIcon from "vue-awesome/components/Icon";
import {
    mapGetters
} from "vuex";

// var convert = require("xml-js");
import Camera from "vue-html5-camera"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

var axios_options = {
    proxy: {
        host: "127.0.0.1",
        port: 3000,
    },
};

var axiosInstance = axios.create({
    baseURL: `${location.protocol}//${location.hostname}`,
});

export default {
    name: "Capture",
    components: {
        Loading,
        Camera
    },
    props: {},
    created() {},
    data() {
        return {
            /*settings: {
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false
            },*/
            ipAddress: "192.168.88.247",
            connected: "Disconnected",
            teleop: null,
            cmdVel: null,
            rbServer: null,
            imgSrc: null,
            projectDirIn: "",
            nameState: null,
            images: [],
            imageActiveIndex: undefined,
            showCapturing: false,
            src: "",
            isLoading: false,
        };
    },
    methods: {
        submitFiles() {
            /*
              Initialize the form data
            */
            let formData = new FormData();

            /*
              Iteate over any file sent over appending the files
              to the form data.
            */
            for (var i = 0; i < this.files.length; i++) {
                let file = this.files[i];

                formData.append('files[' + i + ']', file);
            }

            formData.append('projectpath', this.$store.getters.getProjectDir);
            console.log("This is a list")
            console.log(formData)

            /*
              Make the request to the POST /multiple-files URL
            */
            this.$refs['modal-1-ref'].hide()
            this.isLoading = true
            console.log(this.isLoading)
            axios.post('/multiple-files',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function () {
                    console.log('SUCCESS!!');
                    axiosInstance.post("/getFiles", {
                        path: this.$store.state.projectDir
                    }).then((response) => {
                        console.log(response.data.files);
                        while (this.images.length) {
                            this.images.pop();
                        }
                        var info = response.data.files
                        var index, len
                        for (index = 0, len = info.length; index < len; ++index) {
                            var imPath =

                                '/' +
                                info[index].file
                            this.images.push({
                                fileName: info[index].file,
                                file: imPath,
                                id: info[index].id,
                            })
                        }

                    });
                    this.isLoading = false
                }.bind(this))
                .catch(function () {
                    console.log('FAILURE!!');
                    this.isLoading = false
                }.bind(this));
        },

        /*
          Handles a change on the file upload
        */
        handleFilesUpload() {
            this.files = this.$refs.files.files;
        },
        doNothing: function () {},
        createProject: function () {
            this.$store.dispatch("setProjectDir", "myProject");
        },
        takePhoto: async function () {
            console.log("takePhoto");
            this.src = this.$refs.camera.click();
            console.log(this.src);
            await axiosInstance
                .post('/upload/image', {
                    path: this.$store.state.projectDir,
                    base64image: this.src,
                })
                .then((response) => {
                    console.log(response.data)
                    if (response.data.status === 'OK') {
                        console.log('File is OK!!!!')
                        this.showCapturing = false
                        this.$refs['capture-modal'].hide()

                        //this.$refs['saveAnotation'].show()
                        axiosInstance.post("/getFiles", {
                            path: this.$store.state.projectDir
                        }).then((response) => {
                            console.log(response.data.files);
                            while (this.images.length) {
                                this.images.pop();
                            }
                            var info = response.data.files
                            var index, len
                            for (index = 0, len = info.length; index < len; ++index) {
                                var imPath =
                                    '/' +
                                    info[index].file
                                this.images.push({
                                    fileName: info[index].file,
                                    file: imPath,
                                    id: info[index].id,
                                })
                            }

                        });
                        //return true;
                    }
                })
                .catch((error) => {
                    console.log(error)
                    //return false;
                }).this

            //return true
        },
        getImage: async function () {
            //var c = this.$refs.myCanvas;
            this.showCapturing = true
            this.$refs['capture-modal'].show()
            var c = document.createElement('canvas');
            c.width = 640;
            c.height = 480;
            var ctx = c.getContext("2d");
            var img = this.$refs.displayImage;
            //const img = new Image();
            //img.src = this.imgSrc
            //img.onload = () => {
            //    ctx.drawImage(img, 0, 0);
            //};
            ctx.drawImage(img, 0, 0);
            //imgData64 = c.toDataURL()
            //console.log(c.toDataURL());
            //this.$store.dispatch("uploadImage", c.toDataURL());

            await axiosInstance
                .post('/upload/image', {
                    path: this.$store.state.projectDir,
                    base64image: c.toDataURL(),
                })
                .then((response) => {
                    console.log(response.data)
                    if (response.data.status === 'OK') {
                        console.log('File is OK!!!!')
                        this.showCapturing = false
                        this.$refs['capture-modal'].hide()

                        //this.$refs['saveAnotation'].show()
                        axiosInstance.post("/getFiles", {
                            path: this.$store.state.projectDir
                        }).then((response) => {
                            console.log(response.data.files);
                            while (this.images.length) {
                                this.images.pop();
                            }
                            var info = response.data.files
                            var index, len
                            for (index = 0, len = info.length; index < len; ++index) {
                                var imPath =
                                    '/' +
                                    info[index].file
                                this.images.push({
                                    fileName: info[index].file,
                                    file: imPath,
                                    id: info[index].id,
                                })
                            }

                        });
                        //return true;
                    }
                })
                .catch((error) => {
                    console.log(error)
                    //return false;
                }).this

            //return true
        },
        deleteImage: function (index) {

            console.log("Image has been deleted");
            console.log(index)
            console.log(this.images[index].fileName)

            axiosInstance
                .post("deleteImage", {
                    projectpath: this.$store.getters.getProjectDir,
                    filename: this.images[index].fileName,

                })
                .then((response) => {
                    console.log(response.data);
                    axiosInstance.post("/getFiles", {
                        path: this.$store.state.projectDir
                    }).then((response) => {
                        console.log(response.data.files);
                        while (this.images.length) {
                            this.images.pop();
                        }
                        var info = response.data.files
                        var index, len
                        for (index = 0, len = info.length; index < len; ++index) {
                            var imPath =
                                '/' +
                                info[index].file
                            this.images.push({
                                fileName: info[index].file,
                                file: imPath,
                                id: info[index].id,
                            })
                        }

                    });
                });
        },
        onSelect: function (event) {
            console.log("pop array")
            var targetId = event.currentTarget.id
            console.log(targetId); // returns 'foo'
            var index = Number(targetId)
            this.imageActiveIndex = index

            // console.log(this.images[index].file)
            console.log(this.$store.getters.getImages[index].file);
            this.imSrc = this.$store.getters.getImages[index].file;
            this.selectedFile = this.$store.getters.getImages[index].fileName;
            this.imFolder = "images";

            return (this.selectedIndx = index);

        },
    },

    directives: {},

    mounted() {

        axiosInstance.get("getIP", axios_options).then((response) => {
            this.ipAddress = response.data.IP;
            this.imgSrc =
                "http://" +
                this.ipAddress +
                ":8080/stream?topic=/output/image_raw&type=ros_compressed";

        });

        // const webcamElement = document.getElementById('webcam');
        // const canvasElement = document.getElementById('canvas');
        // const snapSoundElement = document.getElementById('snapSound');
        // const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

        // webcam.start()
        //     .then(result => {
        //         console.log("webcam started");
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        console.log("Started roslibjs");
    },
    computed: {
        ...mapGetters(["getProjectDir"]),
        getImgSrc: function () {
            return this.imgSrc;
        },
        //getProjectDir() {
        //    return this.$store.state.projectDir
        //}
    }
};
</script>

<style lang="scss" scoped>
$primary-color: #007e4e;

.op-btn {
    transition: opacity 0.3s ease-in;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
}

.base-btn {
  color: white;
  background-color: $primary-color;
  margin-right: 10px !important;
  border-radius: 10px !important;
  width: 20%;  
}

.side-panel {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 300px;
    margin-bottom: 30px;

    .next {
        height: 50px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border-radius: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 15px;

        span {
            color: $primary-color;
            font-size: 1.5rem;
            font-weight: 800;

            &.ico {
                position: absolute;
                top: 7px;
                right: 18px;
            }
        }
    }
}

#logo .fa-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn-space {
    margin-right: 5px;
}

.outer-wrap {
    overflow: hidden;
}

.main-panel {
    width: calc(100% - 300px);
    height:100%
}

.img-slider {
    display: -webkit-box;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    overflow-y: scroll;       
    position: relative;
    padding-top: 6px;
    padding-bottom: 6px;
    margin: 20px;

    .img {
        background-color: #2f3241;
        height: 160px;
        width: 160px;
        margin: 5px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        opacity: 0.7;
        transition: opacity 0.3s ease-in;
        cursor: pointer;

        &.active,
        &:hover {
            opacity: 1;
        }

        &.active::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border: 7px solid $primary-color;
            border-radius: 20px;
            pointer-events: none;
        }

        .thumb {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .cancel-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
    }
}

.display-panel {
    border-radius: 8px;
    background-color: #333;
    overflow: hidden;
    margin-top: 15px;

    .display-image {
        margin: 0;

        canvas {
            min-height: 180px;
            height: 180px;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
