// dependencies
const express = require('express');
const { randomUser, allUser } = require('../controllers/userController');

// config
const usersRoutes = express.Router();

// handle routes

usersRoutes.get("/random", randomUser)
usersRoutes.get("/all", allUser)
module.exports = usersRoutes;