export const domElements = {
    task: document.querySelector('#taskList'),
    template: `<div class="task-item u-full-width" data-todo-id="{{id}}">
                    {{title}}
                    <span class="delete-btn">✘</span>
                </div>`
};