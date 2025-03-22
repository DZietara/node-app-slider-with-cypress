describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation Test', function () {
  it('Allows user to navigate slides using next and previous buttons', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'London');

    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Description Test', function () {
  it('Verifies each slide displays the correct title and description', function () {
    cy.visit('http://localhost:3000');

    // Rome
    cy.get('.swiper-slide-active')
      .should('contain', 'Rome')
      .and('contain', 'Italy');

    // London
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active')
      .should('contain', 'London')
      .and('contain', 'United Kingdom');

    // Paris
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active')
      .should('contain', 'Paris')
      .and('contain', 'France');
  });
});
