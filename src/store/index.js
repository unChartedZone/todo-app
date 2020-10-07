/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import { auth, firestore } from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collectionId: '',
    collections: [],
  },
  mutations: {
    setCollections(state, collections) {
      collections.forEach((collection) => {
        state.collections.push({
          id: collection.id,
          ...collection.data(),
        });
      });
    },
    setCollectionId(state, id) {
      state.collectionId = id;
    },
    addTodoItem(state, todoItem) {
      state.collections[state.collectionId].items.push(todoItem);
    },
    addCollection(state, payload) {
      state.collections.push({ ...payload });
    },
    wipeState(state) {
      state.collections = [];
      state.collectionId = '';
    },
  },
  actions: {
    async loadCollections({ state, commit }) {
      if (state.collections.length !== 0) {
        return;
      }
      const user = auth.currentUser;
      const todosDoc = firestore.collection('todos').doc(user.uid);
      const collections = await todosDoc.collection('lists').get();
      commit('setCollections', collections);
    },
    async createCollection({ commit, state }, newCollectionTitle) {
      const collection = { title: newCollectionTitle, items: [] };

      const newCollectionDoc = firestore
        .collection('todos')
        .doc(auth.currentUser.uid)
        .collection('lists')
        .doc();

      commit('addCollection', { id: newCollectionDoc.id, ...collection });
      await newCollectionDoc.set({ ...collection });

      router.push({
        name: 'todos',
        params: { id: state.collections.length - 1 },
      });
    },
    async updateCollection({ commit, state }) {
      let { collectionId } = state;
      let { title, items } = state.collections[collectionId];

      const collectionDoc = firestore
        .collection('todos')
        .doc(auth.currentUser.uid)
        .collection('lists')
        .doc(state.collections[state.collectionId].id);

      await collectionDoc.update({
        title,
        items,
      });
    },
  },
  modules: {},
});
