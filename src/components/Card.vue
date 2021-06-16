<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-6">
      <img :src="product.imageUrl" class="img-thumbnail" alt="產品圖">
      <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">成分:{{product.content}}</h6>
      <p class="card-text">
        {{product.description}}
      </p>
      <p>原價:{{product.origin_price}}</p>
      <p>售價:{{product.price}}</p>
    </div>
  </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['product']
}
</script>
