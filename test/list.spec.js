const list = Object.create(listFunctions);
// console.log(list);

// list.addToList('first element');
// list.addToList('second element');
// list.addToList('third element');
// console.log(list.deleteElement('first element'));
// console.log(list.findSize());
// console.log(list.findById(2));
// console.log(list.findIdByvalue('first element'));
// list.addToList(['forth element','fifth element']);
// console.log(list)
describe('index.html', () => {

         let count = toList.childElementCount;
         it("Should add head element", () => {
            list.addToList('head');
            ++count;
             expect(toList.childElementCount).to.equal(count+1);
         })
         it("should add elements", () => {
            list.addToList('1');
            ++count;
            expect(toList.childElementCount).to.equal(count+1);
            list.addToList('2');
             ++count;
            expect(toList.childElementCount).to.equal(count+1);
            list.addToList('3');
              ++count;
            expect(toList.childElementCount).to.equal(count+1);
               list.addToList();
               ++count;
            expect(toList.childElementCount).to.equal(count+1);
         })
     it("Should delete elements", () => {
        expect(list.deleteElement('1')).to.equal(true);
        --count;
        expect(toList.childElementCount).to.equal(count+1);
        expect(list.deleteElement('2')).to.equal(true);
         --count;
        expect(toList.childElementCount).to.equal(count+1);
     })
     it("Should delete last elements", () => {
        expect(list.deleteLast()).to.equal(true);
        --count;
        expect(toList.childElementCount).to.equal(count+1);
     })
     it("Should show size of list", () => {
        expect(list.findSize()).to.equal(count+1);
     })
     it("Should show value by id in list", () => {
        expect(list.findById(2)).to.equal(-1);
        expect(list.findById(1)).to.equal('3');
     })
     it("Should add by array", () => {
        list.addToList(['4','5','6','7']);
        count = count + 4;
        expect(toList.childElementCount).to.equal(count+1);
     })
//list.findIdByvalue('first element')
 })