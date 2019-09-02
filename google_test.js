
Feature('Google');

const googlePage = require('./pages/google_page');

Scenario('Pesquisar algo', (I) => {
    I.amOnPage('/');
    googlePage.pesquisa_algo('Codecept.js');
    I.see('Codecept')
});
