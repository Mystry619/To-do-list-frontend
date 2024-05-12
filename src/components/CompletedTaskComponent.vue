<template>
  <div class="container">
    <div class="row">
    <div>
      <h2 class="text-center">Completed Tasks</h2>
      <ul class="list-group" v-if="completedTasks.length">
        <li class="list-group-item text-center text-light bg-success" v-for="task in completedTasks" :key="task.id">
          {{ task.description }}
        </li>
      </ul>
      <p class="text-center" v-else>No completed tasks available</p>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        completedTasks: []
      };
    },
    created() {
      this.getCompletedTasks();
    },
    methods: {
      async getCompletedTasks() {
        try {
          const response = await fetch(`https://backedn-to-do.ey.r.appspot.com/tasks/${this.$route.params.email}/completed`);
          const data = await response.json();
          this.completedTasks = data;
        } catch (error) {
          console.error('Error fetching completed tasks:', error);
        }
      }
    }
  };
  </script>
  