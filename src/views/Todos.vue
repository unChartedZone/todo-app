<template>
  <div class="todos__app">
    <div class="todos__sidebar">
      <div class="sidebar__list">
        <router-link
          v-for="(collection, index) in collections"
          :key="index"
          class="sidebar__link"
          :to="{ name: 'todos', params: { id: `${index}` } }"
          exact
        >
          {{ collection.title }}
        </router-link>
        <div class="dropdown">
          <button class="btn" @click="showNewListForm = true">
            New List +
          </button>
          <div
            v-if="showNewListForm"
            @click="showNewListForm = false"
            class="dropdown__bg"
          />
          <div v-if="showNewListForm" class="dropdown__content">
            <h1>List Title</h1>
            <form @submit.prevent>
              <div class="mt-2" style="display: flex;">
                <input
                  v-model="newCollectionTitle"
                  class="textfield mr-2"
                  type="text"
                />
                <button @click="createCollection" class="btn__icon">
                  <img src="@/assets/svg/plus.svg" alt="plus-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="todos__container">
      <h1 class="h1">
        {{ collectionId ? collections[$route.params.id].title : '' }}
        <!-- {{ collections[collectionId].title }} -->
      </h1>
      <!-- <h1 class="h1">{{ $route.params.id }}</h1>
      <h1 class="h1">Collection ID: {{ collectionId }}</h1> -->
      <div class="my-2">
        <form @submit.prevent>
          <div class="textfield">
            <input v-model="todo.title" placeholder="New Todo" type="text" />
            <button @click="addTodo">+</button>
          </div>
        </form>
      </div>
      <div class="todos__list" v-if="getTodoItems.length != 0">
        <div
          v-for="(item, index) in getTodoItems"
          :key="index"
          class="todos__item"
        >
          <div class="todos__content">
            <z-checkbox class="mr-2" />
            {{ item.title }}
          </div>
          <div @click="removeTodo(index)" class="btn__icon">
            <img src="@/assets/svg/temp.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNewListForm: false,
      newCollectionTitle: '',
      todo: {
        title: '',
        description: '',
      },
      collectionId: '',
      collections: [
        {
          title: 'Todo List',
          items: [
            {
              title: 'Take out the trash',
              description: 'this needs to be done!',
            },
            {
              title: 'Vaccum the floors',
              description: 'Theyre very dusty!',
            },
          ],
        },
        {
          title: 'Shopping List',
          items: [{ title: 'PS4', description: '' }],
        },
      ],
      title: 'New List',
    };
  },
  computed: {
    getTodoItems() {
      return this.collectionId
        ? this.collections[this.$route.params.id].items
        : [];
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // react to route changes...
      this.collectionId = to.params.id;
      this.todo.title = '';
      this.todo.description = '';
    },
  },
  mounted() {
    this.collectionId = this.$route.params.id;

    if (this.collectionId >= this.collections.length) {
      this.$router.push({ name: 'todos', params: { id: '0' } });
    }
  },
  methods: {
    addTodo() {
      if (this.todo.title === '') return;

      this.collections[this.collectionId].items.push({
        title: this.todo.title,
        description: '',
      });

      this.todo.title = '';
    },
    removeTodo(index) {
      this.collections[this.collectionId].items.splice(index, 1);
    },
    createCollection() {
      this.collections.push({
        title: this.newCollectionTitle,
        items: [],
      });

      this.$router.push({
        name: 'todos',
        params: { id: this.collections.length - 1 },
      });

      this.showNewListForm = false;
      this.newCollectionTitle = '';
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
    box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.1);
    width: 60%;
  }

  &__item {
    border: 1px solid #eee;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    padding: 2rem;
  }

  &__content {
    display: flex;
  }
}

.sidebar {
  &__list {
    box-shadow: 10px 0 15px -3px rgba(0, 0, 0, 0.1);
    height: 100vh;
    padding: 2rem 4rem;
    position: fixed;
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 1rem;
    }
  }

  &__link {
    &,
    &:active,
    &:link,
    &:visited {
      color: $color-black;
      font-size: 2rem;
      text-decoration: none;
    }

    &:hover {
      color: $color-1;
    }
  }
}

.dropdown {
  position: relative;

  &__content {
    border: 1px solid #eeeeee;
    border-radius: 7px;
    box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 1rem;
    top: 110%;
    min-width: 10rem;
    position: absolute;
    z-index: 15;
  }

  &__bg {
    background: transparent;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
}

.btn {
  border: none;
  border-radius: 7px;
  background-color: $color-1;
  color: $color-white;
  font-size: 2rem;
  margin-top: 1rem;
  padding: 0.2rem 0.8rem;

  &__icon {
    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100%;
    height: 3rem;
    width: 3rem;
    cursor: pointer;

    img {
      height: 55%;
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
