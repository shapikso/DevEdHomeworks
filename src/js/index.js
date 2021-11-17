const addButton = document.querySelector('.add')
const toList = document.querySelector('.tasks')
const inputText= document.getElementById('inp')
const toDo = {
  genereteId : function (){
    return Object.keys(this).length;
  },
  add : function (value){ 
    const id = this.genereteId()
    this[id] = {id, value, done: false  }
    return id
  },
  show : function () {
    Object.values(this).forEach(element => {
      if (typeof element === 'object'){
        const task = document.createElement('div')
        task.classList.add('list');
        //console.log(element['value']);
        task.innerHTML = 
       `<p>${element['value']}</p>
        <div class="divButn">
            <button><i id="${element['id']}" class="fas fa-trash"></i></button>
            <button><i class="fas fa-check"></i></button></div>
      </div>`
      toList.appendChild(task);
       const del = document.getElementById(`${element['id']}`)
       del.addEventListener('click', () =>{
        task.parentNode.removeChild(task);
       })
      }
    })
  }
}


addButton.addEventListener('click', () => {
  const task = document.createElement('div')
  const value = inputText.value
  const id = toDo.add(value)
  task.classList.add('list');
  task.innerHTML = 
 `<p>${value}</p>
  <div class="divButn">
      <button><i id="${id}" class="fas fa-trash"></i></button>
      <button><i class="fas fa-check"></i></button></div>
</div>`
toList.appendChild(task);
 const del = document.getElementById(`${id}`)
 del.addEventListener('click', () =>{
  task.parentNode.removeChild(task);
  
 })
})

function getObj() {
  console.log(toDo);
  console.log(Object.values(toDo))
}
