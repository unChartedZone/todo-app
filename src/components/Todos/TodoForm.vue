<template>
  <div class="my-2">
    <form class="todo-form" @submit.prevent="addTodo">
      <z-textfield v-model="todo.title" placeholder="New Todo" />
      <z-button class="ml-2">+</z-button>
    </form>
    <z-button @click="updateCollection" class="mt-2">
      Save
    </z-button>
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
.todo-form {
  display: flex;
}
</style>
