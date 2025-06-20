class RegistrationUsecase {
  constructor({ registrationRepo }) { this.regRepo = registrationRepo; }
  async register(data) { return this.regRepo.create(data); }
  async getCoursesByStudent(studentId) { return this.regRepo.findByStudent(studentId); }
}
module.exports = RegistrationUsecase;
