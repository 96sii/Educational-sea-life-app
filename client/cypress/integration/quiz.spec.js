describe('Animal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/quiz');
    })

    it('it is working', () => {
        expect(true).to.equal(true)
    })

    });