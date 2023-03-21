const departmentModel = require('../models/departmentModel')


const createDepartment = async (req,res)=>{
   try{
    const {deptId, deptName, numberOfEmpoyees} = req.body;
    const newDepartment = await departmentModel.create(req.body);
    return res.status(201).json({status: true, data: newDepartment});
   }catch(err){
    return res.status(500).json({status: false, message: err.message})
   }
}

module.exports = createDepartment;