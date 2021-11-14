describe('On Multiplication or sum', () => {
    it('should multiply two numbers ', () => {
        expect(binary(6, 2)).to.equal(12);
        expect(binary(4, 10)).to.equal(40);
    })
    it('should sum of two numbers ', () => {
        expect(binary(3, 2)).to.equal(5);
        expect(binary(1, 2)).to.equal(3);
    })
})
describe('Shows quarter', () => {
    it('It shows first quarter ', () => {
        expect(axis(5, 2)).to.equal('Первая четверть');
        expect(axis(1, 1)).to.equal('Первая четверть');
        expect(axis(10, 20)).to.equal('Первая четверть');
    })
    it('It shows second quarter ', () => {
        expect(axis(-5, 1)).to.equal('Вторая четверть');
        expect(axis(-16, 3)).to.equal('Вторая четверть');
        expect(axis(-99, 99)).to.equal('Вторая четверть');
        
    })
    it('It shows third quarter ', () => {
        expect(axis(-15, -2)).to.equal('Третья четверть');
        expect(axis(-1, -1)).to.equal('Третья четверть');
        expect(axis(-10, -20)).to.equal('Третья четверть');
    })
    it('It shows forth quarter ', () => {
        expect(axis(99, -10)).to.equal('Четвертая четверть');
        expect(axis(5, -2)).to.equal('Четвертая четверть');
        expect(axis(12, -20)).to.equal('Четвертая четверть');
    })
    
})
describe('Sum positive', () => {
    it('Has only positive elements ', () => {
        expect(sumPositive(3, 2, 3)).to.equal(8);
        expect(sumPositive(32, 20,10)).to.equal(62);
        expect(sumPositive(3, 2,10)).to.equal(15);
    })
    it('Has some negative elements ' , () => {
        expect(sumPositive(3, -2,-10)).to.equal(3);
        expect(sumPositive(3, 2,-10)).to.equal(5);
    })
    it('Has only negative elements ', () => {
        expect(sumPositive(-7, -20,-100)).to.equal(0);
        expect(sumPositive(-3, -2,-10)).to.equal(0);
    })
})
describe('Sum or multiplication', () => {
    it('Sum of elements bigger than multiplication ', () => {
        expect(sumMultMax(3, 2,-10)).to.equal(-2);
        expect(sumMultMax(-3, -2,-10)).to.equal(-12);
    })
    it('Multiplication of elements bigger than sum ', () => {
        expect(sumMultMax(3, -2,-10)).to.equal(63);
        expect(sumMultMax(3, 3,10)).to.equal(93);
        
    })
})
describe('Sum or multiplication', () => {
    it('Sum of elements bigger than multiplication ', () => {
        expect(sumMultMax(3, 2,-10)).to.equal(-2);
        expect(sumMultMax(-3, -2,-10)).to.equal(-12);
    })
    it('Multiplication of elements bigger than sum ', () => {
        expect(sumMultMax(3, -2,-10)).to.equal(63);
        expect(sumMultMax(3, 3,10)).to.equal(93);
        
    })
})
describe('Show mark', () => {
    it('Mark E ', () => {
        expect(mark(20)).to.equal('E');
        expect(mark(39)).to.equal('E');
    })
    it('Mark D ', () => {
        expect(mark(40)).to.equal('D');
        expect(mark(59)).to.equal('D');
    })
    it('Mark C ', () => {
        expect(mark(60)).to.equal('C');
        expect(mark(74)).to.equal('C');
    })
    it('Mark B ', () => {
        expect(mark(75)).to.equal('B');
        expect(mark(89)).to.equal('B');
    })
    it('Mark A ', () => {
        expect(mark(100)).to.equal('A');
        expect(mark(92)).to.equal('A');
    })
    it('Mark F ', () => {
        expect(mark(19)).to.equal('F');
        expect(mark(8)).to.equal('F');
    })
})
