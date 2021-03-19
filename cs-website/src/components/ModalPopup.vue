<template>
  <div class="modal">
    <div class="top-bar">
      <span class="header">
        <h2>Console:</h2>
      </span>
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="content">
      <p>{{ output }}</p>
    </div>
    <div class="bottom-bar" :id="isSuccess">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalPopup",
  props: {
    output: String,
    isCorrect: Boolean,
  },
  methods: {},
  computed: {
    message() { // Returns a failure message, or randomized success message
      if (!this.isCorrect) return "Error, try a different approach.";
      const success = [
        "Perfect 👍",
        "Wow!",
        "Correct 👍",
        "Genius 🦉",
        "Flawless",
      ];
      const random = Math.floor(Math.random() * success.length);
      return success[random];
    },
    isSuccess() { // Allows me to edit div id, in order to change background color to red when failed and green for success
      if (this.isCorrect == true) {
        return "pass";
      } else {
        return "fail";
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  width: 25%;
  min-width: 290px;
  max-width: 700px;
  height: 220px;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  grid-template-columns: 1fr;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
}
h2 {
  font-size: 1.2em;
}
.close {
  font-size: 2.5em;
  cursor: pointer;
}
.content {
  text-align: left;
  font-family: "IBM Plex Mono", monospace;
  font-weight: bold;
  font-size: 1.1em;
  padding: 10px 20px;
  margin-bottom: -20px;
}
.bottom-bar {
  text-align: right;
  margin-top: -20px;
  font-weight: 500;
  font-size: 1.1em;
  border-radius: 0px 0px 20px 20px;
  text-align: center;
  padding-top: 3px;
}
#pass {
  background-color: rgb(34, 212, 49);
}
#fail {
  background-color: #ff4757;
}
</style>
