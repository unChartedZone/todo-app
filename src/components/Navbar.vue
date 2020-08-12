<template>
  <nav class="nav">
    <div class="nav__main container space-x-6">
      <router-link class="nav__link" to="/">Todos</router-link>
      <router-link class="nav__link" to="/dev">Dev</router-link>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  @apply shadow-lg;

  padding: 2rem;

  &__main {
    @apply mx-auto;
  }

  &__link {
    font-size: 1.6rem;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
