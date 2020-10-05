<template>
  <nav class="nav">
    <div class="nav__main container flex justify-between items-center">
      <div class="nav__links space-x-6">
        <router-link class="nav__link" to="/">Todos</router-link>
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
  background-color: #2d3748;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  padding: 2rem;

  &__main {
    margin: 0 auto;
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
      margin: 0 1.5rem 0 0;
    }

    &.router-link-exact-active {
      color: #a3bffa;
    }
  }
}
</style>
