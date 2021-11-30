describe('On HTML', function () {
  let task;
  beforeAll(() => {
      document.body.innerHTML = `
      <div id="taskList" class="task-list u-full-width">
        <div class="task-item u-full-width" data-todo-id="2">
          quis ut nam facilis et officia qui
          <span class="delete-btn">✘</span>
        </div>
      </div>`;
      task = {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      }
  });

  it('should have taskList', function () {
    expect(document.querySelector('#taskList')).not.toBe(null);
  });

  it('should make task done', function () {
     require('../filesToTest/done');
     const countClasses = document.querySelector('.task-item').classList.length
     document.querySelector('.task-item').click();
     expect(document.querySelector('.task-item').classList.length).toBe(countClasses+1);
  });

  it('should delete task', function () {
    require('../filesToTest/done');
    const childrensCount = document.querySelector('#taskList').childElementCount
    document.querySelector('.delete-btn').click();
    expect(document.querySelector('#taskList').childElementCount).toBe(childrensCount-1);
 });
 
 it('should add task', function () {
  const addTask = require('../filesToTest/addTask');
  addTask(task);
  expect(document.querySelector('#taskList').childElementCount).toBe(1);
  });
});