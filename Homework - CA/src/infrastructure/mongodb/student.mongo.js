const StudentRepo = require('../../application/repositories/student.repository');
const { ObjectId } = require('mongodb');
module.exports = class extends StudentRepo {
  constructor(db) { super(); this.col = db.collection('students'); }
  async create(d) {
    const r = await this.col.insertOne(d);
    return { id: r.insertedId.toString(), ...d };
  }
  async findAll() {
    const r = await this.col.find().toArray();
    return r.map(x=>({ id:x._id.toString(), name:x.name, email:x.email }));
  }
  async findById(id) {
    const x = await this.col.findOne({_id:new ObjectId(id)});
    return x?{ id:x._id.toString(), name:x.name, email:x.email }:null;
  }
  async update(id,d) {
    await this.col.updateOne({_id:new ObjectId(id)},{$set:d});
    return { id, ...d };
  }
  async delete(id) { await this.col.deleteOne({_id:new ObjectId(id)}); }
};
