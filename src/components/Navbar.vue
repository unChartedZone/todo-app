<template>
  <div class="nav">
    <router-link class="nav__link" to="/">Home</router-link> |
    <router-link class="nav__link" to="/todos">Todos</router-link>
  </div>
</template>

<style lang="scss">
.nav {
  padding: 30px;

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
