describe('Find the sum of even numbers and their number in the range from 1 to 99', () => {
    it('should sum and count ', () => {
        expect(sumBinary()).to.eql([2450,49]);
    })
})
describe('Check if a prime number', () => {
    it('should prime number ', () => {
        expect(isPrimeNumber(17)).to.equal(true);
        expect(isPrimeNumber(41)).to.equal(true);
    })
    it('shouldn`t prime number ', () => {
        expect(isPrimeNumber(4)).to.equal(false);
        expect(isPrimeNumber(16)).to.equal(false);
    })
})
describe('Calculate the factorial of a number', () => {
    it('should find factorial ', () => {
        expect(findFactorial(5)).to.equal(120);
        expect(findFactorial(7)).to.equal(5040);
    })
})
describe('Calculate the sum of the digits of a given number', () => {
    it('should find sum ', () => {
        expect(numberSum(123)).to.equal(6);
        expect(numberSum(257)).to.equal(14);
    })
})
describe('Reverse number', () => {
    it('should reverse number ', () => {
        expect(numberMirror(123)).to.equal('321');
        expect(numberMirror(257)).to.equal('752');
    })
})
describe('Find Sqrt', () => {
    it('should show sqrt ', () => {
        expect(findSqrt(81)).to.eql({consistentSelection: Math.trunc(Math.sqrt(81)),binaryMethod: Math.trunc(Math.sqrt(81))});
        expect(findSqrt(9)).to.eql({consistentSelection:Math.sqrt(9),binaryMethod: Math.sqrt(9)});
    })
})