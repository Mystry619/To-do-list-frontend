<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col">
          <h2 class="text-center">All Tasks</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul class="list-group" v-if="tasks.length">
            <li class="list-group-item p-3 mb-2 bg-secondary text-white" v-for="task in tasks" :key="task.id">
              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check">
                  <input class="form-check-input bg-dark" type="checkbox" v-model="task.completed" @change="updateTaskStatus(task)">
                  <p class="form-check-label" :for="'task-' + task.id">{{ task.description }}</p>
                </div>
                <div>
                  <button class="btn btn-primary btn-sm" @click="updateTask(task)">Update</button>
                  <button class="btn btn-danger btn-sm ml-2" @click="deleteTask(task.id)">Delete</button>
                </div>
              </div>
            </li>
          </ul>
          <p class="text-center" v-else>No tasks available</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateTask(task) {
      this.$emit('task-selected', task.id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    deleteTask(taskId) {
      this.$emit('task-deleted', taskId);
    },
    async updateTaskStatus(task) {
      try {
        const response = await fetch(`https://backedn-to-do.ey.r.appspot.com/tasks/${this.$route.params.email}/${task.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ description: task.description, completed: task.completed })
        });
        if (response.ok) {
        } else {
          throw new Error('Failed to update task status');
        }
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  }
};
</script>

