<template>
  <div class="main">
    <h1>🎉  Congrats!</h1>
    <p>{{countText()}}</p>
    <div class="certificate" :id="certificateClass" ref="cerImg">
      <CertificateView :name=returnName() class="cer-canvas"/>
    </div>
    <div class="unlock" v-if="showCertificate == false">
      <input id="myText" placeholder="Your Full Name" autocorrect="off" spellcheck="off" required autocomplete="name" v-model="name"/>
      <button @click="runDevelopment()" :class=buttonClassName><span>Claim Certificate</span></button>
    </div>
    <div class="buttons" v-show="showCertificate == true">
      <button @click="download()" :class=buttonClassName><span>Save⠀▼</span></button>
      <button @click="editName()" :class=buttonClassName><span>Edit Name⠀✎</span></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CertificateView from './CertificateView.vue'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

export default defineComponent({
  name: 'CertificateBlock',
  components: {
    CertificateView
  },
  props: {
    completeCount: Number,
  },
  data() {
    return {
      limit: 6,
      showCertificate: false,
      name: ''
    }
  },
  methods: {
    returnName() {
      return this.name
    },
    countText() {
      if (this.completeCount == this.limit) {
        return "You've completed all "+this.limit+"/"+this.limit+" tests correctly. You should be proud of yourself!"
      } else {
        return "You have completed "+this.completeCount+"/"+this.limit+" tests correctly. Return back and complete the remaining tests to unlock your certificate!"
      }
    },
    runProduction() {  // Production function ensures that name isnt blank, and that the user completed all of their tests successfully
      if (this.name == "") { 
        alert("Name needed for certificate.")
      } else if (this.completeCount != this.limit) {
        alert("Not all tests have been completed.")
      } else {
        this.showTestAlert()
        this.showCertificate = true
        jsConfetti.addConfetti()
      }
    },
    runDevelopment() { // The development function bypasses the requirement to complete all tests in order to unlock the certificate
      if (this.name == "") { 
        alert("Name needed for certificate.")
        return
      }
      this.showTestAlert()
      this.showCertificate = true
      jsConfetti.addConfetti()
    },
    download() {
      const div = this.$refs.cerImg! as HTMLDivElement
      const downloadName = this.name+' - Learn Swift Certificate.jpeg'
      htmlToImage.toJpeg(div, { quality: 0.95 }) // Converts the certificate div to an image, which would then be downloaded as a jpeg
        .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = downloadName;
        link.href = dataUrl;
        link.click();
      });
    },
    editName() {
      this.showCertificate = false
    },
    showTestAlert() {
      if (this.completeCount != this.limit) {
        alert("Normally if you haven't completed all the tests, the certificate would be locked. However, for testing and time purposes the certificate is unlocked regardless.")
      }
    },
  },
  computed: {
    certificateClass() {
      if (this.showCertificate) {
        return "show"
      } else {
        return "hide"
      }
    }
  }
});
</script>

<style scoped>
.main {
  text-align: left;
  margin-bottom: 150px;
}
.buttons {
  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.unlock {
  position: relative;
  text-align: center;
  margin-top: 30px;
}
input {
  background-color: var(--secondaryColor);
  border: none;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;;
  font-weight: bold;
  color: white;
  outline: none;
  width: 90%;
  font-size: 18px;
}
button {
  padding: 10px 20px 10px 20px;
  font-weight: 600;
  border-radius: 40px;
  margin-top: 40px;
  transition: transform .2s;
  cursor: pointer;
  color: white;
}
button:hover {
  transform: scale(1.1);
}
.certificate {
  margin: 0px;
  padding: 0px;
}
.certificate#hide {
  background: white;
  visibility: hidden;
  height: 0px;
  overflow-x: hidden;
}
.certificate#show {
  /* width: 999px;
  height: 627px; */
  position: relative;
  width: 65vw;
  height: calc(65vw*(627/999)); /* Maintain certificate aspect ratio */
  min-width: 400px;
  min-height: 251px;
}
.cer-canvas {
  display: flex;
  position: relative;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: white;
}
.buttons button {
  margin: 30px 15px;
  margin-bottom: -100px;
  width: 180px;
}
</style>
