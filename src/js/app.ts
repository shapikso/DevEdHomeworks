import axios from '../../node_modules/axios/index';
import '../styles.css';
import "babel-core/register";
import "babel-polyfill";
const galery = <HTMLElement>document.querySelector('.galery')
const firstPage = <HTMLElement>document.getElementById('firstPage');
const secondPage = <HTMLElement>document.getElementById('secondPage');
const thirdPage = <HTMLElement>document.getElementById('thirdPage');
const fourthPage = <HTMLElement>document.getElementById('fourthPage');
const fifthPage = <HTMLElement>document.getElementById('fifthdPage');
const bigImg = <HTMLImageElement>document.querySelector('.bigImg');
const zoomIn = <HTMLElement>document.querySelector('.zoomIn');
const delBnt = <HTMLElement>document.querySelector('.delete-btn')
const taskItemTemplate = (<HTMLElement>document.getElementById('taskItemTemplate')).innerHTML;

type TPhoto =   {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

const URL = 'https://jsonplaceholder.typicode.com/photos';

function showBigImg(urlOfImg: string, id: number) {
  const photoPaint = <HTMLElement>document.getElementById(id.toString())
  photoPaint.addEventListener('click', () =>{
    showBigImgClick(urlOfImg)})
}
function showBigImgClick(urlOfImg:string) {
    bigImg.src = urlOfImg;
    zoomIn.classList.remove('hidden')
}
async function axiosGet(leftPosition:number,rightPosition:number):Promise<TPhoto[]| undefined>{ 
  try{
  const response = await axios.get(URL) 
  return response.data.slice(leftPosition,rightPosition);
  } catch (error){
  alert("Error");
  return undefined
  }
} 
async function showPhotos(leftPosition:number,rightPosition:number) {
  const data = await axiosGet(leftPosition,rightPosition); 
  if(data){
  data.forEach((element:TPhoto) => {
    addPhoto(element);
  });
}
}
function addPhoto(photo: TPhoto) {
  const html = taskItemTemplate
    .replace("{{title}}", photo.thumbnailUrl)
    .replace("{{id}}", photo.id.toString())
    const newTaskEl = htmlToElement(html);
    galery.appendChild(newTaskEl);
    showBigImg(photo.url,photo.id);
  }
function htmlToElement(html: string): HTMLElement {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return <HTMLElement>template.content.firstChild;
}
firstPage.addEventListener('click', () => {
  galery.innerHTML = ' ';
  firstPage.classList.add('activepage');
  secondPage.classList.remove('activepage');
  thirdPage.classList.remove('activepage');
  fourthPage.classList.remove('activepage');
  fifthPage.classList.remove('activepage');
  showPhotos(0,20);
})
secondPage.addEventListener('click', () => {
  galery.innerHTML =' ';
  firstPage.classList.remove('activepage');
  secondPage.classList.add('activepage');
  thirdPage.classList.remove('activepage');
  fourthPage.classList.remove('activepage');
  fifthPage.classList.remove('activepage');
  showPhotos(21,41);
})
thirdPage.addEventListener('click', () => {
  galery.innerHTML =' ';
  firstPage.classList.remove('activepage');
  secondPage.classList.remove('activepage');
  thirdPage.classList.add('activepage');
  fourthPage.classList.remove('activepage');
  fifthPage.classList.remove('activepage');
  showPhotos(42,62);
})
fourthPage.addEventListener('click', () => {
  galery.innerHTML =' ';
  firstPage.classList.remove('activepage');
  secondPage.classList.remove('activepage');
  thirdPage.classList.remove('activepage');
  fourthPage.classList.add('activepage');
  fifthPage.classList.remove('activepage');
  showPhotos(63,83);
})
fifthPage.addEventListener('click', () => {
  galery.innerHTML =' ';
  firstPage.classList.remove('activepage');
  secondPage.classList.remove('activepage');
  thirdPage.classList.remove('activepage');
  fourthPage.classList.remove('activepage');
  fifthPage.classList.add('activepage');
  showPhotos(84,104);
})
delBnt.addEventListener('click',() =>{
  zoomIn.classList.add('hidden');
})

firstPage.click();