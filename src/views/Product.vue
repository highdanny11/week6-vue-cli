<template>
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
      product: {}
    }
  },
  mounted () {
    const { id } = this.$route.params
    this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`)
      .then(res => {
        if (res.data.success) {
          this.product = res.data.product
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
