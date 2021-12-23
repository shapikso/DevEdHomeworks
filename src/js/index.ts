import "../styles.css";

const mainWeather = <HTMLElement>document.getElementById("container");
const taskItemTemplate = (<HTMLElement>document.getElementById("taskItemTemplate")).innerHTML;
const taskPersonTemplate = (<HTMLElement>document.getElementById("taskItemPerson")).innerHTML;
const showMore = <HTMLElement>document.getElementById("showMore");
const hiddePopUpButton = <HTMLElement>document.getElementById("hiddePopUp");
const popUP = <HTMLElement>document.querySelector(".popUp");
const showMoreInfo = <HTMLElement>document.getElementById("container");

require("babel-core/register");
require("babel-polyfill");

let defoultid = 1;

function addTask(user:TUser) {
    const {id, avatar_url:avatar, login} = user;
    defoultid = id;
    if(taskItemTemplate){
        const html: string = taskItemTemplate
        .replace("{{id}}", id.toString())
        .replace("{{avatar}}", avatar)
        .replace("{{login}}", login);
    
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
  
type TUser = {
    login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean

}

type TPerson = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}
async function getUsers(URL: string, id:number): Promise<void> {
    const response = await fetch(URL + `?since=${id}`);
    const body: TUser[] = await response.json();
    console.log(body)
    body.forEach(element => {
        addTask(element);
    });
   
}
const handleGetUsers = () => getUsers(`https://api.github.com/users`,defoultid)
showMore.addEventListener('click', handleGetUsers);
getUsers(`https://api.github.com/users`, defoultid);
const hidePop = () => {
    popUP.classList.add('hidden');
    
}
hiddePopUpButton.addEventListener('click', hidePop)

const showPopUP = (person :TPerson) => {
    popUP.innerHTML = ' ';
    const {avatar_url:avatar,followers, following, public_repos:publicRepos,blog,url} = person;
    if(taskItemTemplate){
        const html: string = taskPersonTemplate
        .replace("{{followers}}", followers.toString())
        .replace("{{avatar}}", avatar)
        .replace("{{following}}", following.toString())
        .replace("{{id}}", publicRepos.toString())
        .replace("{{avatar}}", blog)
        .replace("{{login}}", url);
    
        const newTaskEl = htmlToElement(html);
        if (newTaskEl && popUP){
            popUP.appendChild(newTaskEl);
        }
        popUP.classList.remove('hidden')
    }
}

const showUserCard = async (URL: string) => {
    const response = await fetch(URL);
    const body: TPerson = await response.json();
    showPopUP(body);
}

const showUser = (event: MouseEvent) => {
    const element = <HTMLElement>event.target
   if (element.classList.contains('showButton')){
       const id = element.offsetParent?.id
       console.log(id);
       showUserCard(`https://api.github.com/user/${id}`)
   }
}

showMoreInfo.addEventListener('click', showUser);