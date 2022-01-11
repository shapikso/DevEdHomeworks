import axios from "../../node_modules/axios/index";
import "../styles.css";
import { TMatch, TSeasons } from "./type";
require("babel-core/register");
require("babel-polyfill");

const seasonNames = <HTMLInputElement>document.querySelector('#season');
const matchElement = <HTMLElement>document.querySelector('.cardWrapper');
const seasonTemplate = (<HTMLElement>document.querySelector('#seasonTemplate')).innerHTML;
const matchTemplate = (<HTMLElement>document.querySelector('#matchTemplate')).innerHTML;
const openData = <HTMLElement>document.querySelector('.main');

function htmlToElement(html : string) {
    const template: HTMLTemplateElement = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content;
  }

  seasonNames.addEventListener('change', (event) => {
    getMatches(+(<HTMLOptionElement>event.target).value);
})

async function getUsers(): Promise<void> {
    const response = await axios.get('http://localhost:5000/seasons');
    const data :TSeasons[] = response.data
    console.log(response.data)
    data.forEach(element => {
        addTask(element);
    });
    //http://localhost:5000/seasons
}
async function getMatches(id:number): Promise<void> {
    const response = await axios.get(`http://localhost:5000/matches?seasonId=${id}`);
    const data :TMatch[] = response.data
    console.log(response.data)
    data.forEach(element => {
        addMatch(element);
    });
    //http://localhost:5000/seasons
}

function addTask(season: TSeasons) {
    const {season_id: id, name } = season;
    if(seasonTemplate){
        const html: string = seasonTemplate
        .replace("{{name}}", name)
        .replace("{{value}}", id.toString());
        const newTaskEl = htmlToElement(html);
        if (newTaskEl && seasonNames){
            seasonNames.appendChild(newTaskEl);
        }
    }
  }
function addMatch(match: TMatch) {
    const {match_id:id,home_team:{name:nameFirst, logo:logoFirst}, away_team:{name:nameSecond, logo:logoSecond}, stats: {home_score:firstScore,away_score:secondScore} } = match;
    if(matchTemplate){
        const html: string = matchTemplate
        .replace("{{matchId}}", id.toString())
        .replace("{{firstComand}}", nameFirst)
        .replace("{{firstLogo}}", logoFirst)
        .replace("{{secondComand}}", nameSecond)
        .replace("{{secondLogo}}", logoSecond)
        .replace("{{firstScore}}", firstScore.toString())
        .replace("{{secondScore}}", secondScore.toString());
        const newTaskEl = htmlToElement(html);
        if (newTaskEl && matchElement){
            matchElement.appendChild(newTaskEl);
        }
    }
  }
getUsers();

matchElement.addEventListener('click', openFilmCard )

function openFilmCard(event:MouseEvent):void {
    console.log((<HTMLElement>(<HTMLElement>event.target).parentElement));
    if ((<HTMLElement>(<HTMLElement>event.target).parentElement).classList.contains('card')) {
        
        const matchId = Number((<HTMLElement>(<HTMLElement>event.target).parentElement).id);
        window.open(`./description.html#${matchId}`);
    }
}

    


