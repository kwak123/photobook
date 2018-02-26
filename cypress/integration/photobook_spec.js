describe('Photobook', () => {
  it('Loads!', () => {
    cy.visit('/');

    cy.get('.profile__container');
    cy.get('.userinfo__container');
    cy.get('.photolist__container');
    cy.get('.photodetail__container');
  });

  it('should be able to update photo title', () => {
    cy.get('.photodetail__inner--title')
      .click()
      .type('{selectall}{backspace}')
      .type('Cypress test!');
    
    cy.get('.photodetail__inner--title').contains('Cypress test!');
  });

  it('should be able to update photo description', () => {
    cy.get('.photodetail__inner--description')
      .click()
      .type('{selectall}{backspace}')
      .type('Cypress description test!');
    
    cy.get('.photodetail__inner--description').contains('Cypress description test!');
  });

  it('should be able to change rating', () => {
    cy.get('.rating__container--star').each(($el, idx) => {
      cy.wrap($el).click();
      cy.get('.rating__container--star.checked').should(($p) => {
        expect($p).to.have.length(5 - idx);
      });
    });
  });
});