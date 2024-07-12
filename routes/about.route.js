const express = require('express');
const { get_about_page } = require('../controller/about.controller.js');
//const { models } = require('mongoose');
//const { about_routes } = require('./about.route.js');

//routes instance
const routes = express.Router();

routes.get('/about', get_about_page);

module.exports = {
    about_routes: routes
}

