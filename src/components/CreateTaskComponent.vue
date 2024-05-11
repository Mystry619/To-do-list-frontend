<template>
  <div class=" p-2 container">
    <div>
      <form @submit.prevent="createTask">
        <div class="row">
          <div class="form-group">
            <textarea class="form-control" id="description" v-model="task.description" placeholder="Enter task desciption" required></textarea>
          </div>
        </div>
        <div class="row">
          <div class=" m-2 ">
            <button type="submit" class="btn btn-primary">Create Task</button>
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
        task: {
          description: ''
        }
      };
    },
    methods: {
      createTask() {
        this.$emit('task-created', this.task);
        this.task = { description: '' };
      }
    }
  };
  </script>
  