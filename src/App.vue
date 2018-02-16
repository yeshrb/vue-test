<template>
  <div>
    <input type="text" v-model="myVal">
    <!-- <input type="text" name="fname" v-model="myVal"/> -->
    <com-a :my-value="myVal" @my-event="onMyEvent">This is slot</com-a>        
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import  Vue  from 'vue'
import ComA from '@/components/comA'
export default {
  components:{
    ComA,
    HelloWorld
  },
   data () {
    return {
      comToRender:'com-a',
      hello : '<span> hello</span>',
      url : 'http://www.bing.com',
      title :'必应',
      isPartA : true,
      myVal:'',
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
 
  methods :{
    addItem() {
      Vue.set(this.list,2,{
        name:'pinapple',
        price:60
      })
    },
    toggle() {
      this.isPartA = !this.isPartA
    },
    onMyEvent(e) {
      console.log(e)
    },
    getMyComputedVal(){
      return Date.now();
    }
  },
  computed:{
    myComputedVal:function(){
      //return this.myVal.replace(/\d/g,'')
      return Date.now();
    }
  },
  watch : {
    myVal: function(val,oldVal) {
      console.log('new value : '+val + ' old value : '+ oldVal) 
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
