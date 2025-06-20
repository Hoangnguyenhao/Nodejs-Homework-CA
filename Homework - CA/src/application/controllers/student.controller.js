class StudentController {
  constructor({ uc }) { this.uc = uc; }
  async create(req, res) { res.status(201).json(await this.uc.create(req.body)); }
  async getAll(req, res) { res.json(await this.uc.getAll()); }
  async getById(req, res) { res.json(await this.uc.getById(req.params.id)); }
  async update(req, res) { res.json(await this.uc.update(req.params.id, req.body)); }
  async delete(req, res) { await this.uc.delete(req.params.id); res.status(204).end(); }
}
module.exports = StudentController;
