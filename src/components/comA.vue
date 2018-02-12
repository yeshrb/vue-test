
<template>
  <div>
      <h2>I am CommentA</h2>
      <button @click = "triggleEvent">Trigger</button>
  </div>
</template>
<script>
export default {
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

