import '../styles.css';

export class Slider {
  constructor() {
    this.lastElement = document.querySelector('.photos').lastChild;
    this.startElement = document.querySelector('.photos').firstChild;
    document.getElementById('next').addEventListener('click', this.nextButtonClick.bind(this));
    document.getElementById('prev').addEventListener('click', this.prevButtonClick.bind(this));
    document.querySelector('.photos').addEventListener('click', this.onPhotoClick.bind(this));
    this.start = document.getElementById('start');
    this.start.addEventListener('click', this.startShowingPictures.bind(this));
    this.stop = document.getElementById('stop');
    this.stop.addEventListener('click', this.stopShowingPictures.bind(this));
  }
  startShowingPictures(){
    this.stop.disabled = false;
    this.start.disabled = true;
    this.start.classList.add('disabled');
    this.stop.classList.remove('disabled');
    this.interval = setInterval(this.nextButtonClick.bind(this), 1000);
  }
  stopShowingPictures() {
    this.stop.disabled = true;
    this.start.disabled = false;
    this.start.classList.remove('disabled');
    this.stop.classList.add('disabled');
    clearTimeout(this.interval);
  }
  onPhotoClick(event){
    switch (true) {
      case event.target.offsetParent.classList.contains("next"):
        this.nextButtonClick();
        break;
      case event.target.offsetParent.classList.contains("previous"):
        this.prevButtonClick();
        break;
    }
  }
  nextButtonClick(){
    const current = document.querySelector('.current');
    this.clickNext(current);
  }
  prevButtonClick() {
    const current = document.querySelector('.current');
    this.clickPrev(current);
  }
  clickNext(current) {
    const {next,prev} = this.returnParams(current);
    this.makePrevious(current, 'previous', 'current');
    this.hiddeElement(prev,'hidden', 'previous', 'next');
    this.makeCurrentElement(next, 'current', 'next', 'next');
    this.makeNextRight(next,'next', 'hidden');
  }
  clickPrev(current){
    const {next,prev} = this.returnParams(current);
    this.makePrevious(current, 'next', 'current');
    this.hiddeElement(next,'hidden', 'next', 'prev');
    this.makeCurrentElement(prev, 'current', 'previous', 'prev');
    this.makePrevfromHidden(prev, 'previous', 'hidden' );
  }
  makePrevious(el, add, remove) {
    this.addRemoveClasses(el, add, remove);
  }
  makePrevfromHidden(el, add, remove) {
    if (el?.previousElementSibling){
      this.addRemoveClasses(el.previousElementSibling, add, remove);
    } else {
        const lastElement = document.querySelector('.photos').lastChild;
        if (lastElement.previousElementSibling.classList.contains('current')){
          this.addRemoveClasses(lastElement.previousElementSibling.previousElementSibling, add, remove);
      } else {
        this.addRemoveClasses(lastElement.previousElementSibling, add, remove);
      }
    }
   }
  returnParams(current) {
      return { next : current.nextElementSibling, prev: current.previousElementSibling}
    }
  addRemoveClasses(el, add, remove) {
    el.classList.add(add);
    el.classList.remove(remove);
  }
  hiddeElement(el,add,remove, whatButton) {
    if(el){
      this.addRemoveClasses(el, add, remove);
    } else {
        if(whatButton === 'next'){
          this.addRemoveClasses(this.lastElement.previousElementSibling, add, remove);
        } else {
          this.addRemoveClasses(this.startElement.nextElementSibling, add, remove);
       }
    }
  }
  makeCurrentElement(el, add, remove, whatButton) {
  if (el){
    this.addRemoveClasses(el, add, remove);
  } else {
    if(whatButton === 'next'){
      this.addRemoveClasses(this.startElement.nextElementSibling, add, remove);
    } else {
      this.addRemoveClasses(this.lastElement.previousElementSibling, add, remove);
    }  
  }
 }
 makeNextRight(el, add, remove) {
  if (el?.nextElementSibling){
    this.addRemoveClasses(el.nextElementSibling, add, remove);
  } else {
    if (this.startElement.nextElementSibling.classList.contains('current')){
      this.addRemoveClasses(this.startElement.nextElementSibling.nextElementSibling, add, remove);
      } else {
        this.addRemoveClasses(this.startElement.nextElementSibling, add, remove);
      }
    }
  }
}