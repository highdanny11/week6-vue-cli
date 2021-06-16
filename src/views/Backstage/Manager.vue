<template>
<div class="container mt-3">
  <ul class="nav justify-content-center bg-light">
  <li class="nav-item">
    <a class="nav-link" @click="signout()" aria-current="page" >登出</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link" aria-current="page" >回前台</a>
  </li>
</ul>
</div>
<div class="container">
  <router-view v-if="check">
  </router-view>
</div>
</template>
<script>
export default {
  data () {
    return {
      check: false
    }
  },
  methods: {
    signout () {
      document.cookie = 'hexToken="",expires=""'
      this.$router.push('/Login')
    },
    checkin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`
      this.$http.post(`${process.env.VUE_APP_URL}api/user/check`)
        .then(res => {
          if (res.data.success) {
            this.check = true
          } else {
            this.$router.push('/Login')
          }
        })
    }
  },
  created () {
    this.checkin()
  }
}
</script>
