// import Slider from '../src/js/slider';
// const slide = new Slider();
describe('On HTML', function () {
    beforeAll(() => {
        document.body.innerHTML = `<div class="slider">
        <button id="prev" ><----</button>
        <div class="photos">
            <div class="item current" style="background-color: blue;">
                <img src="../src/img/1qksy123o9481.jpg">
            </div>
        
            <div class="item next" style="background-color: brown;">
                <img src="../src/img/74zqb76zu5481.jpg">
            </div>

            <div class="item hidden" style="background-color: rgb(42, 165, 69);">
                <img src="../src/img/dallyp7efa481.jpg">
            </div>

            <div class="item hidden" style="background-color: rgb(42, 136, 165);">
                <img src="../src/img/gplebi61fc481.jpg">
            </div>

            <div class="item hidden" style="background-color: rgb(165, 42, 118);">
                <img src="../src/img/ifgpvzdkeb481.jpg">
            </div>
            
            <div class="item hidden" style="background-color: brown;">
                <img src="../src/img/ouwf8gj0ab481.jpg">
            </div>
        
            <div class="item previous">
                <img src="../src/img/t2Mp1f2IrhwiABO0iKy8DSHeZo4XyyinCFgZQJSkXS0.jpg">
            </div>    
        </div>
        <button id="next">----></button>
    </div>
    <div class="play">
        <button id="start">Start</button>
        <button disabled class="disabled" id="stop">Stop</button>
    </div>`;
    require('../src/js/app');
    });

    it('should change picture on previous button', function () {
        const current = document.querySelector('.current')
        document.getElementById('next').click();
        expect(current.classList.contains('previous')).toBe(true);
    });

    it('should change picture on next button', function () {
        const current = document.querySelector('.current')
        document.getElementById('prev').click();
        expect(current.classList.contains('next')).toBe(true);
    });

    it('should hide picture', function () {
        const prev = document.querySelector('.previous');
        document.getElementById('next').click();
        expect(prev.classList.contains('hidden')).toBe(true);
        const next = document.querySelector('.next');
        document.getElementById('prev').click();
        expect(next.classList.contains('hidden')).toBe(true);
    });

});