<template>
  <div class="home">
    <p>Welcome to Your Vue.js App</p>
    <button @click="toParent">跳转到parent</button>
    <button @click="back">跳转到上一页</button>
    <button @click="push">跳转到下一页</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  methods: {
    toParent () {
      this.$router.push('/parent')
    },
    back () {
      this.$router.back()
    },
    push () {
      this.$router.replace({ name: 'parent' })
    }
  }
}
</script>
