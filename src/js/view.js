export class View {
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
  //module.exports  = View;