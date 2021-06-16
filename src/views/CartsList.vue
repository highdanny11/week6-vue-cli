<template>
  <h1 class="text-center">你現在在{{ text }}</h1>
 <Carts></Carts>
</template>
<script>
import Carts from '@/components/Carts.vue'
export default {
  components: {
    Carts
  },
  data () {
    return {
      text: '購物車列表'
    }
  }
}
</script>
