<template>
  <div>
    <ul>
      <span>render Array</span>
      <li v-for="(item,index) in list" :class="{odd:index % 2}">
        {{ item.name }}-{{ item.price }}-{{index}}
        </li>
    </ul>

     <ul>
       <span>render Object</span>
      <li v-for="(value,key) in objList">
        {{ key}}:{{ value }}
        </li>
    </ul>
 
  </div>
</template>

<script>
export default {
   data () {
    return {
      hello : '<span> hello</span>',
      list : [
        {
         name:'apple',
         price : 34 
        },
        {
         name:'banana',
         price : 56 
        }
      ],
      objList:{
        name:'Apple',
        price:30,
        location:'Am'
      }
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
