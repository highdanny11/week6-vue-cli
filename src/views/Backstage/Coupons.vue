<template>
  <div
    class="modal fade"
    ref="addeditModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="card">
          <div class="card-header">{{ text }}優惠卷</div>
          <div class="card-body">
            <div class="form-group">
              <label for="couponname">優惠名稱:</label>
              <input
                type="text"
                class="form-control my-2"
                v-model="coupon.title"
                id="couponname"
                autofocus
              />
              <label for="couponcode">優惠代碼:</label>
              <input
                type="text"
                class="form-control my-2"
                v-model="coupon.code"
                id="couponcode"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="expiry">到期日:</label>
                <input
                  type="date"
                  class="form-control my-2"
                  v-model="coupon.due_date"
                  :min="mindata"
                  id="expiry"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="discount">折扣:</label>
                <select
                  class="form-select my-2"
                  v-model.number="coupon.percent"
                  aria-label="Default select example"
                  id="discount"
                >
                  <option selected value="100">沒有折扣</option>
                  <option value="10">一折</option>
                  <option value="20">二折</option>
                  <option value="30">三折</option>
                  <option value="40">四折</option>
                  <option value="50">五折</option>
                  <option value="60">六折</option>
                  <option value="70">七折</option>
                  <option value="80">八折</option>
                  <option value="90">九折</option>
                </select>
              </div>
            </div>
            <div class="d-flex flex-row-reverse align-items-center">
              <a
                href="#"
                class="btn btn-primary"
                v-if="statusbtn"
                :class="{ disabled: loading }"
                @click.prevent="build"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  v-if="loading"
                  role="status"
                >
                  <span class="visually-hidden"></span>
                </div>
                <span v-if="!loading">建立</span>
              </a>
              <a
                href="#"
                class="btn btn-primary"
                v-if="!statusbtn"
                :class="{ disabled: loading }"
                @click.prevent="updata(coupon.id)"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  v-if="loading"
                  role="status"
                >
                  <span class="visually-hidden"></span>
                </div>
                <span v-if="!loading">更新</span>
              </a>
              <div class="form-check form-switch me-3">
                <input
                  class="form-check-input"
                  v-model.number="coupon.is_enabled"
                  :true-value="1"
                  :false-value="0"
                  checked
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">{{
                  coupon.is_enabled === 1 ? "啟用" : "未啟用"
                }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center my-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">優惠名稱</th>
            <th scope="col">優惠代碼</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">折扣</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in coupons" :key="i">
            <th scope="row">{{ item.title }}</th>
            <td>{{ item.code }}</td>
            <td>{{ item.due_date.toLocaleDateString() }}</td>
            <td>{{ item.is_enabled === 1 ? "啟用" : "未啟用" }}</td>
            <td>{{ item.percent * 0.1 }}折</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                :disabled="text === item.id"
                @click="delCoupon(item.id)"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  v-if="text === item.id"
                  role="status"
                >
                  <span class="visually-hidden"></span>
                </div>
                <span v-if="text !== item.id">刪除</span>
              </button>
            </td>
            <td>
              <div class="btn btn-danger" @click="editCoupon(item)">編輯</div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="btn btn-primary" @click="addeditCoupon()">新增</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      coupons: {},
      couponModal: '',
      coupon: {
        title: '',
        is_enabled: 1,
        percent: 100,
        due_date: '',
        code: ''
      },
      mindata: '',
      pagination: {},
      statusbtn: true,
      text: '', // 進入modal的標題，和disabled的狀態判斷
      loading: false
    }
  },
  methods: {
    getdata (num = 1) {
      this.$http
        .get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${num}`)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            this.pagination = res.data.pagination
            this.coupons = res.data.coupons
            this.coupons.forEach((item) => {
              if (JSON.stringify(item.due_date).length === 10) {
                item.due_date = new Date(
                  JSON.parse(JSON.stringify(item.due_date) + '000')
                )
              } else {
                item.due_date = new Date(
                  JSON.parse(JSON.stringify(item.due_date))
                )
              }
            })
          } else {
            alert('登入失敗')
          }
        })
    },
    build () {
      this.loading = true
      const date = new Date(this.coupon.due_date) // 轉換所需值
      const arry = Object.keys(this.coupon).map((key) => {
        // 判斷是否有空值
        return this.coupon[key]
      })
      if (!arry.includes('')) {
        const putcoupon = {
          ...this.coupon
        }
        putcoupon.due_date = JSON.parse(
          JSON.stringify(Date.parse(date)).substr(0, 10)
        )
        this.$http
          .post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon`, { data: putcoupon })
          .then((res) => {
            if (res.data.success) {
              this.loading = false
              console.log(res)
              this.getdata()
              this.clearCoupon()
              this.couponModal.hide()
            } else {
              console.log(res)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('有值沒有填')
      }
    },
    updata (id) {
      this.loading = true
      const date = new Date(this.coupon.due_date) // 轉換所需值
      const arry = Object.keys(this.coupon).map((key) => {
        // 判斷是否有空值
        return this.coupon[key]
      })
      if (!arry.includes('')) {
        const putcoupon = {
          ...this.coupon
        }
        putcoupon.due_date = JSON.parse(
          JSON.stringify(Date.parse(date)).substr(0, 10)
        )
        this.$http
          .put(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`, {
            data: putcoupon
          })
          .then((res) => {
            if (res.data.success) {
              this.loading = false
              console.log(res)
              this.getdata()
              this.clearCoupon()
              this.couponModal.hide()
            } else {
              console.log(res)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('有值沒有填')
      }
    },
    editCoupon (item) {
      this.text = '編輯'
      this.clearCoupon()
      this.couponModal.show()
      this.statusbtn = false
      this.coupon = {
        ...item
      }
      this.coupon.due_date = this.coupon.due_date.toISOString().split('T')[0] // 換成input所需格式
    },
    clearCoupon () {
      this.coupon = {
        title: '',
        is_enabled: 1,
        percent: 100,
        due_date: '',
        code: ''
      }
    },
    delCoupon (id) {
      this.text = id
      this.$http
        .delete(` ${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.getdata()
            this.text = ''
          } else {
            console.log(res)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addeditCoupon () {
      this.text = ''
      this.clearCoupon()
      this.statusbtn = true
      this.couponModal.show()
    }
  },
  mounted () {
    this.couponModal = new Modal(this.$refs.addeditModal, {
      keyboard: false
    })
    this.getdata()
    this.mindata = new Date().toISOString().split('T')[0]
  }
}
</script>
