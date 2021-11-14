describe('How long do you need to cook eggs', () => {
    it('should show how much time you need to cook egs ', () => {
        expect(getCookingTime(9)).to.equal(10);
        expect(getCookingTime(0)).to.equal(0);
        expect(getCookingTime(5)).to.equal(5);
        expect(getCookingTime(11)).to.equal(15);
    })
})

describe('Find odd or even', () => {
    it('Should find odd', () => {
        expect(getNumber([0, 12, 8, -4, 0, -122, 15, -4, 28, 12])).to.equal(15);
        expect(getNumber([0, 1, 8, -4, 0, -122, 16, -4, 28, 12])).to.equal(1);
    })
    it('Should find even', () => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal(4);
        expect(getNumber([1, 5, 7, 9, 15, 19, 8, -15, -11, 9, 9, 23, -17])).to.equal(8);
    })
})

describe('Filter array ', () => {
    it('Should filter object', () => {
        expect(findTitle([{title: 'Some title1'},
        {title:'I like JS'},
        {user: 'This obj doesn\’t have key title js'},
        {title: 'Js - is the best!'}], 'js')).to.eql([{title:'I like JS'},{title: 'Js - is the best!'}]);
        expect(findTitle([{title: 'Test 1'},{title: 'Test 2'},{key: 'Test 1'}], 'test')).to.eql([{title: 'Test 1'},{title: 'Test 2'}]);
        expect(findTitle([{title: 'do not have this word'},{title: 'Try me'},{key: 'Try'}], 'try')).to.eql([{title: 'Try me'}]);
    })
    it('Should return empty array', () => {
        expect(findTitle([{title: 'Test 1'},{title: 'Test 2'},{key: 'Test 1'}], 'tester')).to.eql([]);
        expect(findTitle([{Key: 'do not have this word'},{Key: 'Try me'},{key: 'Try'}], 'try')).to.eql([]);
    })
})

describe('Keys are string characters, value is the number of repetitions of characters inline', () => {
    it('Should return full object', () => {
        expect(countCharacters('ssparrow')).to.eql({s:2,p:1,a:1,r:2,o:1,w:1});
        expect(countCharacters('kekktto')).to.eql({k:3,e:1,o:1,t:2});
    })
    it('Should return some of them', () => {
        expect(countCharacters('a 2ab !d')).to.eql({a:2,2:1,b:1,d:1});
        expect(countCharacters('d=+-/a ghh')).to.eql({d:1,a:1,g:1,h:2});
    })
    it('Should return empty object', () => {
        expect(countCharacters('*-+/- !')).to.eql({});
        expect(countCharacters('    /*-+-*/=-=_  ')).to.eql({});
    })
})

describe('Find Palindrome', () => {
    it('Should find nex palindrome', () => {
        expect(getNextPalindrome(102)).to.equal(111);
        expect(getNextPalindrome(90)).to.equal(99);
        expect(getNextPalindrome(999)).to.equal(1001);
        expect(getNextPalindrome(33)).to.equal(44); //getNextPalindrome(132)
        expect(getNextPalindrome(133)).to.equal(141);
        expect(getNextPalindrome(7)).to.equal(11);
    })
})

describe('Create a Set data structure', () => {
    it('Should add "add" function', () => {
        expect(set.add(102)).to.eql({0:102,1:'str'});
        expect(set.add(103)).to.eql({0:102,1:'str',2:103});
        expect(set.add({a: 123,b:123})).to.eql({0:102,1:'str',2:103,3:{a: 123,b:123}});
    })
    it('Should add "has" function', () => {
        expect(set.has(102)).to.equal(true);
        expect(set.has(103)).to.equal(true);
        expect(set.has(10111)).to.equal(false);
        expect(set.has()).to.equal(false);
        expect(set.has('str')).to.equal(true);
    })
    it('Should add "delete" function', () => {
        expect(set.delete(103)).to.eql({0:102,1:'str',3:{a: 123,b:123}});
        expect(set.delete('str')).to.eql({0:102,3:{a: 123,b:123}});
    })
})