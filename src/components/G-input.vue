<template>
  <div>
    g-input
    <input @input="input" :value="value" />
  </div>
</template>

<script>
export default {
  name: 'GInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    input (e) {
      console.log('e', e)
      let value = e.target.value
      this.$emit('input', value)
    }
  }
};
</script>

<style>
</style>
