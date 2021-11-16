describe('Animal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/quiz');
    })

    it('it is working', () => {
        expect(true).to.equal(true)
    })

    it('should have click reset quiz button', () => {
        for (let i= 1; i < 9; i++) {
            cy.get('#button1').click()
        }
        cy.get('#reset-button').should('contain', 'Reset'); 
    
    })
    });