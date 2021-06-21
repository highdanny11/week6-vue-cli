<template>
  <div class="container">
    <div class="row ">
      <div class="col-6">
       <a  href="#" class="card text-decoration-none" style="width:250px;">
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
  props: ['product']
}
</script>
