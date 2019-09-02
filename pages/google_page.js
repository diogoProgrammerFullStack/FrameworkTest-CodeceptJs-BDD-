const I = actor();

module.exports = {

  // insert your locators and methods here
  fields:{
    campo_pesquisa: '#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input'
  },

  pesquisa_algo(txt){
    I.fillField(this.fields.campo_pesquisa, txt);
    I.pressKey('Enter')
    I.wait(5);
  }
}
