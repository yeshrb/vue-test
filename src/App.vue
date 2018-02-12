<template>
  <div>
    <ul>
      <li v-for="item in list">{{item.name}}-{{item.price}}</li>
    </ul>
    <button @click="addItem">addItem</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import  Vue  from 'vue';
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
      // this.list.push({
      //   name:'pinapple',
      //   price:60
      // })
      
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
