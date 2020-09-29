<template>
  <section>
    <Navbar />
    <div class="home__page">
      <h1 class="h1">Todos</h1>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.home {
  &__page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
}
</style>
