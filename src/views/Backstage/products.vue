<template>
  <div class="container">
    <div class="d-flex flex-row-reverse">
      <a  class="btn btn-primary btn-lg mt-3" @click="edit()">新增</a>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style="width: 100px">產品編號</th>
              <th scope="col">產品名稱</th>
              <th scope="col" style="width: 80px">原價</th>
              <th scope="col" style="width: 80px">售價</th>
              <th scope="col" style="width: 100px">是否啟用</th>
              <th scope="col">評價</th>
              <th scope="col">編輯</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in products" :key="item">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.is_enabled ? "啟用" : "未啟用" }}</td>
              <td>
                <span class="d-flex align-items-center">
                  {{ item.star === undefined ? "1" : item.star
                  }}<svg
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
                <button class="btn btn-outline-primary" @click="edit(item)" >
                  編輯
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-danger"
                  @click="openDelete(item.id)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Pagination @updata="getdata" :pagination="pagination"></Pagination>
  <ProductModal  @dataup="getdata" ref="modal"></ProductModal>
  <DeletModal ref="del" @deldata="getdata"></DeletModal>
</template>
<script>
import Pagination from '@/components/Pagination.vue'
import ProductModal from '@/components/ProductModal.vue'
import DeletModal from '@/components/DeletModal.vue'
export default {
  components: {
    Pagination,
    ProductModal,
    DeletModal
  },
  data () {
    return {
      products: [],
      temporaryZone: {},
      pagination: {}
    }
  },
  methods: {
    getdata (num = 1) { // 載入後端資料
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${num}`)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.products.forEach(item => {
              item.is_enabled = Boolean(item.is_enabled) // 改回布林
            })
          } else {
            console.log('失敗')
          }
        })
    },
    edit (item = true) {
      if (item === true) {
        const addProduct = {
          imagesUrl: [],
          star: 1
        }
        this.$refs.modal.openModal(addProduct)
      } else {
        this.temporaryZone = { ...item }// 存進去暫放區
        console.log(item)
        if (Object.prototype.hasOwnProperty.call(this.temporaryZone, 'star') === false) { // 判斷是否有平價星的欄位
          this.temporaryZone.star = 5
          this.$refs.modal.openModal(this.temporaryZone)
        } else {
          this.$refs.modal.openModal(item) // 打開輸入介面
        }
        this.$refs.modal.modal.show() // 打開輸入介面
      }
    },
    closeModal () { // 關閉編輯介面
      this.$refs.modal.modal.hide()
    },
    openDelete (id) {
      this.$refs.del.OpenDelModal(id)
    }
  },
  created () {
    this.getdata()
  }
}
</script>
