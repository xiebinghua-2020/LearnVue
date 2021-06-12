<template>
  <div class="home">
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import navHeader from "../components/navHeader.vue";
import navFooter from "../components/navFooter.vue";
export default {
  name: 'Home',
  components: {
    navHeader,
    navFooter
  }
}
</script>
