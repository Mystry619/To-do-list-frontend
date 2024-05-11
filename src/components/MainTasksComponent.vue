<template>
  <div>
    <createTask @task-created="createTask"></createTask>
    <update-task :task-id="selectedTaskId" v-if="selectedTaskId !== null" @task-updated="updateTask" @close="closeUpdateForm"></update-task>
  </div>
  <div>
    <show-task :tasks="tasks" @task-selected="selectTask" @task-deleted="deleteTask"></show-task>
  </div>

</template>

<script>
import CreateTask from './CreateTaskComponent.vue';
import ShowTask from './ShowTasksComponent.vue';
import UpdateTask from './UpdateTaskComponent.vue';

export default {
  components: {
    CreateTask,
    ShowTask,
    UpdateTask
  },
  data() {
    return {
      tasks: [],
      selectedTaskId: null
    };
  },
  methods: {
    async createTask(task) {
      try {
        const response = await fetch(`http://localhost:8080/create/${this.$route.params.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        });
        if (response.ok) {
          this.getAllTasks();
        } else {
          throw new Error('Failed to create task');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getAllTasks() {
      try {
        const response = await fetch(`http://localhost:8080/tasks/${this.$route.params.email}`);
        const data = await response.json();
        this.tasks = data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    selectTask(taskId) {
      this.selectedTaskId = taskId;
    },
    async deleteTask(taskId) {
      try {
        const response = await fetch(`http://localhost:8080/tasks/${this.$route.params.email}/${taskId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          this.getAllTasks();
        } else {
          throw new Error('Failed to delete task');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async updateTask() {
      this.selectedTaskId = null;
      this.getAllTasks();
    },
    closeUpdateForm() {
      this.selectedTaskId = null;
    }
  },
  created() {
    this.getAllTasks();
  }
};
</script>
<style>


</style>