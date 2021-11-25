const jsdom = require('jsdom');
const {axiosTest, addPhoto, showBigImgClick} = require('../src/app.js')
const { JSDOM } = jsdom;

describe("dom testing", () => {
  let elem;
  let count;
  let galery;
  let zoomIn;
  let bigImg
  beforeAll(function () {
    elem = {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
  return JSDOM.fromFile("src/index.html").then((dom) => {
    galery = dom.window.document.querySelector('.galery');
    count = galery.childElementCount;
    zoomIn = dom.window.document.querySelector('.zoomIn');
    bigImg = dom.window.document.querySelector('.bigImg');
  });
  });
  it("should return data", () => {
    expect(axiosTest(0,20)).not.toBe(undefined);
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