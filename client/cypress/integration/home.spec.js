describe('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    it('it is working', () => {
        expect(true).to.equal(true)
    })
    it('sea animals', () => {
        const animals = cy.get('h1');
        expect(true).to.equal(true)
    })
    it('education app', () => {
        const animals = cy.get('h2');
        expect(true).to.equal(true)
    })
});