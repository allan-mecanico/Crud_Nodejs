const express = require('express')
const router = express.Router()
const addressController = require('../controllers/address.controller');

// Retrieve all employees
router.get('/', addressController.findAll);

// Create a new employee
router.post('/', addressController.create);

// Retrieve a single employee with id
router.get('/:id', addressController.findById);

// Update a employee with id
router.put('/:id', addressController.update);

// Delete a employee with id
router.delete('/:id', addressController.delete);

module.exports = router