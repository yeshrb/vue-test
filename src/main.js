import Vue from 'vue'
var myHeaderChild = {
  template: '<p>This is my header child</p>'
}
var myHeader =  {
  template: '<p>This is my header </br> <my-header-child /></p> ',
  components: {
    'my-header-child' : myHeaderChild
  }
}

new Vue({
  el: '#app',
  data:{
    word: 'hello world2'
  },
  components: {
    'my-header' : myHeader
  }

})
