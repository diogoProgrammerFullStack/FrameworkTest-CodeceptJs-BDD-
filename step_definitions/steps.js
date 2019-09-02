
const googlePage = require('../pages/google_page');

const I = actor();

When('pesquiso algo no google', () => {
  I.amOnPage('/')
  googlePage.pesquisa_algo('CodeCeptJs');
});

Then('vejo algo no resultado da Pesquisa', () => {
  I.see('CodeCept');
});
