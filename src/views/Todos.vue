<template>
  <div>
    <Sidebar />
    <div class="container mt-4">
      <h1 class="h1">Todos</h1>
      <div class="text-field">
        <form
          v-on:submit.prevent
          class="flex justify-between items-center h-full"
        >
          <input
            v-model="inputText"
            class="text-field__input"
            type="text"
            placeholder="New Todo"
          />
          <button @click="addTodo" class="text-field__action">+</button>
        </form>
      </div>
      <div class="todos__list">
        <div
          class="todos__item shadow-md"
          v-for="(todo, index) in todos"
          :key="index"
        >
          <p class="text-3xl inline-block">
            {{ todo.text }}
          </p>
          <p class="text-xl text-gray-500">{{ todo.created }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      inputText: '',
      todos: [
        {
          text: 'Buy milk',
          description: '',
          created: new Date().toDateString(),
        },
        {
          text: 'Get food for boots',
          description: '',
          created: new Date().toDateString(),
        },
        {
          text: 'Take out the trash',
          description: '',
          created: new Date().toDateString(),
        },
      ],
    };
  },
  mounted() {
    console.log(new Date().toDateString());
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.inputText,
        created: new Date().toDateString(),
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
  &__list {
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
  }

  &__item {
    background-color: #fefefe;
    border-radius: 7px;
    display: inline-block;
    padding: 1rem 1rem;
    margin: 0 0 2rem;
  }
}
</style>
