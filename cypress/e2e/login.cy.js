describe('Pruebas del Login en DemoBlaze', () => {
  
  it('Debería completar el flujo de login exitosamente', () => {
    
    cy.visit('https://www.demoblaze.com/');
    
    // Abre la ventana de login
    cy.get('#login2').click();
    cy.wait(500);
    
    // Rellena el formulario con tus datos VÁLIDOS
    cy.get('#loginusername').type('mi-test-robot-123'); // <-- CAMBIA ESTO
    cy.get('#loginpassword').type('pass1234'); // <-- Y ESTO
    
    // Hacer clic en el botón de "Log in" del formulario
    cy.get('#logInModal .btn-primary').click();
    
    // Verificación: Ahora SÍ debería estar visible
    cy.get('#nameofuser').should('be.visible');
    
  });
  
});