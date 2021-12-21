
export const dom = {
    galery : <HTMLElement>document.querySelector('.galery'),
    firstPage : <HTMLElement>document.getElementById('firstPage'),
    secondPage : <HTMLElement>document.getElementById('secondPage'),
    thirdPage : <HTMLElement>document.getElementById('thirdPage'),
    fourthPage : <HTMLElement>document.getElementById('fourthPage'),
    fifthPage : <HTMLElement>document.getElementById('fifthdPage'),
    bigImg : <HTMLImageElement>document.querySelector('.bigImg'),
    zoomIn : <HTMLElement>document.querySelector('.zoomIn'),
    pages : <HTMLElement>document.querySelector('.pages'),
    delBnt : <HTMLElement>document.querySelector('.delete-btn'),
    taskItemTemplate : (<HTMLElement>document.getElementById('taskItemTemplate')).innerHTML
}

export const URL = 'https://jsonplaceholder.typicode.com/photos';
