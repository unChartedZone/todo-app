<template>
  <div>
    <input :type="type" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: '',
      type: String,
    },
  },
};
</script>
