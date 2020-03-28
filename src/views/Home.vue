<template>
  <div class="home">
    <!-- <p>Welcome to Your Vue.js App</p>
    <button @click="toParent">跳转到parent</button>
    <button @click="back">跳转到上一页</button>
    <button @click="push">跳转到下一页</button> -->
    <p>content: {{content}}</p>
    <button @click="click">传递数据给content组件</button>
    <g-content></g-content>
    <p>用户名:{{userName}}</p>
    <p>最后一个字母是--{{firstLetter}}</p>
    <button @click="changeUserName">点击更改userName</button>
    <p>新增的值--{{newValue}}</p>
    <button @click="setNewValue">点击新增</button>
  </div>
</template>

<script>
// @ is an alias to /src
import GContent from '../components/G-content.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      content: '修改之前'
    }
  },
  computed: {
    // 获取state内变量的第一种方法
    ...mapState([
      'userName', 'newValue'
    ]),
    // 获取state内变量的第二种方法
    ...mapState({
      userName: 'userName'
    }),
    // 获取state内变量的第三种方法
    userName () {
      return this.$store.state.userName
    },
    // 调用getters内函数的第一种方法
    ...mapGetters([
      'firstLetter'
    ]),
    // 调用getters内函数的第二种方法
    ...mapGetters({
      firstLetter: 'firstLetter'
    }),
    // 调用getters内函数的第三种方法
    firstLetter () {
      return this.$store.getters.firstLetter
    }
  },
  methods: {
    changeUserName () {
    // 第一种方法
      // this.$store.commit('CHANGE_USER_NAME')
    // 第二种方法
      // this.$store.commit('CHANGE_USER_NAME', {
      //   newUserName: 'Richard'
      // })
    // 第三种方法
      this.$store.commit({
        type: 'CHANGE_USER_NAME',
        newUserName: 'Richard'
      })
    },
    setNewValue () {
      this.$store.commit('SET_NEW_VALUE')
    },
    click () {
      this.$bus.$emit('change', this.content)
    },
    toParent () {
      this.$router.push('/parent')
    },
    back () {
      this.$router.back()
    },
    push () {
      this.$router.replace({ name: 'parent' })
    }
  },
  components: {
    GContent
  }
}
</script>
