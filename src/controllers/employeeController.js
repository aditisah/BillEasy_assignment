const employeeModel = require('../models/employeeModel')
const departmentModel = require('../models/departmentModel')

const createEmployee = async (req,res)=>{
   try{
    const {empName, deptId, joiningDate} = req.body;
    const newEmployee = await employeeModel.create(req.body);
    return res.status(201).json({status: true, data: newEmployee});
   }catch(err){
    return res.status(500).json({status: false, message: err.message})
   }
}

const getEmployee = async (req,res)=>{
    try{
        const empId= req.params.id
        const employee = await employeeModel.findOne({
            where: {id:empId},
            include: [{model: departmentModel}]
        })
        return res.status(200).send({status: true, data: employee})
    }catch(err){
       return res.status(500).send({status: false, message: err.message})
    }
}

module.exports = {createEmployee, getEmployee}