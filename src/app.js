 const next = document.getElementById('next')
 const prev = document.getElementById('prev')
 
 function returnParams() {
    const current = document.querySelector('.current');
    return {current, next : current.nextElementSibling, prev: current.previousElementSibling}
 }

 next.addEventListener('click', () => {
   const {current,next,prev} = returnParams();
   current.classList.remove('current');
   current.classList.add('previous');

   if(prev){
    prev.classList.remove('previous');
    prev.classList.add('hidden');
   } else {
      const lastElement = document.querySelector('.photos').lastChild
      lastElement.previousElementSibling.classList.add('hidden');
      lastElement.previousElementSibling.classList.remove('previous');
    }

   if (current.nextElementSibling){
      next.classList.remove('next');
      next.classList.add('current');
    } else {
      const startElement = document.querySelector('.photos').firstChild
      startElement.nextElementSibling.classList.remove('next');
      startElement.nextElementSibling.classList.add('current');
    }
    if (next?.nextElementSibling){
      next.nextElementSibling.classList.remove('hidden');
      next.nextElementSibling.classList.add('next');
    } else {
      const startElement = document.querySelector('.photos').firstChild
      if (startElement.nextElementSibling.classList.contains('current')){
        startElement.nextElementSibling.nextElementSibling.classList.remove('hidden');
        startElement.nextElementSibling.nextElementSibling.classList.add('next');
      } else {
        startElement.nextElementSibling.classList.remove('hidden');
        startElement.nextElementSibling.classList.add('next');
      }
    }
   

 })


 prev.addEventListener('click', () => {
  const nextPhoto = document.querySelector('.next');
  const currentPhoto = document.querySelector('.current');
  const previousPhoto = document.querySelector('.previous');

  currentPhoto.classList.remove('current');
  currentPhoto.classList.add('next');
  previousPhoto.classList.remove('previous');
  previousPhoto.classList.add('current');

  nextPhoto.classList.remove('next');
  nextPhoto.classList.add('hidden');
   if (previousPhoto.previousElementSibling){
    previousPhoto.previousElementSibling.classList.remove('hidden');
    previousPhoto.previousElementSibling.classList.add('previous');
   } else {
     const lastElement = document.querySelector('.photos').lastChild
     lastElement.previousElementSibling.classList.remove('hidden');
     lastElement.previousElementSibling.classList.add('previous');

   }
})
 //nextElementSibling
 //previousElementSibling