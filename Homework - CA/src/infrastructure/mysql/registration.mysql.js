const RegRepo = require('../../application/repositories/registration.repository');
module.exports = class extends RegRepo {
  constructor(db) { super(); this.db = db; }
  async create(d) {
    await this.db.execute(
      'INSERT INTO registrations (student_id,course_id) VALUES (?,?)',
      [d.studentId, d.courseId]
    );
    return d;
  }
  async findByStudent(sid) {
    const [r] = await this.db.execute(
      'SELECT course_id FROM registrations WHERE student_id=?',[sid]
    );
    return r.map(x=>({ studentId: sid, courseId: x.course_id }));
  }
};
