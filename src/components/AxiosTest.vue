<script>
// import Ninjas from './components/ninja/Ninjas'

export default {
  name: 'axios-test',
  data() {
    return {
      teachers: []
    }
  },
  // components: {
  //   // 'ninjas': Ninjas
  // },
  methods: {
    getAllTeacher() {
      let self = this
      this.$axios({
        methods: 'get',
        url: 'https://randomuser.me/api/?results=20'
      })
        .then((resp) => {
          self.teachers = resp.data
          console.log(self.teachers)
        })
    }
  }
  // created() {},
  // beforeRouteEnter() {},
  // props: {
  //   // [] or {}
  // },
  // computed: {
  //   // fun() {return}
  // },
  // filters: {
  //   // 'filter-name' or filterName: fun(value) {
  //   //  return value
  //   // }
  // },
  // directives: {
  //   // https://codesandbox.io/s/my2ppwlk9p?from-embed
  //   // 'custom-directive': {
  //   //   bind(el, binding, vnode) {
  //   //     el.style.color = '#' + Math.random().toString().slice(2, 8)
  //   //   }
  //   // }
  // },
  // mixins: []
}
</script>

<template lang="pug">
  v-app
    v-container
      v-list(two-line='')
        template(v-for='teacher in teachers')
          v-list-tile-content
            v-list-tile-title {{ teacher.TeacherName }}
            v-list-tile-sub-title {{ teacher.TeacherTel }}
          v-divider
    v-btn(large='', color='success', @click='getAllTeacher') 查詢所有老師
</template>

<style scoped lang="stylus">
  #axios-test
    color #222
</style>
