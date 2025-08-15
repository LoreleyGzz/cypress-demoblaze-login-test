describe('Flujo de compra en DemoBlaze', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Debería seleccionar un producto, añadirlo y verificarlo en el carrito', () => {
    cy.contains('Laptops').click();
    cy.wait(1000);
    cy.get('.hrefch').first().click();
    cy.wait(1000);

    // Guardamos el nombre del producto en una variable
    cy.get('.name').invoke('text').as('productName'); 

    cy.get('.price-container').should('be.visible');
    cy.contains('Add to cart').click();

    cy.get('#cartur').click();
    cy.wait(1000);

    // Verificamos que el producto en el carrito es el que guardamos
    cy.get('@productName').then((productName) => {
      cy.get('.success > :nth-child(2)').should('contain.text', productName);
    });
  });

});