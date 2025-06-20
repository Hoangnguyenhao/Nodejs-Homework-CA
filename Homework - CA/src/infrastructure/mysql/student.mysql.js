const StudentRepo = require('../../application/repositories/student.repository');
module.exports = class extends StudentRepo {
  constructor(db) { super(); this.db = db; }
  async create(d) { const [r] = await this.db.execute(
      'INSERT INTO students (name,email) VALUES (?,?)', [d.name,d.email]
    ); return { id: r.insertId, ...d };
  }
  async findAll() { const [r] = await this.db.execute('SELECT * FROM students'); return r; }
  async findById(id) { const [r] = await this.db.execute('SELECT * FROM students WHERE id=?',[id]); return r[0]||null; }
  async update(id,d) { await this.db.execute(
      'UPDATE students SET name=?,email=? WHERE id=?',[d.name,d.email,id]
    ); return { id,...d };
  }
  async delete(id) { await this.db.execute('DELETE FROM students WHERE id=?',[id]); }
};
