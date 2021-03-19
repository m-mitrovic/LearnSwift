<template>
  <div class="header">
    <div class="input-block">
      <input :type="text" id="myText" :placeholder="placeholder" autocomplete="off" autocorrect="off" spellcheck="off" v-model="text" v-on:keyup.enter="run()"/>
    <!-- The above code assigns the input text to the text variable, in order to allow comparison to see wether the response is correct  -->
    </div>
    <br>
    <transition name="slide-fade">
      <!-- Show console when user clicks "Run" -->
      <div class="relative" v-if="showPopup">
          <ModalPopup :output="matcher()" :isCorrect="matcherIsCorrect()" @close="showPopup = false"/>
      </div>
    </transition>
    <button @click="run()" :class=buttonClassName><span>{{ buttonName() }}</span></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalPopup from './ModalPopup.vue'

export default defineComponent({
  name: 'CodeBlock',
  components: {
    ModalPopup,
   // HighlightedCodeBlock
  },
  props: {
    placeholder: String,
    expectedCode: String,
    match: String,
  },
  data() {
    return {
      text: '',
      modalText: '',
      showPopup: false,
      runInput: '',
    }
  },
  methods: {
    run() {
      this.modalText = this.text
      this.showPopup = !this.showPopup
      this.runInput = this.text
    },
    matcher() {
      const matcher = new RegExp(this.match!) // Using RegExp lets me create expressions to see wether the input would be compatible in Swift. Each component sends it's own RegExp
      if (matcher.test(this.text)) {
        if (matcher.exec(this.text)?.[1].replaceAll("\"", " ").replaceAll("'", " ") == ">= 18" || matcher.exec(this.text)?.[1].replaceAll("\"", " ").replaceAll("'", " ") == "/ 2" || matcher.exec(this.text)?.[1].replaceAll("\"", " ").replaceAll("'", " ") == ">= 18") {
          return "Nothing to show"
        } else {
          return (matcher.exec(this.text)?.[1] ?? "Nothing to show").replaceAll("\"", " ").replaceAll("'", " ")
        }
      } else {
        return (matcher.exec(this.text)?.[1] ?? "App Terminated - Error " + Math.round(Math.random() * 1000 + 1000)).replaceAll("\"", " ").replaceAll("'", " ")
      }
    },
    matcherIsCorrect() {
      const matcher = new RegExp(this.match!)
      if (matcher.test(this.text)) {
        this.$emit('completed') // Emits completed event to be caught in the parent and added to the completeCount to unlock the certificate
        return true
      } else {
        return false
      }
    },
    buttonName() { // Changing the button name with each state
      if (this.showPopup == true) {
        return String.raw`Stop⠀◼`
      } else if (this.matcherIsCorrect() == true && this.runInput == this.text) {
        return String.raw`Correct⠀✓`
      } else {
        return String.raw`Run⠀▶`
      }
    },
  },
  computed: {
    buttonClassName(): string { // Changes the button class, which lets me change the syling of the different states
      if (this.showPopup == true) {
        return "stop"
      } else if (this.matcherIsCorrect() == true && this.runInput == this.text) {
        return "correct"
      } else {
        return "run"
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Rock Salt', 'sans-sherif';
  line-height: 0px;
}
.header {
  /* position: relative; */
  padding-bottom: 20px;
  padding-top: 25px;
}
.input-block {
  position: relative;
}
input {
  /* position: inline; */
  background-color: var(--secondaryColor);
  border: none;
  padding: 20px;
  border-radius: 12px;
  font-family:'IBM Plex Mono', monospace;
  font-weight: bold;
  color: white;
  outline: none;
  width: 90%;
  font-size: 18px;
}
button {
  /* Button general styling for all states */
  padding: 10px 20px 10px 20px;
  font-weight: 600;
  border-radius: 40px;
  margin-top: 20px;
  transition: transform .2s;
  cursor: pointer;
}
button:hover {
  transform: scale(1.1);
}
.stop {
  /* Button has been pressed */
   background-color: #ff4757;
   color: white;
}
.run {
  /* Button default state */
   color: white;
   background-color: var(--accentColor);
   /* color: var(--backgroundColor); */
}
.correct {
  /* User answered correctly */
   background-color: var(--correctColor);
   color: white;
}
.relative {
  display: relative;
  padding-bottom: -20px;
}
</style>

