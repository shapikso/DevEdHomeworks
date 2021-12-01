import {URL} from './const.js'
import {Model} from './model.js'
import {View} from './view.js'


 export class Controller {
    constructor () {
      this.view = new View();
      this.model = new Model();
      const taskList = document.getElementById("taskList");
  
      taskList.addEventListener("click", (event) => {
        this.model.onTaskListClick.call(this,event)
      });
      this.getList.call(this);
    }
    getList() {
      return fetch(URL+"?_limit=15")
        .then((res) => res.json())
        .then(json => this.model.renderList.call(this, json));
    }
  }
  
  //module.exports  = Controller;