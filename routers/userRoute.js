// dependencies
const express = require('express');
const { randomUser, allUser, saveNewUser, updateAUser } = require('../controllers/userController');

// config
const usersRoutes = express.Router();

// handle routes

usersRoutes.get("/random", randomUser)
usersRoutes.get("/all", allUser)
usersRoutes.post("/save", saveNewUser)
usersRoutes.patch("/update", updateAUser)

module.exports = usersRoutes;