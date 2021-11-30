import "./styles.css";

class View {
  constructor () {
  }
  showTask (html){
    const newTaskEl = this.view.htmlToElement(html);
    taskList.appendChild(newTaskEl);
  }
  htmlToElement(html) {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  toggleTaskState(el) {
    el.classList.toggle("done");
  }
}

class Model {
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
}
class Controller {
  constructor (toDo) {
    const taskList = document.getElementById("taskList");
    taskList.addEventListener("click", (event) => {
      toDo.model.onTaskListClick.call(toDo,event)
    });
  }
  getList() {
    return fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then((res) => res.json())
      .then(json => this.model.renderList.call(this, json));
  }
}

class ToDoList {
  constructor () {
    this.view = new View();
    this.model = new Model();
    this.controller = new Controller(this);
    this.controller.getList.call(this);
  }
}
const list = new ToDoList();