import axios from "../../node_modules/axios/index";
import "../styles.css";
import { TMatch, TSeasons } from "./type";
require("babel-core/register");
require("babel-polyfill");

const id = document.URL.split('#')[1];

const matchTemplate = (<HTMLElement>document.getElementById('taskMovieTemplate')).innerHTML;
const mainMatch = <HTMLElement>document.querySelector('.main');

function htmlToElement(html : string) {
    const template: HTMLTemplateElement = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content;
  }

function addMatch(match: TMatch) {
    const {venue: {name:city}, stats: {home_score:firstTime, away_score:secondTime}, home_team:{name:nameFirst, logo:logoFirst, country:{name:firstContry} }, away_team:{name:nameSecond, logo:logoSecond, country:{name:secondContry}}, } = match;
    if(matchTemplate){
        const html: string = matchTemplate
        .replace("{{firstComand}}", nameFirst)
        .replace("{{firstContry}}", firstContry)
        .replace("{{firstLogo}}", logoFirst)
        .replace("{{secondComand}}", nameSecond)
        .replace("{{secondContry}}", secondContry)
        .replace("{{secondLogo}}", logoSecond)
        .replace("{{firstTime}}", firstTime.toString())
        .replace("{{secondTime}}", secondTime.toString())
        .replace("{{city}}", city)
        const newTaskEl = htmlToElement(html);
        if (newTaskEl && mainMatch){
            mainMatch.appendChild(newTaskEl);
        }
    }
  }

async function getMatch(id:string) {
    const response = await axios.get(`http://localhost:5000/match?matchId=${id}`);
    const data :TMatch = response.data;
    addMatch(data)
}

getMatch(id);