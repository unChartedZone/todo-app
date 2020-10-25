<template>
  <div class="my-2">
    <form @submit.prevent="addTodo">
      <!-- <div class="textfield">
        <input v-model="todo.title" placeholder="New Todo" type="text" />
        <button @click="addTodo">+</button>
      </div> -->
      <z-textfield v-model="todo.title" placeholder="New Todo" />
      <z-button>+</z-button>
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
