<!-- Same as TextBlock.vue, with the addition of an image with a link -->
<template>
  <div class="main">
      <h1>{{ title }}</h1>
      <div class="content">
        <a :href=link target="_blank">
        <img :src="require(`../assets/${icon}`)">
        </a>
        <p><slot/></p>
      </div>
    <hr class="rounded" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextIconBlock",
  props: {
    title: String,
    text: String,
    icon: String,
    link: String,
  },
  data() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  line-height: 0px;
  text-align: left;
  padding-bottom: 10px;
}
.main {
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
p {
  margin-left: 90px;
  text-align: left;
  font-size: 1.1em;
}
hr.rounded {
  border-top: 3px solid #fff;
  border-radius: 6px;
  opacity: 0.2;
  margin-top: 50px;
  margin-bottom: 40px;
}
.content {
  display: inline-block;
  text-align: left;
  width: 100%;
}
img {
  position: absolute;
  height: 70px;
  padding-top: 20px;
}
</style>
