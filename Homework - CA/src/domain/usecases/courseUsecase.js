class CourseUsecase {
  constructor({ courseRepo }) { this.courseRepo = courseRepo; }
  async create(data) { return this.courseRepo.create(data); }
  async getAll() { return this.courseRepo.findAll(); }
  async getById(id) { return this.courseRepo.findById(id); }
  async update(id, data) { return this.courseRepo.update(id, data); }
  async delete(id) { return this.courseRepo.delete(id); }
}
module.exports = CourseUsecase;
