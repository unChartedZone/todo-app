module.exports = {
  devServer: {
    port: 8082,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};
