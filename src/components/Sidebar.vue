<template>
  <div class="sidebar">
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
        <z-button @click="showNewListForm = true">
          New List +
        </z-button>
        <div class="dropdown__content">
          <div v-if="showNewListForm" class="dropdown__form">
            <h1>List Title</h1>
            <form @submit.prevent="createCollectionForm()">
              <div class="mt-2" style="display: flex;">
                <z-textfield v-model="newCollectionTitle" class="mr-2" />
                <z-button icon>
                  <img src="@/assets/svg/plus.svg" alt="plus-icon" />
                </z-button>
              </div>
            </form>
          </div>
        </div>
        <div
          @click="showNewListForm = false"
          v-if="showNewListForm"
          class="dropdown__bg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      showNewListForm: false,
      newCollectionTitle: '',
    };
  },
  computed: {
    ...mapState(['collections']),
  },
  methods: {
    ...mapActions(['createCollection']),
    createCollectionForm() {
      if (this.newCollectionTitle === '') return;

      this.createCollection(this.newCollectionTitle);
      this.showNewListForm = false;
      this.newCollectionTitle = '';
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  // position: relative;
  background-color: $color-2;
  width: 25rem;
  height: 100vh;
  margin-right: 10rem;
  position: fixed;

  &__list {
    box-shadow: 10px 0 15px -3px rgba(0, 0, 0, 0.1);
    height: 100vh;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    z-index: 1;

    & > * {
      margin-bottom: 1rem;
    }
  }

  &__link {
    &,
    &:active,
    &:link,
    &:visited {
      color: $color-white;
      font-size: 2rem;
      text-decoration: none;
    }

    &:hover {
      color: $color-3;
    }
  }
}

.dropdown {
  &__content {
    position: relative;
  }

  &__form {
    border-radius: 7px;
    border: 1px solid #eee;
    background-color: white;
    box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
    min-width: 10rem;
    padding: 1rem 1.5rem;
    position: absolute;
    top: 110%;

    z-index: 30;
  }

  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: transparent;
    z-index: 10;
  }
}
</style>
