describe('Calendar', () => {
  it('Sélecteur de mois', () => {
    cy.visit('/');

    // sélectionne le mois de mars
    cy.get('select').select('2');

    cy.get('h2').contains('Mars 2020');
  });

  it('La matrice affiche six lignes pour le mois de mars', () => {
    cy.get('.line')
      .its('length')
      .then(lineLength => {
        expect(lineLength).to.eq(6);
      });
  });

  it('Le premier jour du mois de mars est un dimanche', () => {
    const id = '#06'; // 06 correspond à l'id du premier dimanche de la grille

    cy.get(id).contains('1');
  });

  it("La date qui s'affiche correspond à la case cliquée", () => {
    const id = '#32'; // 32 correspond au mercredi 18 mars 2020

    cy.get(id).click();

    cy.get('.formatted-date').contains('Mercredi 18 mars 2020');
  });

  it("Les dates qui s'affichent correspondent au jour de la semaine cliqué", () => {
    cy.get('.weekday-box').eq(2).click(); // l'indice 2 correspond au mercredi

    cy.get('ul').contains('Mercredi 4 mars 2020');
    cy.get('ul').contains('Mercredi 11 mars 2020');
    cy.get('ul').contains('Mercredi 18 mars 2020');
    cy.get('ul').contains('Mercredi 25 mars 2020');
  });
});