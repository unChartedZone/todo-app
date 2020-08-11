<template>
  <div class="container mx-auto">
    <h1 class="h1">Todos</h1>
    <div class="text-field">
      <form v-on:submit.prevent class="flex justify-between items-center h-full">
        <input v-model="inputText" class="text-field__input" type="text" placeholder="New Todo" />
        <button @click="addTodo" class="text-field__action">+</button>
      </form>
    </div>
    <div class="todos">
      <div class="todos__item shadow-md" v-for="(todo, index) in todos" :key="index">
        <p class="text-2xl inline-block">
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
      todos: [{ text: 'Buy milk' }, { text: 'Get food for boots' }, { text: 'Take out the trash' }],
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
  font-size: 1.5rem;

  &__input {
    flex-grow: 1;
    padding: 0.5rem 1rem;
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
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  &__item {
    background-color: #fefefe;
    border-radius: 7px;
    display: inline-block;
    padding: 1rem 1rem;
    margin: 0 0 2rem;
  }
}
</style>
