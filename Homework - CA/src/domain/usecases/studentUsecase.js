class StudentUsecase {
  constructor({ studentRepo }) { this.studentRepo = studentRepo; }
  async create(data) { return this.studentRepo.create(data); }
  async getAll() { return this.studentRepo.findAll(); }
  async getById(id) { return this.studentRepo.findById(id); }
  async update(id, data) { return this.studentRepo.update(id, data); }
  async delete(id) { return this.studentRepo.delete(id); }
}
module.exports = StudentUsecase;
