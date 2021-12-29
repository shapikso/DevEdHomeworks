import axios from "../../node_modules/axios/index";
import "../styles.css";
type TTraks = 
  {
    subtitle: string,
    title: string,
    images: string,
    uri : string
  }


const traks: TTraks[] = [];
require("babel-core/register");
require("babel-polyfill");

const playBtn = <HTMLElement>document.getElementById('play-pause')
const music = new Audio('https://cdns-preview-3.dzcdn.net/stream/c-3c6d63a748c0ce386f4483f19540c7e9-3.mp3');
const nameAutor = <HTMLElement>document.querySelector('.name')
const song = <HTMLElement>document.querySelector('.song')
const albumImg = <HTMLImageElement>document.querySelector('.albumImg')
const nextBtn = <HTMLElement>document.getElementById('forward')
const prevBtn = <HTMLElement>document.getElementById('backward')
//backward forward
let currentTrek = 0

function playSong() {
  if(playBtn.classList.contains('fa-play')){
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
  } else {
    playBtn.classList.replace('fa-pause','fa-play',);
    playBtn.setAttribute('title', 'Play');
    music.pause();
  }
}


const setMusic = (number:number) => {
  try {
    nameAutor.innerHTML=traks[number].title
    song.innerHTML = traks[number].subtitle
    albumImg.src = traks[number].images
    music.src = traks[number].uri
  } catch (error) {
    console.log(error)
  }
}

const nextSong = () => {
  playSong();
  setMusic(++currentTrek);
  playSong();
}

const prevSong = () => {
  playSong();
  setMusic(--currentTrek);
  playSong();
}

const getSongs = async () => {
  const options = {
    method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
  params: {key: '484129036', locale: 'ru-RU'},
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': '96bc192553mshe6448af4fde60e5p1ee797jsn47eab89bbe17'
  }
  };
     const res = await axios.request(options as any);
     const data = res.data.tracks;
     data.forEach(element => { 
       const {images,subtitle,title,hub} = element;
       const {actions} = hub
       const {uri} = actions[1]

       traks.push({
        subtitle,
        title,
        images: images.background,
        uri
       })
     });

    setMusic(currentTrek)

}

getSongs();


playBtn.addEventListener('click',playSong)
nextBtn.addEventListener('click',nextSong)
prevBtn.addEventListener('click',prevSong)