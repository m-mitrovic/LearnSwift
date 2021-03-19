<template>
  <div class="header">
    <h1>Learn Swift</h1>
    <p>The fundamentals of Swift by Mihajlo M.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
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
.header {
  background: linear-gradient(var(--accentColor), var(--backgroundColor));
  padding: 10px;
  padding-top: 25px;
  border-radius: 15px;
  color: white;
  height: 200px;
  margin-bottom: -120px;
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
</style>
