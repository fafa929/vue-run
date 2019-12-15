<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>

<template lang="pug">
  transition(name='fade')
    #app.container
      h1 My APP
      router-view
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
    text-align center
    background #ccc
</style>
