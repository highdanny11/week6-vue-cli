<template>
  <div class="container">
    <div class="row">
      <div class="col-6 py-3">
        <div class="card">
          <div class="card-header">新增產品</div>
          <div class="card-body">
            <div class="form-group">
              <label for="producsttitle">產品標題:</label>
              <input
                type="text"
                class="form-control my-2 js-title"
                id="producsttitle"
                autofocus
              />
              <label for="producstImg">圖片網址:</label>
              <input
                type="url"
                class="form-control my-2 js-producstImg"
                id="producstImg"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="category">類別:</label>
                <input
                  type="text"
                  class="form-control my-2 js-category"
                  id="category"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="unit">單位:</label>
                <input
                  type="text"
                  maxlength="3"
                  class="form-control my-2 js-unit"
                  id="unit"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價:</label>
                <input
                  type="number"
                  class="form-control my-2 js-origin_price"
                  id="origin_price"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價:</label>
                <input
                  type="number"
                  class="form-control my-2 js-price"
                  id="price"
                />
              </div>
            </div>
            <div class="d-flex flex-row-reverse">
              <a href="#" class="btn btn-primary js-bulid" id="bulid">建立</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 text-center py-3">
        <figure class="figure js-show"></figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
    const id = this.$route.params.id
    console.log(id)
  }
}
</script>
