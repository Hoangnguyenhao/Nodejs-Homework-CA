const CourseRepo = require('../../application/repositories/course.repository');
module.exports = class extends CourseRepo {
  constructor(db) { super(); this.db = db; }
  async create(d) { const [r] = await this.db.execute(
      'INSERT INTO courses (title,description) VALUES (?,?)',[d.title,d.description]
    ); return { id:r.insertId,...d };
  }
  async findAll() { const [r] = await this.db.execute('SELECT * FROM courses'); return r; }
  async findById(id) { const [r] = await this.db.execute('SELECT * FROM courses WHERE id=?',[id]); return r[0]||null; }
  async update(id,d) { await this.db.execute(
      'UPDATE courses SET title=?,description=? WHERE id=?',[d.title,d.description,id]
    ); return { id,...d };
  }
  async delete(id) { await this.db.execute('DELETE FROM courses WHERE id=?',[id]); }
};
