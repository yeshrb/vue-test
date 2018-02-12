<template>
  <div>
    <ul>
      <li v-for="item in list">{{item.name}}-{{item.price}}</li>
    </ul>
    <button @click="addItem">addItem</button>
    <a :href="url" :title="title">baidu</a>
    <a v-if="isPartA">isPartA</a>
    <a v-else>isPartB</a>
    </br>
     <a v-show="isPartA">another PartA</a>
   
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import  Vue  from 'vue';
export default {
  
   data () {
    return {
      hello : '<span> hello</span>',
      url : 'http://www.bing.com',
      title :'必应',
      isPartA : true,
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
  },
  components : {
    HelloWorld,
  },
  methods :{
    addItem() {
      Vue.set(this.list,2,{
        name:'pinapple',
        price:60
      })
    },
    toggle() {
      this.isPartA = !this.isPartA
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
