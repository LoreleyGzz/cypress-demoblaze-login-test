describe('Pruebas Avanzadas con API en DemoBlaze', () => {
  
  it('Debería interceptar la carga de productos de una categoría y verificar la respuesta', () => {
    // Definimos el endpoint que se activa al hacer clic en una categoría
    const categoryURL = 'https://api.demoblaze.com/bycat';

    // Interceptamos la petición POST a esa URL y le damos un alias
    cy.intercept('POST', categoryURL).as('getCategoryProducts');
    
    // Visitamos la página
    cy.visit('https://www.demoblaze.com/');
    
    // HACEMOS CLIC en la categoría para FORZAR la petición de red
    cy.contains('Laptops').click();
    
    // Ahora esperamos a que la petición que forzamos se complete
    // y verificamos su respuesta.
    cy.wait('@getCategoryProducts').its('response.statusCode').should('eq', 200);
  });
  
});