<template>
  <div class="page">
  这是content页面---{{content}}
  </div>
</template>

<script>
export default {
  name: 'GContent',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    this.$bus.$on('change', res => {
      this.content = res
    })
  }
}
</script>

<style>

</style>
