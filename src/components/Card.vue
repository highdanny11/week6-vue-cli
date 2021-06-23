<template>
  <div class="container">
    <div class="row ">
      <div class="col-6">
       <a  href="#" class="card text-decoration-none" @click.prevent="toCart()" style="width:250px;">
        <img :src="product.imageUrl" class="img-thumbnail" style="height:200px;object-fit:cover;" alt="產品圖" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              成分:{{ product.content }}
            </h6>
            <p class="card-text">
              {{ product.description }}
            </p>
            <p>原價:{{ product.origin_price }}</p>
            <p>售價:{{ product.price }}</p>
          </div>
       </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cart: {}
    }
  },
  props: ['product'],
  methods: {
    toCart () {
      console.log(this.product)
      this.cart.product_id = this.product.id
      this.cart.qty = 1
      console.log(this.cart)
      this.$http
        .post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`, { data: this.cart })
        .then((res) => {
          if (res.data.success) {
            this.$emit('tosend', res.data) // 因為跳轉太快alert出不來，因此呼叫外面的
            this.$router.push('/')
          } else {
            console.log('加入失敗')
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>
