describe('Can Vasya sell each ticket and give change?', () => {
    it('Should say yes ', () => {
        expect(tickets([25,50])).to.equal('YES');
        expect(tickets([25,50,25,100])).to.equal('YES');
        expect(tickets([25,25,25,25,100])).to.equal('YES');
        expect(tickets([25,25,25,25,100,125])).to.equal('YES');
        expect(tickets([25,25,25,75])).to.equal('YES');
        expect(tickets([25,50,75])).to.equal('YES');
    })
    it('Should say no ', () => {
        expect(tickets([50])).to.equal('NO');
        expect(tickets([26])).to.equal('NO');
        expect(tickets([25,50,100])).to.equal('NO');
        expect(tickets([25,50,13,100])).to.equal('NO');
        expect(tickets([25,50,100])).to.equal('NO');
        expect(tickets([25,75,100])).to.equal('NO');
    })
})

describe('Sum of two numbers', () => {
    it('Should sum', () => {
        expect(getSum('1','123')).to.equal('124');
        expect(getSum('10','123')).to.equal('133');
        expect(getSum('1000000000000000000000000000000000000000000000000000000000','1')).to.equal('1000000000000000000000000000000000000000000000000000000001');
        expect(getSum('666','1230000000000000000000000000000000000000000000000000000000000000000000')).to.equal('1230000000000000000000000000000000000000000000000000000000000000000666');
    })
  
})
const listOfPosts = [
    {
    id: 1,
    post:'some post1',
    title: 'title 1',
    author:'Ivanov',
    comments: [
    {id: 1.1,
    comment: 'some comment1',
    title: 'title',
    author: 'Rimus'},
    {id: 1.2,
    comment: 'some comment2',
    title: 'title' ,
    author: 'Uncle'}]
    },
    {
    id: 2,
    post: 'some post2',
    title: 'title',
    author: 'Ivanov',
    comments: [
    {
    id: 1.1,
    comment: 'some comment1',
    title: 'title 1',
    author: 'Rimus'
    },
    {
    
    id: 1.2,
    comment:'some comment2',
    title: 'title 2',
    author: 'Uncle'
    },
    {
    id: 1.3,
    comment: 'some comment3',
    title: 'title 3',
    author: 'Rimus'
    }
    ]
    },
    {
    id: 3,
    post: 'some post3',
    title:'title 3',
    author: 'Rimus'
    },
    {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle'
    }
    ]
    //getQuntityPostsByAuthor
    describe('Show  count of coments an posts', () => {
        it('Should show count of posts and coments', () => {
            expect(getQuntityPostsByAuthor(listOfPosts,'')).to.equal('post – 0, comments – 0');
            expect(getQuntityPostsByAuthor(listOfPosts,'Uncle')).to.equal('post – 1, comments – 2');
            expect(getQuntityPostsByAuthor(listOfPosts,'Rimus')).to.equal('post – 1, comments – 3');
        })
      
    })
      describe('Show  count of coments an posts', () => {
        const cachedFunc = cache(complexFunction)
        it('Function should be done', () => {
            expect(cachedFunc('foo', 'bar')).to.equal(true);
            expect(cachedFunc('foo', 'baz')).to.equal(true);
            expect(cachedFunc('He', 'llo')).to.equal(true);
            expect(cachedFunc('He', 'll')).to.equal(true);
        })
        it('Should return cache', () => {
            expect(cachedFunc('foo', 'bar')).to.equal('foobar');
            expect(cachedFunc('foo', 'baz')).to.equal('foobaz');
            expect(cachedFunc('He', 'llo')).to.equal('Hello');
        })
      
    })
      