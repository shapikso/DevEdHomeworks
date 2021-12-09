import {Slider} from '../src/js/slider';

describe('On HTML', function () {
    let slide;
    let current;
    let prev;
    let next;
    beforeAll(() => {
        document.body.innerHTML = `<div class="slider">
        <button id="prev" ><----</button>
        <div class="photos">
            <div class="item current" style="background-color: blue;">
                <img src="../src/img/1qksy123o9481.jpg">
            </div>
        
            <div class="item next" style="background-color: brown;">
                <img src="../src/img/74zqb76zu5481.jpg" id="picture">
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
    slide = new Slider();
    });
    beforeEach(() => {
        current = document.querySelector('.current');
        prev = document.querySelector('.previous');
        next = document.querySelector('.next');
    })

    it('should change picture on next button', function () {
        slide.nextButtonClick();
        expect(current.classList.contains('previous')).toBe(true);
    });

    it('should change picture on previous button', function () {
        slide.prevButtonClick();
        expect(current.classList.contains('next')).toBe(true);
    });

    it('should hide picture', function () {
        slide.nextButtonClick();;
        expect(prev.classList.contains('hidden')).toBe(true);
        next = document.querySelector('.next');
        slide.prevButtonClick();
        expect(next.classList.contains('hidden')).toBe(true);
    });
    
    it('should slide on timer', function () {
        jest.useFakeTimers();
        slide.startShowingPictures();
        jest.advanceTimersByTime(1000);
        expect(current.classList.contains('previous')).toBe(true);
        expect(prev.classList.contains('hidden')).toBe(true);
        expect(next.classList.contains('current')).toBe(true);

        jest.advanceTimersByTime(1000);
        expect(current.classList.contains('hidden')).toBe(true);
        expect(prev.classList.contains('hidden')).toBe(true);
        expect(next.classList.contains('previous')).toBe(true);
    });
});