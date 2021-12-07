 const next = document.getElementById('next')
 const prev = document.getElementById('prev')
 
 function returnParams(current) {
  
    return { next : current.nextElementSibling, prev: current.previousElementSibling}
 }

 next.addEventListener('click', () => {
   const current = document.querySelector('.current');
   const {next,prev} = returnParams(current);

   makePreviousNext(current, 'previous', 'current');
   hiddeElement(prev,'hidden', 'previous');
   makeCurrentElement(next, 'current', 'next');
   makeNextRight(next,'next', 'hidden')
 })
 prev.addEventListener('click', () => {
  const current = document.querySelector('.current');
  const {next,prev} = returnParams(current);

  makePreviousPrev(current, 'next', 'hidden');
  hiddeElement(next,'hidden', 'next');
  makeCurrentElement(prev, 'current', 'previous');
  makeNextRight(current,'next', 'current')
})

 function addRemoveClasses(el, add, remove) {
   el.classList.add(add);
   el.classList.remove(remove);
 }
 function hiddeElement(el,add,remove) {
  if(el){
    addRemoveClasses(el, add, remove);
  } else {
     const lastElement = document.querySelector('.photos').lastChild;
     addRemoveClasses(lastElement.previousElementSibling, add, remove);
   }
 }
 function makeCurrentElement(el, add, remove) {
  if (el){
    addRemoveClasses(el, add, remove);
  } else {
    const startElement = document.querySelector('.photos').firstChild
    addRemoveClasses(startElement.nextElementSibling, add, remove);
  }
 }
function makeNextRight(el, add, remove) {
  if (el?.nextElementSibling){
    addRemoveClasses(el.nextElementSibling, add, remove);
  } else {
    const startElement = document.querySelector('.photos').firstChild
    if (startElement.nextElementSibling.classList.contains('current')){
      addRemoveClasses(startElement.nextElementSibling.nextElementSibling, add, remove);
    } else {
      addRemoveClasses(startElement.nextElementSibling, add, remove);
    }
  }
}
function makePreviousNext(el, add, remove) {
  addRemoveClasses(el, add, remove);
 }

 function makePreviousPrev(el, add, remove) {
    addRemoveClasses(el, add, remove);
    
 }



 
 //nextElementSibling
 //previousElementSibling