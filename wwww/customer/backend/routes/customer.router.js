const express = require('express');
const { getCustomer, addCustomer, delCustomer, editCustomer, putCustomer } = require('../controllers/customer');

const customerRouter = express.Router()

customerRouter.get('/', getCustomer )
customerRouter.post('/', addCustomer )
customerRouter.delete('/:id', delCustomer )
customerRouter.post('/:id', putCustomer )
// customerRouter.put('/:id', putCustomer )

module.exports=customerRouter