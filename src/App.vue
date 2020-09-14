<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.h1 {
  font-size: 5.2rem;
}

.h2 {
  font-size: 3rem;
}

.m {
  &y {
    &-1{
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    &-2{
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
