<template>
  <div class="sidebar">
    <h1 class="h1">Sidebar</h1>
    <ul>
      <li v-for="list in lists" :key="list.name" class="text-2xl">
        {{ list.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    this.loadSampleLists();
  },
  methods: {
    loadSampleLists() {
      for (let i = 0; i < 5; i += 1) {
        this.lists.push({
          name: `List ${i} `,
          todoListRefId: '',
        });
      }
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  display: inline-block;
}
</style>
