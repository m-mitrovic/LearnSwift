<template>
  <div class="main">
      <h1>{{ title }}</h1>
      <p><slot/></p>
      <CodeBlock v-if="(expectedCode != null)" :expectedCode="expectedCode" :placeholder="placeholder" :match="match" @completed="$emit('completed')"/>
      <hr class="rounded"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from '@/components/CodeBlock.vue'

export default defineComponent({
  name: "TextBlock",
  components: {
    CodeBlock,
  },
  props: {
    title: String,
    placeholder: String,
    expectedCode: String,
    match: String,
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
}
p {
  text-align: left;
  font-size: 1.1em;
  line-height: 1.9em;
}
hr.rounded {
  border-top: 3px solid #fff;
  border-radius: 6px;
  opacity: 0.2;
  margin-top: 50px;
  margin-bottom: 40px;
}
</style>
