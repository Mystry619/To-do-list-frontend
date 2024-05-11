<template>
  <div class="container p-2">
  <div>
    <form @submit.prevent="updateTask">
      <div class="row">
        <div class="form-group">
          <textarea id="description" class="form-control" placeholder="Update the task description" v-model="updatedTask.description" required></textarea>
        </div>
      </div>
      <div class="row">
        <div class="d-flex justify-content-between align-items-center">
          <div class="m-2" >
            <button class="btn btn-primary" type="submit">Update Task</button>
      <label>
        <input class="m-1 form-check-input bg-dark" type="checkbox" v-model="updatedTask.completed"> Completed
      </label>
          </div>
      <button class="btn btn-danger" type="button" @click="closeUpdateForm">x</button>
    </div>
  </div>   
    </form>
  </div>
</div>
</template>

<script>
export default {
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      updatedTask: {
        description: '',
        completed: false
      }
    };
  },
  methods: {
    async updateTask() {
      try {
        const response = await fetch(`http://localhost:8080/tasks/${this.$route.params.email}/${this.taskId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            description: this.updatedTask.description,
            completed: this.updatedTask.completed
          })
        });
        if (response.ok) {
          this.closeUpdateForm();
          this.$emit('task-updated');
        } else {
          throw new Error('Failed to update task');
        }
      } catch (error) {
        console.error(error);
      }
    },
    closeUpdateForm() {
      this.$emit('close');
    }
  }
};
</script>
