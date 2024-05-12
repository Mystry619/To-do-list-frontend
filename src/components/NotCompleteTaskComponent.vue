<template>
  <div class="container">
    <div class="row">
    <div>
      <h2 class="text-center">Incomplete Tasks</h2>
      <ul class="list-group" v-if="incompleteTasks.length">
        <li class="list-group-item text-center text-light bg-danger" v-for="task in incompleteTasks" :key="task.id">
          {{ task.description }}
        </li>
      </ul>
      <p class="text-center" v-else>No incomplete tasks available</p>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        incompleteTasks: []
      };
    },
    created() {
      this.getIncompleteTasks();
    },
    methods: {
      async getIncompleteTasks() {
        try {
          const response = await fetch(`https://20240512t142928-dot-to-do-list-backend-423109.ey.r.appspot.com/tasks/${this.$route.params.email}/incomplete`);
          const data = await response.json();
          this.incompleteTasks = data;
        } catch (error) {
          console.error('Error fetching incomplete tasks:', error);
        }
      }
    }
  };
  </script>
  