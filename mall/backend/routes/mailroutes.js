const express = require('express')
const { joindudot } = require('../controllers/test')
// const { getmail } = require('../controllers/mailcontrollers')
const mailRouter = express.Router()


mailRouter.get('/', joindudot )