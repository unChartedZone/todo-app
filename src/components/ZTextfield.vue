<template>
  <div class="textfield">
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <label class="textfield__label">{{ label }}</label>
      <div class="textfield__input">
        <input
          :value="value"
          @input="updateValue($event.target.value)"
          :type="type"
          :placeholder="placeholder"
        />
      </div>
      <p class="textfield__errors">{{ errors[0] }}</p>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {
      currentValue: '',
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
.textfield {
  &__label {
    font-size: 1.6rem;
  }

  &__input {
    border: 1px solid #ccc;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    width: 20rem;

    // Highlight inner textfield
    &:focus-within {
      border-color: $color-1;
    }

    input {
      border: none;
      outline: none;
      width: 100%;
    }

    button {
      background: transparent;
      border: none;
      font-size: 3rem;
      line-height: 0.3;
    }
  }

  &__errors {
    font-size: 1.4rem;
    color: $color-1;
  }
}
</style>
