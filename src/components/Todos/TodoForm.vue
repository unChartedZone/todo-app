<template>
  <div class="my-2">
    <form @submit.prevent>
      <div class="textfield">
        <input v-model="todo.title" placeholder="New Todo" type="text" />
        <button @click="addTodo">+</button>
      </div>
    </form>
    <button @click="updateCollection" class="btn">Save</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      todo: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    ...mapMutations(['addTodoItem']),
    ...mapActions(['updateCollection']),
    addTodo() {
      if (this.todo.title === '') return;
      this.addTodoItem({ ...this.todo });
      this.todo.title = '';
    },
  },
};
</script>

<style lang="scss">
.textfield {
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
  }

  button {
    background: transparent;
    border: none;
    font-size: 3rem;
    line-height: 0.3;
  }
}
</style>
