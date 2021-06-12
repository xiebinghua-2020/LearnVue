<template>
  <div class="order">
    order
    <order-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import orderHeader from "../components/orderHeader.vue";
import navFooter from "../components/navFooter.vue";
export default {
  name: "order",
  components: {
    orderHeader,
    navFooter,
  },
};
</script>
