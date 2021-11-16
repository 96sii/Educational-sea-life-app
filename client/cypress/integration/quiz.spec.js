describe('Animal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/quiz');
    })

    it('it is working', () => {
        expect(true).to.equal(true)
    })

    it('should have clicked all quiz buttons', () => {
        for (let i= 1; i < 9; i++) {
            cy.get('#button1').click()
        }
    })

    it('reset button can be clicked', () => {
        for (let i = 1; i < 9; i++) {
            cy.get('#button1').click()
    }
        cy.get('#reset-button').click()
    })
    });