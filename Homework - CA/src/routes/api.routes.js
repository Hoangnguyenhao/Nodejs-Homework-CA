const express = require('express');
module.exports = function(a, b, c) {
  const r = express.Router();
  r.post('/students', a.create.bind(a));
  r.get('/students', a.getAll.bind(a));
  r.get('/students/:id', a.getById.bind(a));
  r.put('/students/:id', a.update.bind(a));
  r.delete('/students/:id', a.delete.bind(a));
  r.post('/courses', b.create.bind(b));
  r.get('/courses', b.getAll.bind(b));
  r.get('/courses/:id', b.getById.bind(b));
  r.put('/courses/:id', b.update.bind(b));
  r.delete('/courses/:id', b.delete.bind(b));
  r.post('/registrations', c.register.bind(c));
  r.get('/students/:id/courses', c.getCoursesByStudent.bind(c));
  return r;
};
