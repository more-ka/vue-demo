<template>
  <div>
    这是store页面
    <g-input :value="value" @input="change"></g-input>
    {{value}}
  </div>
</template>

<script>
import GInput from "../components/G-input.vue"
export default {
  name: 'store',
  data () {
    return {
      value: ''
    }
  },
  components: {
    GInput
  },
  methods: {
    change (e) {
      this.value = e
    }
  }
}
</script>

<style>

</style>
