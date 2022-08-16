const express = require("express");
const usersRouter = require("./users.controller");
const patientsRouter = require("./patients.controller");
const boardsRouter = require("./boards.controller");
const boardsusersRouter = require("./boardsusers.controller");

function routerApi(app) {
  const router = express.Router();
  app.use(router);
  router.use("/users", usersRouter);
  router.use("/patients", patientsRouter);
  router.use("/boards", boardsRouter);
  router.use("/boardsusers", boardsusersRouter);
}

module.exports = routerApi;