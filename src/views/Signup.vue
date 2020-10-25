<template>
  <section class="signup__page">
    <Navbar />
    <div class="signup__main container mx-auto">
      <div class="signup__content">
        <h1 class="h1">Sign Up</h1>
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="signupUser" class="signup__form mt-4">
            <z-textfield
              v-model="email"
              rules="email|required"
              name="email"
              label="Email"
              type="email"
              class="mb-4"
            />
            <z-textfield
              v-model="password"
              name="password"
              rules="required|password:@confirm"
              label="Password"
              type="password"
              class="mb-4"
            />
            <z-textfield
              v-model="confirmPassword"
              name="confirm"
              rules="required"
              label="Confirm Password"
              type="password"
            />
            <z-button class="mt-4" :disabled="invalid">Create Account</z-button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '../firebase';
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async signupUser() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        await this.$store.dispatch('createCollection', 'Todos');
        // this.$router.push('/todos');
        console.log('Signed Up User!');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
.signup {
  &__main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
}
</style>
