import {domElements} from "./global-var";

function addTask(task) {
    const html = domElements.template
      .replace("{{title}}", task.title)
      .replace("{{id}}", task.id);
    showTask(html)
  }

  function showTask (html){
    const newTaskEl = htmlToElement(html);
    domElements.task.appendChild(newTaskEl);
  }
  
  function htmlToElement(html) {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  module.exports  = addTask;