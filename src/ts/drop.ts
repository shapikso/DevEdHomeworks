
let dragged : HTMLElement;

export const targetingElement = (event : DragEvent) : void => {  
    dragged = <HTMLElement>event.target;
    (<HTMLElement>event.target).classList.toggle('halfVision');
}

export const activeLine = (event : DragEvent) : void => {
    if ( (<HTMLElement>event.target).classList.contains('status') ) {
        (<HTMLElement>event.target).classList.toggle('target');
    }
}

export const removeOpasity = (event : DragEvent) : void => {
    (<HTMLElement>event.target).classList.toggle('halfVision');
}

export const dropTask = (event : DragEvent) : void => {
    event.preventDefault();
    if ( (<HTMLElement>event.target).classList.contains('status') ) {
        (<HTMLElement>event.target).classList.remove('target');
        (<HTMLElement>dragged.parentNode).removeChild(dragged);
        (<HTMLElement>event.target).appendChild(dragged);
    }
}