describe('Jornadas de usuário', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Deve permitir que a pessoa ac esse a aplicação, realize uma transação e faça um logout', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByData('botao-sair').click();

    cy.location('pathname').should('eq', '/');
  });
  it('Deve ser possível que a pessoa realize um cadastro, logue na aplicação e deve se encontrar na página home', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Tay tay swift');
    cy.getByData('email-input').type('tay123@email.com');
    cy.getByData('senha-input').type('1234567128');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');

    cy.location('pathname').should('eq', '/');

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('tay123@email.com');
    cy.getByData('senha-input').type('1234567128');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');
  });
});

//Existem duas formas de executar os testes com o cypress, através da sua ui com o comando: npx cypress open ou a forma como é chamadad de "cypress sem cabeça" onde vc executa no próprio termial
//Se você quiser, o cypress grava um vídeo para cada arquivo de test ao executar o comando cypress run. Os vídeos não são gravados com o cypress open, apenas com cypress run e para fazer isso, é necessário adicionar nas configurações do cypress: vide: true. simples.
//Outro recurso muito importante do cypress é a possíbilidade de selecionar o navegador para o qual os testes irão ser executados. Na Ui isso é muito simples e aparece de cara quando você abre, já o comando cypress run, é preciso digitar a flag -- browser seguido do nome do navegador que você deseja.
//Também é possível especficar o navegador no arquivo spec da seguinte forma:  it('Deve conseguir acessar a página de cartões', {browser: 'firefox'}, () => {
