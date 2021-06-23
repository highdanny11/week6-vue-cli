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
  <div class="container mt-3">
    <div class="d-flex flex-row-reverse">
      <a
        href="#"
        v-if="!submit"
        class="btn btn-outline-danger btn-lg mt-3"
        @click.prevent="allCartsDel()"
        >全部刪除</a
      >
    </div>
    <table class="table align-middle mb-5">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">品名</th>
          <th scope="col" style="width: 200px">數量/單位</th>
          <th scope="col">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in cartsData.carts" :key="key">
          <th scope="row">
            <button
              type="button"
              :disabled="loading === item.id"
              class="btn btn-outline-danger"
              @click="oneCartDel(item.id)"
            >
              <div
                class="spinner-border spinner-border-sm"
                v-if="loading === item.id"
                role="status"
              >
                <span class="visually-hidden"></span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </th>
          <td>{{ item.product.title }}</td>
          <td>
            <input
              type="number"
              :disabled="loading === item.id"
              @change="upCart(item)"
              min="1"
              style="width: 100px"
              v-model.number="item.qty"
              id="price"
            />{{ item.product.unit }}
          </td>
          <td>{{ item.product.price }}</td>
        </tr>
        <tr>
          <th></th>
          <td></td>
          <td>總價</td>
          <td>{{ cartsData.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
 <div class="container">
    <div class="row">
      <Form v-slot="{ errors }" ref="form" @submit="onSubmit" class="col-6 mx-auto mb-5">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">電話</label>
          <Field
            id="phone"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"
          ></Field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label"></label>
          <textarea
            name="message"
            class="form-control"
            id="area"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" :disabled="submit">送出訂單</button>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cartsData: {},
      loading: '',
      url: '',
      path: '',
      submit: 'true',
      isLoading: false,
      form: {
        user: {
          email: '',
          tel: '',
          address: '',
          name: ''
        }
      }
    }
  },
  methods: {
    showCart () {
      this.isLoading = true
      // 購物車列表
      this.$http.get(`${this.url}api/${this.path}/cart`).then((res) => {
        if (res.data.success) {
          this.cartsData = res.data.data
          this.isLoading = false
          this.selectSubmit(this.cartsData.total)
        } else {
          console.log('失敗')
        }
      })
        .catch((res) => {
          console.log(res)
        })
    },
    upCart (item) {
      // 更改購物車資訊
      this.loading = item.id
      const cart = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http
        .put(`${this.url}api/${this.path}/cart/${item.id}`, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.loading = ''
            this.showCart()
          } else {
            console.log('失敗')
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    allCartsDel () {
      // 全部刪掉
      this.$http.delete(`${this.url}api/${this.path}/carts`).then((res) => {
        if (res.data.success) {
          this.showCart()
        } else {
          console.log('失敗')
        }
      })
        .catch((res) => {
          console.log(res)
        })
    },
    oneCartDel (id) {
      // 單一刪掉
      this.$http
        .delete(`${this.url}api/${this.path}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.showCart()
          } else {
            console.log('失敗')
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    selectSubmit (value) {
      if (value === 0 || value === undefined) {
        this.submit = true
      } else {
        this.submit = false
      }
    },
    onSubmit () {
      const order = this.form
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then(res => {
          if (res.data.success) {
            this.showCart()
            this.$refs.form.resetForm()
            this.clearUser()
          } else {
            console.log(res)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }, // 驗證手機號碼
    clearUser () {
      this.form = {
        user: {
          email: '',
          tel: '',
          address: '',
          name: ''
        }
      }
    }
  },
  created () {
    this.path = process.env.VUE_APP_PATH
    this.url = process.env.VUE_APP_URL
    this.showCart()
  }
}
</script>
