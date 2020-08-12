<template>
  <nav class="nav">
    <div class="nav__main container flex justify-between items-center">
      <div class="nav__links space-x-6">
        <router-link class="nav__link" to="/">Todos</router-link>
        <router-link class="nav__link" to="/dev">Dev</router-link>
      </div>
      <div class="dropdown">
        <button @click="isOpen = !isOpen" class="dropdown__btn">
          <img
            class="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3727&q=80"
            alt="Your avatar"
          />
        </button>
        <button
          v-if="isOpen"
          @click="isOpen = false"
          tabindex="-1"
          class="fixed inset-0 h-full w-full bg-black opacity-50"
        ></button>
        <div v-if="isOpen" class="dropdown__list">
          <a class="dropdown__item" href="#">Account Settings</a>
          <a class="dropdown__item" href="#">Support</a>
          <a class="dropdown__item" href="#">Sign Out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    const handleEsacpe = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false;
      }
    };

    document.addEventListener('keydown', handleEsacpe);

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEsacpe);
    });
  },
};
</script>

<style lang="scss">
.nav {
  @apply bg-gray-800;
  @apply shadow-lg;

  padding: 2rem;

  &__main {
    @apply mx-auto;
  }

  &__link {
    font-size: 1.85rem;
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      @apply text-indigo-300;
    }
  }
}

.dropdown {
  @apply relative;

  &__btn {
    @apply relative;
    @apply z-10;
    @apply block;
    @apply h-12;
    @apply w-12;
    @apply rounded-full;
    @apply overflow-hidden;
    @apply border-2;
    @apply border-gray-600;

    &:focus {
      @apply outline-none;
      @apply border-black;
    }
  }

  &__list {
    @apply absolute;
    @apply rounded-lg;
    @apply shadow-xl;
    @apply bg-white;
    @apply py-2;
    @apply mt-2;

    width: 19.2rem;
  }

  &__item {
    @apply text-2xl;
    @apply text-gray-800;
    @apply block;
    @apply px-4;
    @apply py-2;

    &:hover {
      @apply bg-indigo-500;
      @apply text-white;
    }
  }
}
</style>
