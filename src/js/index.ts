import "../styles.css";

// enum  WeatherEnum{
//     apiKey = 'f1d53554aa15ea3a40648ba1d31a2e2e',
//     defaultCity = 'London'
// }
// type TCityWeather = {

// }
const mainWeather: HTMLElement | null = document.getElementById("temp");
const select: HTMLElement | null = document.querySelector(".selector");
const taskItemTemplate = document.getElementById("taskItemTemplate")?.innerHTML;

require("babel-core/register");
require("babel-polyfill");

function returnImg(imgId : string):string {
    return `https://openweathermap.org/img/wn/${imgId}@2x.png`
}

function fromKelToCel (kel:number):string {
    return (Math.round(kel-273.15)).toString()
}

function addTask(city:TWeather) {
    if(mainWeather) mainWeather.innerHTML = ' ';
    if(taskItemTemplate){
        const html: string = taskItemTemplate
        .replace("{{tempNow}}",fromKelToCel(city.main.temp))
        .replace("{{tempFeel}}", fromKelToCel(city.main.feels_like))
        .replace("{{cityName}}", city.name)
        .replace("{{imgId}}",returnImg(city.weather[0].icon));
    
        const newTaskEl = htmlToElement(html);
        if (newTaskEl && mainWeather){
            mainWeather.appendChild(newTaskEl);
        }
    }
  }

function htmlToElement(html : string) {
  const template: HTMLTemplateElement = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}
  
type TWeather = {
    weather : {id: number,main: string,description: string, icon: string}[],
    main : {temp: number, feels_like: number,temp_min: number,temp_max: number,pressure: number,humidity: number},
    wind : {speed: number, deg: number},
    clouds: {all:number},
    name: string

}

async function getWeather(
    URL: string,
  ): Promise<void> {
    const response = await fetch(URL);
    const body = await response.json();
    addTask(body);
}

select?.addEventListener('change', (event):void => {
    console.log('in select');
    if((<HTMLInputElement>event.target).value){
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${(<HTMLInputElement>event.target).value}&appid=f1d53554aa15ea3a40648ba1d31a2e2e`)
}
})
