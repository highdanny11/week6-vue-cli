<template>
  <div class="container">
    <div class="row">
      <Form v-slot="{ errors }" @submit="onSubmit" class="col-6 mx-auto mb-5">
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
  props: ['submit'],
  data () {
    return {
      form: {
        user: {}
      }
    }
  },
  methods: {
    onSubmit () {
      const order = this.form
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then(res => {
          if (res.data.success) {
            this.clearUsaer()
            this.$emit('showcarts')
          } else {
            console.log(res)
          }
        })
    },
    clearUsaer () {
      this.form = {
        user: {
          email: '',
          tel: '',
          address: '',
          name: ''
        }
      }
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }// 驗證手機號碼
  },
  created () {
  }
}
</script>
