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
};
</script>

<style lang="scss">
.btn {
  border: none;
  border-radius: 7px;
  box-shadow: 0px 6px 15px 3px rgba(0, 0, 0, 0.1);
  background-color: $color-4;
  color: $color-white;
  font-size: 2rem;
  padding: 0.5rem 0.8rem;

  &__icon {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
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
