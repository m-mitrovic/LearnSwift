<template>
  <pre><code class="lang-swift" ref="code">
    <slot/>
    </code></pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hljs from "highlight.js" 
import "highlight.js/styles/vs2015.css"

export default defineComponent({
  name: "TextIconBlock",
  mounted() { // Allows me to color the Swift code correctly
    hljs.highlightBlock(this.$refs.code as HTMLElement)
  },
  updated() {
    hljs.highlightBlock(this.$refs.code as HTMLElement)
    console.log("Updated code block")
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lang-swift {
  background: var(--secondaryColor);
  padding: -10px 0px;
}
</style>