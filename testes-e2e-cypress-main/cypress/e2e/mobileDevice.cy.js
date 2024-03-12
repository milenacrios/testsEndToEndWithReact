describe('Testando dispositivos móveis', () => {
  //Precisamos definir o tamanho do dispositivo para o cypress executar componentes que são diferentes para cada tamanho de tela
  //Para isso, é preciso executar o comando semelhante a: npx cypress open --config viewportWidth=375,viewport Height=667
  // ou apenas usar cy.viewport(375, 667);
  it('Deve existir um burger icon button na versão mobile', () => {
    cy.viewport(375, 667);
    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('menu-burguer').click();
    cy.getByData('menu-lateral').find('a').eq(3).click();

    cy.location('pathname').should('eq', '/home/investimentos');
  });
  it('Deve existir um burger icon button na versão do iphone xR', () => {
    cy.viewport('iphone-xr');
    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('menu-burguer').click();
    cy.getByData('menu-lateral').find('a').eq(2).click();

    cy.location('pathname').should('eq', '/home/servicos');
  });
  it('Não deve ser possível visualizar o burger icon button no macbook 13', () => {
    cy.viewport('macbook-13');

    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('menu-burguer').should('not.be.visible');
  });
});
