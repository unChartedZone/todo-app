<template>
  <div class="todos__app">
    <div class="todos__sidebar">
      <div class="sidebar__container">
        <router-link
          v-for="(collection, id) in collections"
          :key="id"
          class="sidebar__link"
          :to="`/${id}`"
        >
          {{ collection.title }}
        </router-link>
        <router-link class="sidebar__link" :to="{ name: 'new-todos' }">
          New List +
        </router-link>
      </div>
    </div>
    <div class="todos__container">
      <h1 class="h1">
        {{ currentCollectionId ? collections[currentCollectionId].title : '' }}
      </h1>
      <h1 class="h1" v-if="!currentCollectionId">{{ title }}</h1>
      <div class="my-2">
        <div class="textfield">
          <input v-model="todo.title" placeholder="New Todo" type="text" />
          <button @click="addTodo">+</button>
        </div>
      </div>
      <div class="todos__list">
        <div
          v-for="(item, index) in getTodoItems"
          :key="index"
          class="todos__item"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: '',
        description: '',
      },
      currentCollectionId: '',
      collections: {
        wropncwce: {
          title: 'Todo List',
          items: [
            {
              title: 'Take ou the trash',
              description: 'this needs to be done!',
            },
          ],
        },
        ofwofhew: {
          title: 'Shopping List',
          items: [{ title: 'PS4', description: '' }],
        },
      },
      title: 'New Title',
    };
  },
  computed: {
    getTodoItems() {
      return this.currentCollectionId ? this.collections[this.$route.params.id].items : [];
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // react to route changes...
      this.currentCollectionId = to.params.id;
      this.todo.title = '';
      this.todo.description = '';
    },
  },
  mounted() {
    this.currentCollectionId = this.$route.params.id;
  },
  methods: {
    addTodo() {
      this.collections[this.currentCollectionId].items.push({ title: 'Take out the trash', description: '' });
    },
  },
};
</script>

<style lang="scss">
.todos {
  &__app {
    width: 100%;
    display: grid;
    // grid-template-columns: 20% 80%;
    grid-template-columns: auto 1fr;
  }

  &__sidebar {
    position: relative;
    width: 36rem;
    height: 100vh;
  }

  &__container {
    padding: 2rem 0;
  }

  &__list {
    margin: 4rem 0;
  }

  &__item {
    border: 1px solid #eee;
    border-radius: 7px;
    box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.1);
    font-size: 2rem;
    padding: 2rem;
    width: 60%;
  }
}

.sidebar {
  &__container {
    box-shadow: 10px 0px 2rem 2rem rgba(0, 0, 0, 0.1);
    height: 100vh;
    padding: 2rem 4rem;
    position: fixed;
    display: flex;
    flex-direction: column;
  }

  &__link {
    &,
    &:active,
    &:link,
    &:visited {
      font-size: 2rem;
      text-decoration: none;
    }
  }
}

.textfield {
  border: 1px solid #ccc;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 20rem;

  // Highlight inner textfield
  &:focus-within {
    border-color: blue;
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
