// dependencies
const express = require('express');
const { randomUser, allUser, saveNewUser, updateAUser, bulkUpdate } = require('../controllers/userController');

// config
const usersRoutes = express.Router();

// handle routes

usersRoutes.get("/random", randomUser)
usersRoutes.get("/all", allUser)
usersRoutes.post("/save", saveNewUser)
usersRoutes.patch("/update", updateAUser)
usersRoutes.patch("/bulk-update", bulkUpdate)

module.exports = usersRoutes;