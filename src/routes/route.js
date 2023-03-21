const express = require("express");
const router = express.Router();
const { createEmployee, getEmployee } = require("../controllers/employeeController")
const createDepartment = require("../controllers/departmentController")

router.post('/employee', createEmployee);
router.get('/employee/:id', getEmployee);
router.post('/department', createDepartment);

module.exports = router;