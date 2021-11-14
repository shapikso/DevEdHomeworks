describe('Name of the day of the week by day number', () => {
    it('Monday', () => {
        expect(getDayName(1)).to.equal('Понедельник');
    })
    it('Thuesday', () => {
        expect(getDayName(2)).to.equal('Вторник');
    })
    it('Wednesday', () => {
        expect(getDayName(3)).to.equal('Среда');
    })
    it('Thursday', () => {
        expect(getDayName(4)).to.equal('Четверг');
    })
    it('Friday', () => {
        expect(getDayName(5)).to.equal('Пятница');
    })
    it('Saturday', () => {
        expect(getDayName(6)).to.equal('Суббота');
    })
    it('Sunday', () => {
        expect(getDayName(7)).to.equal('Воскресение');
    })
    it('Error', () => {
        expect(getDayName(123)).to.equal('Нет такого дня');
        expect(getDayName('acq')).to.equal('Нет такого дня');
    })
})
describe('Find the distance between two points in 2D cartesian space', () => {
    it('should find distance ', () => {
        expect(getDistance(3, 5, 4,7)).to.equal('2.24');
        expect(getDistance(2, 4, 9, 2)).to.equal('7.28');
    })
    
})
describe('Get a string from number', () => {
    it('should write single digit ', () => {
        expect(toWords(0)).to.equal('ноль');
        expect(toWords(1)).to.equal('один');
        expect(toWords(6)).to.equal('шесть');
    })
    it('should write double digit ', () => {
        expect(toWords(12)).to.equal('двенадцать');
        expect(toWords(45)).to.equal('сорок пять');
        expect(toWords(99)).to.equal('девяносто девять');
        expect(toWords(50)).to.equal('пятдесят ');
    })
    it('should write triple digit ', () => {
        expect(toWords(117)).to.equal('сто семнадцать');
        expect(toWords(256)).to.equal('двести пятдесят шесть');
        expect(toWords(397)).to.equal('триста девяносто семь');
        expect(toWords(777)).to.equal('семьсот семдесят семь');
        expect(toWords(999)).to.equal('девятьсот девяносто девять');
    })
})
describe('Get a number from string', () => {
    it('should write single digit ', () => {
        expect(toNumber('ноль')).to.equal(0);
        expect(toNumber('один')).to.equal(1);
        expect(toNumber('шесть')).to.equal(6);
    })
    it('should write double digit ', () => {
        expect(toNumber('двенадцать')).to.equal(12);
        expect(toNumber('сорок пять')).to.equal(45);
        expect(toNumber('девяносто девять')).to.equal(99);
        expect(toNumber('пятдесят пять')).to.equal(55);
    })
    it('should write triple digit ', () => {
        expect(toNumber('сто семнадцать')).to.equal(117);
        expect(toNumber('двести пятдесят шесть')).to.equal(256);
        expect(toNumber('триста девяносто семь')).to.equal(397);
        expect(toNumber('семьсот семдесят семь')).to.equal(777);
        expect(toNumber('девятьсот девяносто девять')).to.equal(999);
    })
})