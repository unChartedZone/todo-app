<template>
  <div class="container mx-auto">
    <h1 class="h1">Todos</h1>
    <div class="text-field">
      <form v-on:submit.prevent class="flex items-center h-full">
        <input v-model="inputText" class="text-field__input" type="text" placeholder="New Todo" />
        <button @click="addTodo" class="text-field__action">+</button>
      </form>
    </div>
    <div class="todos flex flex-col">
      <div class="todos__item" v-for="(todo, index) in todos" :key="index">
        <p class="text-2xl">
          {{ todo.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      todos: [{ text: 'First Todo' }, { text: 'Second Todo' }, { text: 'Third Todo' }],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.inputText,
      });
      this.inputText = '';
    },
  },
};
</script>

<style lang="scss">
.text-field {
  border: 1px solid #e4d1d1;
  border-radius: 7px;
  display: inline-block;
  font-size: 1.5rem;

  &__input {
    padding: 0 0.5rem;
    border: none;
    outline: none;
  }

  &__action {
    height: 100%;
    font-size: 4rem;
    padding: 0 1rem;
  }
}

.todos {
  margin: 5rem 0;

  &__item {
    border: 1px solid #333;
    display: inline-block;
    padding: 1rem;
  }
}
</style>
