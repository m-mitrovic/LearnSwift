<!-- The actual certificate with the customizable name -->
<template>
  <div class="main">
    <img src="../../assets/CertificateBackground.png"/>
    <h1>{{name}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CertificateView',
  props: {
    name: String,
  },
  data() {
    return {
      limit: 6, // The maximum number of tests you can complete. In production version, the completedCount would be compared to the limit to see wether or not to show the certificate yet.
      showCertificate: false
    }
  },
});
</script>

<style scoped>
.main {
  text-align: center;
  margin-bottom: 150px;
  text-align: center;
  position: relative;
}
img {
  /* width: 999px;
  height: 627px; */
  width: 100%;
  height: 100%;
}
h1 {
  text-align: center;
  position: absolute;
  top: 21.2%;
  font-size: 5.5vw;
  color: black;
  font-family: 'Satisfy', cursive;
  width: 100%;
}
h1#old {
  text-align: center;
  position: absolute;
  top: 128px;
  font-size: 5.5em;
  color: black;
  font-family: 'Satisfy', cursive;
  width: 999px;
}
</style>
