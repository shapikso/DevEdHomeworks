describe('Find max', () => {
    it('Should find Max element ', () => {
        expect(findMax([3, 2,-10])).to.equal(3);
        expect(findMax([3,2,8,1,56,9,72,30,66,14,99,11,88,65,69,54,77,-10,-75,-69,-90,46,1,12,7,36,-12])).to.equal(99);
    })
})
describe('Find min', () => {
    it('Should find Min element ', () => {
        expect(findMin([3, 2,-10])).to.equal(-10);
        expect(findMin([3,2,8,1,56,9,72,30,66,14,99,11,88,65,69,54,77,-10,-75,-69,-90,46,1,12,7,36,-12])).to.equal(-90);
    })
})

describe('Find max element index', () => {
    it('Should find Max element index', () => {
        expect(findMaxIndex([3, 2,-10])).to.equal(0);
        expect(findMaxIndex([3,2,8,1,56,9,72,30,66,14,99,11,88,65,69,54,77,-10,-75,-69,-90,46,1,12,7,36,-12])).to.equal(10);
    })
})
describe('Find min element index', () => {
    it('Should find Min element index', () => {
        expect(findMinIndex([3, 2,-10])).to.equal(2);
        expect(findMinIndex([3,2,8,1,56,9,72,30,66,14,99,11,88,65,69,54,77,-10,-75,-69,-90,46,1,12,7,36,-12])).to.equal(20);
    })
})
describe('Reversed array', () => {
    it('Should reverse array', () => {
        expect(reversArr([3,2,8,1])).to.eql([1,8,2,3]);
        expect(reversArr([3,2,8])).to.eql([8,2,3]);
    })
})
describe('Swap the first and second half of the array', () => {
    it('Should swap', () => {
        expect(reversHalf([3, 2,-10])).to.eql([-10,3,2]);
        expect(reversHalf([3,2,8,1])).to.eql([8,1,3,2]);
    })
})