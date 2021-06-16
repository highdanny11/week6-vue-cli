<template>
  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    data-bs-backdrop="static"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="card">
          <div class="card-header text-center">編輯新增產品</div>
          <div class="row">
            <div class="col-6 text-center py-3">
              <figure class="figure">
                <img
                  :src="product.imageUrl || presetImg"
                  style="height: 350px"
                  class="figure-img img-fluid rounded img-thumbnail"
                  alt="123"
                />
                <figcaption class="figure-caption">商品主圖預覽</figcaption>
              </figure>
              <div class="form-group ps-2">
                <label for="imgurl">暫存後確認上傳:</label>
                <input
                  type="url"
                  class="form-control"
                  id="imgurl"
                  v-model.trim="imgurl"
                  placeholder="請輸入圖片連結"
                />
                <a  class="btn btn-primary mt-2" @click="sentImg"
                  >暫存</a
                >
              </div>
            </div>
            <div class="col-6">
              <div class="card-body ps-0">
                <div class="form-group">
                  <label for="producsttitle">產品標題:</label>
                  <input
                    type="text"
                    class="form-control my-2"
                    v-model.trim='product.title'
                    id="producsttitle"
                    autofocus
                  />
                  <label for="producstImg">圖片網址:</label>
                  <input
                    type="url"
                    class="form-control my-2"
                    v-model.trim="product.imageUrl"
                    id="producstImg"
                  />
                </div>
                <div class="row">
                  <div class="form-group col-md-3">
                    <label for="category">類別:</label>
                    <input
                      type="text"
                      class="form-control my-2"
                      v-model.trim="product.category"
                      id="category"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="unit">單位:</label>
                    <input
                      type="text"
                      maxlength="3"
                      class="form-control my-2"
                      v-model.trim="product.unit"
                      id="unit"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="origin_price">原價:</label>
                    <input
                      type="number"
                      min="0"
                      class="form-control my-2"
                      v-model.number="product.origin_price"
                      id="origin_price"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="price">售價:</label>
                    <input
                      type="number"
                      min="0"
                      class="form-control my-2"
                      v-model.number="product.price"
                      id="price"
                    />
                  </div>
                  <div class="col-12 my-2">
                    <label>商品評價:</label>
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="onestar"
                        v-model.number="product.star"
                        value="1"
                      />
                      <label class="form-check-label" for="onestar">1星</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="twostar"
                        v-model.number="product.star"
                        value="2"
                      />
                      <label class="form-check-label" for="twostar">2星</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="threestar"
                        v-model.number="product.star"
                        value="3"
                      />
                      <label class="form-check-label" for="threestar"
                        >3星</label
                      >
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="fourstar"
                        v-model.number="product.star"
                        value="4"
                      />
                      <label class="form-check-label" for="fourstar">4星</label>
                    </div>
                  </div>
                  <div class="col-md-3 mb-2">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="fivestar"
                        v-model.number="product.star"
                        value="5"
                      />
                      <label class="form-check-label" for="fivestar">5星</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="producstcontent">產品描述:</label>
                  <textarea
                    class="form-control my-2"
                    v-model.trim="product.content"
                    placeholder="限定20個字"
                    style="height: 60px"
                  ></textarea>
                  <label for="producstdescription">說明內容:</label>
                  <textarea
                    class="form-control my-2"
                    v-model.trim="product.description"
                    placeholder="限定20個字"
                    style="height: 60px"
                  ></textarea>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="product.is_enabled"
                      :value="product.is_enabled"
                      id="flexCheckIndeterminate"
                    />
                    <label
                      class="form-check-label"
                      for="flexCheckIndeterminate"
                    >
                      {{ product.is_enabled ? "啟用" : "未啟用" }}
                    </label>
                  </div>
                  <div class="btn-group">
                    <a class="btn btn-secondary me-2" @click="closeModal()"
                      >取消</a
                    >
                    <a class="btn btn-primary" @click="upData()">確認上傳</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      imgurl: '',
      modal: '',
      product: '',
      presetImg: 'https://fakeimg.pl/350x200/?text=Preview'
    }
  },
  methods: {
    openModal (item) {
      this.product = { ...item }
      this.modal.show()
    },
    closeModal () {
      // 關閉編輯介面
      this.modal.hide()
      this.imgurl = ''
    },
    isValidURL (url) {
      // 判斷網址對不對
      const RegExp =
        /(ftp|http|https):(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(|([\w#!:.?+=&%@!]))?/
      if (RegExp.test(url)) {
        return true
      } else {
        return false
      }
    },
    addSentImg () {
      // 新增多項圖片
      if (this.imgurl !== '' && this.isValidURL(this.imgurl)) {
        // 欄位不是空值輸入
        this.product.imagesUrl.push(this.imgurl)
        this.imgurl = ''
      } else {
        alert('網址不對')
      }
    },
    sentImg () {
      if (Object.prototype.hasOwnProperty.call(this.product, 'imagesUrl') === false) {
        this.product.imagesUrl = []
      }
      if (this.imgurl !== '' && this.isValidURL(this.imgurl)) {
        // 如果不是空值且格式正確才輸入
        this.product.imagesUrl.push(this.imgurl)
        this.imgurl = ''
      } else {
        alert('網址不對')
      }
    },
    upData () {
      // 編輯後更新後台資料
      this.product.is_enabled = Number(this.product.is_enabled)
      // 改回後台要得數字
      if (this.product.id === undefined) {
        // 如果是新增的狀態
        const arry = Object.keys(this.product).map((key) => {
          return this.product[key] // 把物件值取出轉成陣列
        })
        if (!arry.includes('')) {
          // 判斷陣列內有沒有空值
          this.$http
            .post(
              `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`,
              { data: this.product }
            )
            .then((res) => {
              if (res.data.success) {
                this.$emit('dataup') // 上傳後更新

                console.log(res.data.success)
              } else {
                console.log(res.data.success)
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('有欄位沒填')
        }
      } else {
        this.putData() // 編輯的話有id因此走這邊
      }
      this.closeModal() // 關掉編輯介面，取消按鈕也會用到
    },
    putData () {
      // 更新後台資料
      this.$http
        .put(
          `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`,
          {
            data: this.product
          }
        )
        .then((res) => {
          if (res.data.success) {
            alert('更新成功')
            console.log(res)
            this.$emit('dataup') // 上傳失敗重新載入，避免上面程式碼更改值後，出現螢幕與後台資料不一樣
          } else {
            alert('更新失敗')
          }
        })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false
    })
  }
}
</script>
