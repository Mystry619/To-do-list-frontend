<template>
  <div>
    <h1 class="text-center m-2">Do It Now</h1>
  </div>
  <div class="position-absolute top-50 start-50 translate-middle">
  <div class="container">
    <div class="row">
      <div>
        <h2 class="text-center">Register</h2>
      </div>
    </div>
    <form @submit.prevent="registerUser">
      <div clas="row">
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
          <button type="submit" class="btn btn-primary" >Register</button>
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
       <p > <RouterLink class="nav-link text" to="/login">Login page</RouterLink> </p>
      </div>
    </div>
  </form>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    registerUser() {
      fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
        .then(response => {
          if (response.ok) {
            this.$router.push('/login');
          } else {
            this.errorMessage = 'User is exsit';
            throw new Error('Failed to register user');
          }
        })
    }
  }
};
</script>


<style>
.mt-0 {
  background-color: red;
  text-align: center;
}

</style>