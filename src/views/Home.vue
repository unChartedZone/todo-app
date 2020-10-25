<template>
  <section>
    <Navbar />
    <div class="home__page">
      <h1 class="home__banner">Todos</h1>
      <p class="home__subtitle">Keep track of your day-to-day</p>
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
    flex-direction: column;
    height: 100vh;
  }

  &__banner {
    font-size: 9rem;
  }

  &__subtitle {
    font-size: 2rem;
  }
}
</style>
