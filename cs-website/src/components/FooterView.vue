<template>
  <div class="main">
    <p class="name">Created by Mihajlo Mitrovic</p>
    <p>ICS4U1 - Mr. Tedesco 2021</p>
    <br>
    <a href="https://github.com/m-mitrovic/LearnSwift" target="_blank">
      <img src="../../src/assets/github.svg" alt="Learn Swift by Mihajlo M. GitHub Link">
    </a>
    <br>
    <p3>Built in Vue.JS using TypeScript, HTML, JavaScript, & CSS  -  Hosted on Firebase</p3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterView',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Nanum Pen Script', cursive;/* 'Rock Salt', 'sans-sherif'; */
  line-height: 0px;
  font-size: 4em;
  margin-bottom: 20px;
}
.main {
  background: linear-gradient(var(--backgroundColor), #4b6584);
  padding: 10px;
  padding-top: 40px;
  border-radius: 15px;
  color: white;
  margin-top: 20px;
  margin-right: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-weight: 600;
  font-size: 1.3em;
  margin-bottom: -25px;
  opacity: 0.6;
  text-transform: uppercase;
}
.name {
  opacity: 1;
}
p3 {
  font-weight: 400;
  font-size: 1em;
  margin-top: 60px;
  opacity: 0.6;
  text-transform: uppercase;
}
img {
  width: 50px;
  height: 50px;
  fill: white;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
