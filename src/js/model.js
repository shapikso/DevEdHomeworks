 export class Model {
    constructor () {
      this.taskItemTemplate = document.getElementById("taskItemTemplate").innerHTML;
    }
    renderList(data) {
      data.forEach(element => this.model.addTask.call(this, element));
    }
    addTask(task) {
      const html = this.model.taskItemTemplate
        .replace("{{title}}", task.title)
        .replace("{{id}}", task.id);
      this.view.showTask.call(this,html)
    }
    onTaskListClick(event) {
      switch (true) {
        case event.target.classList.contains("task-item"):
          this.view.toggleTaskState(event.target);
          break;
        case event.target.classList.contains("delete-btn"):
          this.model.deleteTask.call(this, event.target.parentElement);
          break;
      }
    }
    deleteTask(el) {
      fetch("https://jsonplaceholder.typicode.com/todos/" + el.dataset.todoId, {
        method: "DELETE",
      }).then(() => {
        el.remove();
      });
    }
  };