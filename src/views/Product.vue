<template>
<Loading :active="isLoading" >
      <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-warning mx-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </Loading>
<Card :product="product"></Card>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card
  },
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  mounted () {
    const { id } = this.$route.params
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`)
      .then(res => {
        if (res.data.success) {
          this.product = res.data.product
          this.isLoading = false
        } else {
          console.log('失敗')
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }
}
</script>
