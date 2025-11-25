const BaseModel = require('./BaseModel');

class Livro extends BaseModel {
  constructor({ id, titulo, edicao, anoPublicacao, idCategoria }) {
    super(id);
    this.titulo = titulo;
    this.edicao = edicao;
    this.anoPublicacao = anoPublicacao;
    this.idCategoria = idCategoria;
  }
}

module.exports = Livro;
