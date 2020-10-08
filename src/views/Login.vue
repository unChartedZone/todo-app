<template>
  <section class="login__page">
    <Navbar />
    <div class="login__container mx-auto">
      <h1 class="h1 mb-4">Login</h1>
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent>
          <!-- <ValidationProvider
            name="potato"
            rules="required|email"
            v-slot="{ errors }"
          >
            <label class="text-base">Email</label>
            <input v-model="email" class="textfield mb-4" type="text" />
            <span>{{ errors[0] }}</span>
          </ValidationProvider> -->
          <z-textfield
            v-model="email"
            name="Email"
            label="Email"
            type="email"
            rules="required|email"
          />
          <z-textfield
            v-model="password"
            name="Password"
            label="Password"
            type="password"
            rules="required"
            class="mt-4"
          />
          <!-- <label class="text-base">Password</label>
          <input v-model="password" class="textfield mb-4" type="password" /> -->
          <button
            @click="loginUser"
            class="btn mt-4"
            type="submit"
            :disabled="invalid"
          >
            Login
          </button>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { auth } from '../firebase';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await auth.signInWithEmailAndPassword(
          this.email,
          this.password,
        );
        console.log('Successfully Logged In!', response);
        this.$router.push({ name: 'todos', params: { id: '0' } });
      } catch (e) {
        console.log('Error Logging In: ', e);
      }
    },
  },
};
</script>

<style lang="scss">
.login {
  &__page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__container {
    width: 20rem;
  }
}
</style>
