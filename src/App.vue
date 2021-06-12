<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      // res:{} // mock res
    };
  },
  mounted() {
    // 本地json文件获取mock数据
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res
    // })

    // 通过easy-mock平台实现数据mock
    // this.axios.get('https://www.easy-mock.com').then((res)=>{
    //   this.res = res
    // })

    // 本地集成mockjs
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res
    // })
  },
  methods: {},
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
