<!-- Login.vue -->
<template>
   <div>
    <h1 class="text-center m-2">Do It Now</h1>
  </div>
  <div class="position-absolute top-50 start-50 translate-middle">
  <div class="container">
    <div class="row">
      <div>
        <h2 class="text-center">Login</h2>
      </div>
    </div>
    <form @submit.prevent="loginUser">
      <div class="row">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email" required>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required>
        </div>
      </div>
      <div class="row" >
        <div class="p-3">
          <div class="text-center">
          <button type="submit" class="btn btn-primary" >Login</button>
        </div>
        </div>
      </div>
    <div class="row">
      <div class="text-center">
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
    <div class="row">
      <div class="text-center">
       <p> <RouterLink class="nav-link text" to="/">Register page</RouterLink> </p>
      </div>
    </div>
  </form>
  </div>


</div>





</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import router from '../router';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', 
    };
  },
  methods: {
    async loginUser() {
      try {
        const auth = getAuth(firebaseApp);
        const credential = await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push(`${this.email}`);
        this.errorMessage = '';

      } catch (error) {
        this.errorMessage = 'Incorrect email or password. Please try again.';
        console.log('Incorrect email or password. Please try again.')
      }
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
