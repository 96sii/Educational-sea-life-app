describe('Animals', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/animals');
    })

    it('it is working', () => {
        expect(true).to.equal(true)
    })

});