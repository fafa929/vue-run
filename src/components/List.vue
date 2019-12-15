<script>
// import Ninjas from './components/ninja/Ninjas'

export default {
  name: 'list',
  data() {
    return {
      listData: [],
      username: 'Wilson'
    }
  },
  props: ['status'],
  methods: {
    // postApiUrl
    getData() {
      let self = this
      let postApiUrl = 'https://randomuser.me/api/?results=10'
      self.$axios
        .get(postApiUrl)
        .then(response => {
          this.listData = response.data.results
          console.log(this.listData)
        })
        .catch(error => {
          // 失敗回應
          console.log(error)
        })
    },
    updateUsername() {
      let vm = this
      vm.$emit('pushNewName', vm.username)
      // pushNewName 是寫在 HTML 上的事件名稱
      // vm.username 是預計向外傳的變數
    },
    clickMe(item) {
      console.log(item)
      item.selected = !item.selected
      console.log(item.selected)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<template lang="pug">
  #list.container-fluid
    .status
      |狀態：子{{ status }}
    .form-inline
      span 子
      input(type='text', v-model='username').form-control
      button.btn.btn-primary(@click='updateUsername') 更新姓名
    table.table
      thead.thead-dark
        tr
          th(scope='col') #
          th(scope='col')
          th(scope='col') Name
          th(scope='col') Email
      tbody
        tr(v-for='(item, i) in listData', :key='i', :class="{'bg-info': item.selected}")
          th(scope='row') {{ i +1 }}
          td
            img(:src='item.picture.thumbnail')
          td {{ item.name.first }} {{ item.name.last }}
          td {{ item.email }}
          td
            button.btn.btn-outline-primary(@click='clickMe(item)') #set綁定
</template>

<style scoped lang="stylus">
  #list
    width 100%

    color #222

  table
    width 100%
</style>
