import {domElements} from "./global-var";

domElements.task.addEventListener('click', onTaskListClick);

function onTaskListClick(event) {
    switch (true) {
      case event.target.classList.contains("task-item"):
        toggleTaskState(event.target);
        break;
      case event.target.classList.contains("delete-btn"):
        deleteTask(event.target.parentElement);
        break;
    }
}
function toggleTaskState(el) {
    el.classList.toggle("done");
  }
function  deleteTask(el) {
      el.remove();
  }