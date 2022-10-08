// dependencies
const express = require('express');
const { randomUser, allUser, saveNewUser } = require('../controllers/userController');

// config
const usersRoutes = express.Router();

// handle routes

usersRoutes.get("/random", randomUser)
usersRoutes.get("/all", allUser)
usersRoutes.post("/save", saveNewUser)

module.exports = usersRoutes;