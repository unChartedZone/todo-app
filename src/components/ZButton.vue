<template>
  <button @click="$emit('click')" class="btn" :class="{ btn__icon: icon }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
    },
  },
  mounted() {
    console.log('Icon: ', this.icon);
  },
};
</script>

<style lang="scss">
.btn {
  border: none;
  border-radius: 7px;
  background-color: $color-1;
  color: $color-white;
  font-size: 2rem;
  // margin-top: 1rem;
  padding: 0.5rem 0.8rem;

  &__icon {
    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100%;
    height: 3rem;
    width: 3rem;
    padding: 0;
    cursor: pointer;

    img {
      height: 55%;
    }
  }
}
</style>
