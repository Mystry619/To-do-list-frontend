<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand"><router-link class="nav-link text" :to="{ name: 'task', params: { email: $route.params.email } }">Do It Now</router-link>
</a>
  <button class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }">
    <ul class="navbar-nav ">
      <li class="nav-item ">
        <router-link class="nav-link text" :to="{ name: 'task', params: { email: $route.params.email } }">Home</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link text" :to="{ name: 'complete', params: { email: $route.params.email } }">Completed Tasks</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link text" :to="{ name: 'notcomplete', params: { email: $route.params.email } }">Incompleted Tasks</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link text" to="/login">Logout</router-link>
      </li>
    </ul>
  </div>
</nav>



</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
};
</script>


<style>


.text{
  text-decoration: none;
  color: black;
}

</style>