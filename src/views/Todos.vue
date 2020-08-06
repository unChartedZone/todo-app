<template>
  <div>
    <h1>Todos</h1>
    <div class="text-field">
      <input v-model="inputText" class="text-field__input" type="text" placeholder="New Todo" />
      <button @click="addTodo" class="text-field__action">+</button>
    </div>
    <div class="todos">
      <p v-for="(todo, index) in todos" :key="index">{{ todo.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      todos: [{ text: '' }],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.inputText,
      });
    },
  },
};
</script>

<style lang="scss">
.text-field {
  &__input {
  }

  &__action {
  }
}
</style>
