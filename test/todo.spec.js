describe('index.html', () => {

   describe("Level 1 heading", () => {
        let count = toList.childElementCount
        it("Add new element'", () => {
            addClick();
            expect(toList.childElementCount).to.equal(++count);
        })
    })
})