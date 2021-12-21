import '../styles.css';
import "babel-core/register";
import "babel-polyfill";
import { dom } from './constants';
import {showPhotos} from './showPhotos'

dom.pages.addEventListener('click',startShowing)

dom.delBnt.addEventListener('click',() =>{
    dom.zoomIn.classList.add('hidden');
})

export function makeActive(element:HTMLElement) {
    document.querySelectorAll('.pages .activepage').forEach(n => n.classList.remove('activepage'));
    element.classList.add('activepage');
}

function startShowing( event: MouseEvent) {
    dom.galery.innerHTML = ' ';
    makeActive(<HTMLElement>event.target);
    showPhotos(+(<HTMLElement>event.target).innerText * 20, +(<HTMLElement>event.target).innerText * 20 + 20)
}

dom.firstPage.click();