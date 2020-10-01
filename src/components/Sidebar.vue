<template>
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
          <form @submit.prevent="createCollectionForm()">
            <div class="mt-2" style="display: flex;">
              <input
                v-model="newCollectionTitle"
                class="textfield mr-2"
                type="text"
              />
              <button class="btn__icon">
                <img src="@/assets/svg/plus.svg" alt="plus-icon" />
              </button>
            </div>
          </form>
        </div>
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
      this.createCollection(this.newCollectionTitle);
      this.showNewListForm = false;
      this.newCollectionTitle = '';
    },
  },
};
</script>
