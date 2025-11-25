const BaseModel = require('./BaseModel');

class Autor extends BaseModel {
  constructor({ id, nome, nacionalidade }) {
    super(id);
    this.nome = nome;
    this.nacionalidade = nacionalidade;
  }
}

module.exports = Autor;
