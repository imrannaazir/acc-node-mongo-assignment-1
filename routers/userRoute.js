// dependencies
const express = require('express');
const { randomUser } = require('../controllers/userController');

// config
const usersRoutes = express.Router();

// handle routes

usersRoutes.get("/random", randomUser)
module.exports = usersRoutes;