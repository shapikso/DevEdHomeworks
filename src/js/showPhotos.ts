import axios from '../../node_modules/axios/index';
import { TPhoto } from './type';
import { dom, URL } from './constants'

function showBigImg(urlOfImg: string, id: number) {
    const photoPaint = <HTMLElement>document.getElementById(id.toString())
    photoPaint.addEventListener('click', () =>{
        showBigImgClick(urlOfImg)})
}

function showBigImgClick(urlOfImg:string) {
    dom.bigImg.src = urlOfImg;
    dom.zoomIn.classList.remove('hidden')
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
export async function showPhotos(leftPosition:number,rightPosition:number): Promise<void> {
    const data = await axiosGet(leftPosition,rightPosition); 
    if(data){
        data.forEach((element:TPhoto) => {
            addPhoto(element);
        });
    }

}
function addPhoto(photo: TPhoto) {
    const html = dom.taskItemTemplate
        .replace("{{title}}", photo.thumbnailUrl)
        .replace("{{id}}", photo.id.toString())
    const newTaskEl = htmlToElement(html);
    dom.galery.appendChild(newTaskEl);
    showBigImg(photo.url,photo.id);
}

function htmlToElement(html: string): HTMLElement {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return <HTMLElement>template.content.firstChild;
}