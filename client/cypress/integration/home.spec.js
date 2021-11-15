describe('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('it is working', () => {
        expect(true).to.equal(true)
    })

});