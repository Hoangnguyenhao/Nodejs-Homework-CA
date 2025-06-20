require('dotenv').config();
const express = require('express');
const mysqlPool = require('./config/mysql.config');
const mongoDb = require('./config/mongo.config');
const StudentUsecase = require('./src/domain/usecases/studentUsecase');
const CourseUsecase = require('./src/domain/usecases/courseUsecase');
const RegistrationUsecase = require('./src/domain/usecases/registrationUsecase');
const StudentController = require('./src/application/controllers/student.controller');
const CourseController = require('./src/application/controllers/course.controller');
const RegistrationController = require('./src/application/controllers/registration.controller');
const apiRoutes = require('./src/routes/api.routes');

(async () => {
  const app = express();
  app.use(express.json());

  const useMongo = process.env.DB === 'mongo';
  const stRepo = useMongo
    ? new (require('./src/infrastructure/mongodb/student.mongo'))(await mongoDb)
    : new (require('./src/infrastructure/mysql/student.mysql'))(await mysqlPool);
  const coRepo = useMongo
    ? new (require('./src/infrastructure/mongodb/course.mongo'))(await mongoDb)
    : new (require('./src/infrastructure/mysql/course.mysql'))(await mysqlPool);
  const regRepo = useMongo
    ? new (require('./src/infrastructure/mongodb/registration.mongo'))(await mongoDb)
    : new (require('./src/infrastructure/mysql/registration.mysql'))(await mysqlPool);

  const stUC = new StudentUsecase({ studentRepo: stRepo });
  const coUC = new CourseUsecase({ courseRepo: coRepo });
  const regUC = new RegistrationUsecase({ registrationRepo: regRepo });

  const stCtl = new StudentController({ uc: stUC });
  const coCtl = new CourseController({ uc: coUC });
  const regCtl = new RegistrationController({ uc: regUC });

  app.use('/api', apiRoutes(stCtl, coCtl, regCtl));

  app.listen(process.env.PORT || 3000);
})();
