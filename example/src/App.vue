<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: nameof<App>(),
  components: {
    HelloWorld
  },
  data: () => ({
    msg: 'Hello Vue 3 + TypeScript + Vite'
  }),
  mounted() {
    setTimeout(() => this.msg += ' + ts-nameof', 2000)
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
