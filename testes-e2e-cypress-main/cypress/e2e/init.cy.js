describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Deve renderizar corretamente o h1 com o texto adequado', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
