class CrudController {
  constructor(repository) {
    this.repository = repository;
  }

  list = (req, res) => {
    res.json(this.repository.list());
  };

  getById = (req, res) => {
    const entity = this.repository.findById(req.params.id);
    if (!entity) return res.status(404).json({ message: 'Não encontrado' });
    res.json(entity);
  };

  create = (req, res) => {
    const entity = this.repository.create(req.body);
    res.status(201).json(entity);
  };

  update = (req, res) => {
    const entity = this.repository.update(req.params.id, req.body);
    if (!entity) return res.status(404).json({ message: 'Não encontrado' });
    res.json(entity);
  };

  delete = (req, res) => {
    const deleted = this.repository.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Não encontrado' });
    res.status(204).end();
  };
}

module.exports = CrudController;
