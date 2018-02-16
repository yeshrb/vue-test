
<template>
  <div>
      <h2>I am CommentA</h2>
      {{myValue}}
      <slot></slot>
      <button @click = "triggleEvent">Trigger</button>
  </div>
</template>
<script>
export default {
    props:['myValue'],
    data() {
        return {
            message:'hello'
        }
    },
  methods:{
      triggleEvent() {
          this.$emit('my-event',this.message)
      }
  }
}
</script>

