<template>
  <div class="todos__app">
    <div class="account__container">
      <div class="account__button">
        <button
          @click="showAccountDropdown = !showAccountDropdown"
          class="btn__icon"
        >
          <img src="@/assets/svg/account.svg" alt="Account Icon" />
        </button>
      </div>
      <div style="position: relative;">
        <div v-if="showAccountDropdown" class="account__dropdown">
          <button @click="logout" class="btn">Logout</button>
        </div>
      </div>
    </div>
    <Sidebar :collections="collections" />
    <div class="todos__container">
      <h1 class="h1">
        {{ areCollectionsLoaded ? collections[$route.params.id].title : '' }}
      </h1>
      <TodoForm :todo="todo" :collection="collections[collectionId]" />
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
import { auth, firestore } from '../firebase';

import Sidebar from '../components/Sidebar.vue';
import TodoForm from '../components/Todos/TodoForm.vue';

export default {
  components: {
    Sidebar,
    TodoForm,
  },
  data() {
    return {
      showAccountDropdown: false,
      todo: {
        title: '',
        description: '',
      },
      collectionId: '',
      collections: [],
      title: 'New List',
    };
  },
  computed: {
    getTodoItems() {
      return this.areCollectionsLoaded
        ? this.collections[this.$route.params.id].items
        : [];
    },
    areCollectionsLoaded() {
      return this.collectionId && this.collections.length > 0;
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
  async mounted() {
    await this.loadCollections();
    this.collectionId = this.$route.params.id;

    if (this.collectionId >= this.collections.length) {
      this.$router.push({ name: 'todos', params: { id: '0' } });
    }
  },
  methods: {
    async loadCollections() {
      const user = auth.currentUser;
      const todosDoc = firestore.collection('todos').doc(user.uid);
      const collections = await todosDoc.collection('lists').get();

      collections.forEach((collection) => {
        this.collections.push({
          ...collection.data(),
        });
      });
    },
    removeTodo(index) {
      this.collections[this.collectionId].items.splice(index, 1);
    },
    async logout() {
      await auth.signOut();
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss">
.account {
  &__container {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  &__dropdown {
    position: fixed;
    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 7px;
    padding: 1rem;
    margin-top: 1rem;
    right: 2rem;
  }
}
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
  padding: 0.5rem 0.8rem;

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
</style>
