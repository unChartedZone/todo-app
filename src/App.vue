<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { auth } from './firebase';

export default {
  // mounted() {
  //   console.log(auth.currentUser);
  // },
};
</script>

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
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-1;
}

.h1 {
  font-size: 5.2rem;
}

.h2 {
  font-size: 3rem;
}
</style>
