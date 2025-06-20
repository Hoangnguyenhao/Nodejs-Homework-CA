const RegRepo = require('../../application/repositories/registration.repository');
const { ObjectId } = require('mongodb');
module.exports = class extends RegRepo {
  constructor(db) { super(); this.col = db.collection('registrations'); }
  async create(d) {
    await this.col.insertOne({ studentId:new ObjectId(d.studentId), courseId:new ObjectId(d.courseId) });
    return d;
  }
  async findByStudent(sid) {
    const r = await this.col.find({ studentId:new ObjectId(sid) }).toArray();
    return r.map(x => ({
      studentId: sid,
      courseId: x.courseId.toString()
    }));
  }
};
