<script>
export default {
  name: 'App',
  data() {
    return {
      status: '線上',
      myStatus: '',
      username: ''
    }
  },
  methods: {
    changeStatus() {
      this.myStatus = this.status
    },
    // getNewName 是接收用的事件
    getNewName(newName) {
      let vm = this
      vm.username = newName
    }
  }
}
</script>

<template lang="pug">
  transition(name='fade')
    #app
      nav.navbar
        .navbar-text HI:父 {{ username }}

        .form-inline.mr-3
          span 父
          select(v-model='status', @change='changeStatus').form-control
            option(value='線上') 線上
            option(value='線下') 線下
      router-view(:status='myStatus', @pushNewName='getNewName')
</template>

<style lang="stylus">
  *
    &::before, &::after
      margin 0
      padding 0
      box-sizing border-box

  html
    -webkit-tap-highlight-color rgba(0, 0, 0, 0)

  body
    padding 20px
    font 16px Helvetica, Verdana, Arial, "微軟正黑體", "Microsoft JhengHei", "儷黑 Pro", "LiHei Pro", sans-serif
    > img
      position absolute
      left 0
      bottom 0
      pointer-events none

  html, body, #app
    width 100%
    height 100%
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

  img
    vertical-align top

  .m-btn
    cursor pointer
    &:hover
      background-position left bottom

  iframe[name="google_conversion_frame"]
    display none

  .fade-enter-active, .fade-leave-active
    transition all .5s

  .fade-enter, .fade-leave-to
    opacity 0

  #app
    // text-align center
</style>
