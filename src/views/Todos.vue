<template>
  <div class="todos__app">
    <Sidebar />
    <div class="todos__container">
      <div>
        <div style="position: fixed; top: 2rem; right: 1.5rem; z-index: 20;">
          <z-button @click="showAccountDropdown = !showAccountDropdown" icon>
            <img src="@/assets/svg/account.svg" alt="Account Icon" />
          </z-button>
          <div class="dropdown__content">
            <z-button @click="logout">Logout</z-button>
          </div>
        </div>
        <div
          @click="showAccountDropdown = false"
          v-if="showAccountDropdown"
          class="dropdown__bg"
        />
      </div>
      <!-- <div>
        <div class="account__container">
          <div class="account__button">
            <z-button @click="showAccountDropdown = !showAccountDropdown" icon>
              <img src="@/assets/svg/account.svg" alt="Account Icon" />
            </z-button>
          </div>
          <div style="position: relative;">
            <div v-if="showAccountDropdown" class="account__dropdown">
              <z-button @click="logout">Logout</z-button>
            </div>
          </div>
        </div>
        <div
          v-if="showAccountDropdown"
          @click="showAccountDropdown = false"
          class="account__bg"
        />
      </div> -->
      <h1 class="h1">
        {{ areCollectionsLoaded ? collections[$route.params.id].title : '' }}
      </h1>
      <TodoForm />
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
          <div @click="removeTodo(index)" class="todos__remove btn__icon">
            <img src="@/assets/svg/temp.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions, mapMutations } from 'vuex';
import { auth } from '../firebase';

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
      title: 'New List',
    };
  },
  computed: {
    ...mapState(['collectionId', 'collections']),
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
      // this.collectionId = to.params.id;
      this.setCollectionId(to.params.id);
      this.todo.title = '';
      this.todo.description = '';
    },
  },
  async mounted() {
    await this.loadCollections();
    // this.collectionId = this.$route.params.id;
    this.setCollectionId(this.$route.params.id);

    if (this.collectionId >= this.collections.length) {
      this.$router.push({ name: 'todos', params: { id: '0' } });
    }
  },
  methods: {
    ...mapMutations(['setCollectionId']),
    ...mapActions(['loadCollections']),
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

    &:hover .todos__remove {
      opacity: 1;
    }
  }

  &__remove {
    opacity: 0;
  }

  &__content {
    display: flex;
  }
}
</style>
