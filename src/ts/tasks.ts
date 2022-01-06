import { showHideModal } from "./helper";

const templateTask : string = (<HTMLInputElement>document.querySelector('#taskItemTemplate')).innerHTML;
const taskList = <HTMLInputElement>document.querySelector('#no_status')

const htmlToElement = (html: string): ChildNode => {
    const template: HTMLTemplateElement = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return <ChildNode>template.content.firstChild;
};

const makeTask = (title: string): ChildNode => {
    const html: string = templateTask
        .replace('{{title}}', title)
    return htmlToElement(html);
};

export const addTask = (): void => {
    const taskText = (<HTMLInputElement>document.querySelector('#todo_input')).value
    const task : ChildNode = makeTask(taskText);
    showHideModal()
    taskList.appendChild(task);
};

export const deleteTask = (event : Event): void => {
    if ((<HTMLInputElement>(<HTMLInputElement>event.target).parentElement).classList.contains('todo')){ 
        (<HTMLInputElement>(<HTMLInputElement>event.target).parentElement).remove();
    }
}
