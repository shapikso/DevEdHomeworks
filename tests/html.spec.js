const {addPhoto, showBigImgClick, showPhotos} = require('../src/js/showPhotos')
describe("dom testing", () => {
  let elem;
  let count;
  let galery;
  let zoomIn;
  let bigImg
  beforeAll(function () {
    document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./styles.css">
        <title></title>
    </head>
    <body>
        <div class="form">
            <div class="zoomIn hidden">
                <img src="https://via.placeholder.com/600/24f355" width="600" height="600" class="bigImg">
                <span class="delete-btn pointer">✘</span>
            </div>
            <div class="galery" id="gal">
            </div>
            <div class="pages">
                <ul>
                    <li class="pointer" id="firstPage">1</li>
                    <li class="pointer" id="secondPage">2</li>
                    <li class="pointer" id="thirdPage">3</li>
                    <li class="pointer" id="fourthPage">4</li>
                    <li class="pointer" id="fifthdPage">5</li>
                </ul>
            </div>
        </div>    
        <div type="text/template" id="taskItemTemplate">
            <div class="picture" id = "{{id}}">
                <img src="{{title}}">
            </div>
        </div>
    </body>
    </html>`;
    galery = document.querySelector('.galery');
    count = galery.childElementCount;
    zoomIn = document.querySelector('.zoomIn');
    bigImg = document.querySelector('.bigImg');
    elem = {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
  });
  it("should return data", () => {
     showPhotos(0,20)
    expect(galery.childElementCount>0).toEqual(true);
  });

  it("should add new photo", () => {
    addPhoto(elem);
    expect(galery.childElementCount).toEqual(++count);
  });
  it("should show big photo", () => {
    showBigImgClick(elem.url);
    expect(zoomIn.classList).toEqual('zoomIn');
    expect(bigImg.src).toEqual(elem.url);
  });
});
