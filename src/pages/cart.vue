<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
export default {
  name:'cart-header',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>