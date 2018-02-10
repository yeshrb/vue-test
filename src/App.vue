<template>
  <div>
    <p>This is rendered by v-html <span v-html="hello"></span></p>
    <p>This is rendered by v-text <span v-text="hello"></span></p>
    <p>This is rendered by Mustache {{ hello }}</p>
    {{ status? 'success' :'fail'}}
  </div>
</template>

<script>
export default {
   data () {
    return {
      hello : '<span> hello</span>',
      num :1,
      status :true
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
  color: #2c3e50;
  margin-top: 60px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
</style>
