<template>
  <nav class="nav">
    <div class="nav__main container flex justify-between items-center">
      <router-link class="nav__link" to="/" exact>Todos</router-link>
      <div class="nav__links">
        <router-link class="nav__link mr-4" to="/signup">Signup</router-link>
        <router-link class="nav__link" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    const handleEsacpe = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false;
      }
    };

    document.addEventListener('keydown', handleEsacpe);

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEsacpe);
    });
  },
};
</script>

<style lang="scss">
.nav {
  background-color: $color-1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  padding: 2rem 4rem;

  &__main {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__brand {
    font-size: 1.85rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  &__link {
    &,
    &:link,
    &:active,
    &:visited {
      font-size: 1.85rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }

    &.router-link-exact-active {
      color: #a3bffa;
    }
  }
}
</style>
