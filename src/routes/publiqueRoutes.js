const express = require('express')
const routes = express.Router()


const publiqueController = require('../controllers/publiqueControler') 

routes.get('/',publiqueController.publiqueView)

module.exports = routes;