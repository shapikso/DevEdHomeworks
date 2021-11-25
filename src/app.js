import './styles.css';
const axios = require('axios');
const galery = document.querySelector('.galery')
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const thirdPage = document.getElementById('thirdPage');
const fourthPage = document.getElementById('fourthPage');
const fifthPage = document.getElementById('fifthdPage');
const bigImg = document.querySelector('.bigImg');
const zoomIn = document.querySelector('.zoomIn');
const delBnt = document.querySelector('.delete-btn')
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

function showBigImg(urlOfImg, id) {
  const photoPaint = document.getElementById(String(id))
  photoPaint.addEventListener('click', () =>{
    showBigImgClick(urlOfImg)})
}
function showBigImgClick(urlOfImg) {
    bigImg.src = urlOfImg;
    zoomIn.classList.remove('hidden')
}
async function axiosTest(leftPosition,rightPosition) { 
  try{
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos') 
  return response.data.slice(leftPosition,rightPosition);
  } catch (error){
  alert("Error");
  return undefined;
  }
} 
async function showPhotos(leftPosition,rightPosition) {
  const data = await axiosTest(leftPosition,rightPosition); 
  data.forEach(element => {
    addPhoto(element);
  });
}
function addPhoto(photo) {
  const html = taskItemTemplate
    .replace("{{title}}", photo.thumbnailUrl)
    .replace("{{id}}", photo.id)
    const newTaskEl = htmlToElement(html);
    galery.appendChild(newTaskEl);
    showBigImg(photo.url,photo.id);
  }
function htmlToElement(html) {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
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
module.exports = {
  axiosTest,
  addPhoto,
  showBigImgClick
};