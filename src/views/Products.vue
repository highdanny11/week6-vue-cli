<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col" style="width: 250px">產品</th>
              <th scope="col">產品名稱</th>
              <th scope="col" style="width: 80px">原價</th>
              <th scope="col" style="width: 80px">售價</th>
              <th scope="col">評價</th>
              <th scope="col">編輯</th>
              <th scope="col">購物車</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item">
              <th scope="row">
                <img
                  :src="item.imageUrl"
                  style="width: 200px; height: 150px"
                  alt=""
                />
              </th>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>
                <span class="d-flex align-items-center">
                  {{ item.star === undefined ? "1" : item.star }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </span>
              </td>
              <td>
                <router-link
                  class="btn btn-outline-secondary"
                   :to="`/Product/${item.id}`"
                >
                  產品細項
                </router-link>
              </td>
              <td>
                <button
                  class="btn btn-outline-primary"
                  :disabled="id === item.id"
                  @click="toCart(item)"
                >
                  <div
                    class="spinner-border spinner-border-sm"
                    v-if="id === item.id"
                    role="status"
                  >
                    <span class="visually-hidden"></span>
                  </div>
                  加入購物車
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Pagination :pagination="pagination" @updata="getdata"></Pagination>
</template>
<script>
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      url: '',
      path: '',
      products: {},
      pagination: {},
      id: '',
      cart: {}
    }
  },
  methods: {
    getdata (num = 1) {
      this.$http.get(`${this.url}api/${this.path}/products?page=${num}`)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          } else {
            console.log(res)
          }
        })
    }, // 取得商品列表
    toCart (item) {
      this.id = item.id // 開啟loading判斷模式
      this.cart = {
        product_id: item.id,
        qty: 1
      }
      this.addCart()
    },
    openModal (item) {
      console.log(item)
    },
    addCart (num = 1) { // 加入購物車
      this.cart.qty = num
      this.$http.post(`${this.url}api/${this.path}/cart`, { data: this.cart })
        .then(res => {
          if (res.data.success) {
            this.id = ''
            console.log(res.data)
          } else {
            console.log('失敗')
          }
        })
    }
  },
  created () {
    this.url = process.env.VUE_APP_URL
    this.path = process.env.VUE_APP_PATH
    this.getdata()
  }
}
</script>
