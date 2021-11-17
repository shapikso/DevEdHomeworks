const addButton = document.querySelector('.add')
const toList = document.querySelector('.tasks')
const inputText= document.getElementById('inp')
let list = []
if(!localStorage.getItem('key')){
localStorage.setItem('key', JSON.stringify([]))
}

else {
 list = JSON.parse(localStorage.getItem('key'))
 console.log(list)
}
show(list);
function createElement(value,id) { 
 list.push({id, value})
 console.log(list);
 localStorage.setItem('key', JSON.stringify(list))
}
  function show (array) {
  Object.values(array).forEach(element => {
    if (typeof element === 'object'){
      createList(element['id'],element['value']);
    }
  })
}
addButton.addEventListener('click',() =>{ 
  //console.log(list[list.length-1]);
  const id = list.length !== 0 ? list[list.length-1]['id']+1 : 0
  createElement(inputText.value,id)
  createList(id,inputText.value)
  
})

function createList(id, value) {
  const task = document.createElement('div')
  task.classList.add('list');
  task.innerHTML = 
 `<p>${value}</p>
  <div class="divButn">
      <button><i id="${'trash' + id}" class="fas fa-trash"></i></button>
      <button><i  id="${'check' + id}" class="fas fa-check"></i></button></div>
</div>`
toList.appendChild(task);
 const del = document.getElementById(`${'trash' + id}`)
 del.addEventListener('click', () =>{

  list.splice(findWhatDelete(id),1);
  localStorage.setItem('key', JSON.stringify(list))
  task.parentNode.removeChild(task);
 })
 const done = document.getElementById(`${'check'+id}`);
 done.addEventListener('click', () => {
   if(task.classList.contains('done')){
    task.classList.remove('done')
   }
   else {
    task.classList.add('done')
   }
 })
}

function findWhatDelete (id){
  let idInArray;
  for (let i=0;i<list.length;i++){
    if(list[i]['id'] === id){
      return i; 
    }}
}
