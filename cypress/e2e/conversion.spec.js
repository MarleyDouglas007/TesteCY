// cypress/integration/conversion.spec.js

describe('Distance Conversion Application', () => {
  beforeEach(() => {
    cy.visit('https://distance-converter-chi.vercel.app/'); // Certifique-se de que sua aplicação está rodando nesta URL
  });

  it('should display the conversion app with a title', () => {
    cy.contains('h1', 'Conversor de Distâncias').should('be.visible');
  });

  it('should convert meters to feet correctly', () => {
    cy.get('input[placeholder="Digite o valor em metros"]').clear().type('1');
    cy.get('input[placeholder="Digite o valor em pés"]').should('have.value', '3.28');
  });

  it('should convert feet to meters correctly', () => {
    cy.get('input[placeholder="Digite o valor em pés"]').clear().type('3.28084');
    cy.get('input[placeholder="Digite o valor em metros"]').should('have.value', '1.00');
  });

  it('should handle empty input for meters', () => {
    cy.get('input[placeholder="Digite o valor em metros"]').clear();
    cy.get('input[placeholder="Digite o valor em pés"]').should('have.value', '');
  });

  it('should handle empty input for feet', () => {
    cy.get('input[placeholder="Digite o valor em pés"]').clear();
    cy.get('input[placeholder="Digite o valor em metros"]').should('have.value', '');
  });

  it('should update conversion when meters input changes', () => {
    cy.get('input[placeholder="Digite o valor em metros"]').clear().type('2');
    cy.get('input[placeholder="Digite o valor em pés"]').should('have.value', '6.56');
  });

  it('should update conversion when feet input changes', () => {
    cy.get('input[placeholder="Digite o valor em pés"]').clear().type('6.56168');
    cy.get('input[placeholder="Digite o valor em metros"]').should('have.value', '2.00');
  });
});
