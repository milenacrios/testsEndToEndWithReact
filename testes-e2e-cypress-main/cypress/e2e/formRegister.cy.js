describe('Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Tay tay');
    cy.getByData('email-input').type('tay@email.com');
    cy.getByData('senha-input').type('12345678');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });
  it('Não deve permitir um campo em branco', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('email-input').type('taylorswiftgatinhoa13@gmail.com');
    cy.getByData('senha-input').type('taylor123');
    cy.getByData('checkbox-input').click();
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo de nome é obrigatório');
  });
});
