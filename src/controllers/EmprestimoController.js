const CrudController = require('./CrudController');

class EmprestimoController extends CrudController {
  constructor(repository, exemplarRepository) {
    super(repository);
    this.exemplarRepository = exemplarRepository;
  }

  criarEmprestimo = (req, res) => {
    const exemplar = this.exemplarRepository.findById(req.body.idExemplar);
    if (!exemplar) return res.status(400).json({ message: 'Exemplar não existe' });
    if (exemplar.status === 'emprestado') return res.status(400).json({ message: 'Exemplar já emprestado' });

    exemplar.status = 'emprestado';
    const emprestimo = this.repository.create({
      ...req.body,
      dataEmprestimo: req.body.dataEmprestimo || new Date().toISOString().substring(0, 10),
    });
    res.status(201).json(emprestimo);
  };

  devolver = (req, res) => {
    const emprestimo = this.repository.findById(req.params.id);
    if (!emprestimo) return res.status(404).json({ message: 'Empréstimo não encontrado' });

    emprestimo.marcarDevolvido();
    const exemplar = this.exemplarRepository.findById(emprestimo.idExemplar);
    if (exemplar) exemplar.status = 'disponivel';

    res.json(emprestimo);
  };
}

module.exports = EmprestimoController;
