<template>
  <div id="app">
    <Example1></Example1>
  </div>
</template>

<script>
import Example1 from './components/Example1.vue'

export default {
  name: 'App',
  components: {
    Example1
  }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
