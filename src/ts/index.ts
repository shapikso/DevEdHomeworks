import "../styles.css";
import { addTask, deleteTask } from "./tasks";
import { removeOpasity,activeLine, dropTask, targetingElement } from "./drop";
import { showHideModal } from "./helper";

const list = <HTMLElement>document.querySelector('.todo-container')
const showModalButton = <HTMLElement>document.querySelector('#add_btn')
const closeModal = <HTMLElement>document.querySelector('.close-modal')
const sumbiteButon = <HTMLElement>document.querySelector('#todo_submit')

list.addEventListener('dragend', removeOpasity, false);
list.addEventListener('dragover', ( event ) => event.preventDefault(), false);
list.addEventListener('dragenter',activeLine, false);
list.addEventListener('dragleave', activeLine, false);
list.addEventListener('drop', dropTask, false);
list.addEventListener('dragstart', targetingElement, false);
showModalButton.addEventListener('click', showHideModal)
closeModal.addEventListener('click', showHideModal)
sumbiteButon.addEventListener('click', addTask)
list.addEventListener('click', deleteTask)