class RegistrationController {
  constructor({ uc }) { this.uc = uc; }
  async register(req, res) { res.json(await this.uc.register(req.body)); }
  async getCoursesByStudent(req, res) {
    res.json(await this.uc.getCoursesByStudent(req.params.id));
  }
}
module.exports = RegistrationController;
