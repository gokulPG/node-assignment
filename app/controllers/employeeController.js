const express = require('express')
const Employee = require('../models/employee')
const router = express.Router()


router.post('/', (req,res)=>{
    const body = req.body
    const name = body.name
    const education = body.education
    const details = {}
    details["city"] = body.city 
    details["state"] = body.state
    
    const result ={}
    result["name"] = name
    result["details"] = details
    result["education"] = education


    // const data = {
    //     name: body.name,
    //     details: {
    //         city: body.city, 
    //         state: body.state 
    //     },
    //     education: body.education
    // }

    const employee = new Employee(result)
    employee.save()
            .then((employee) => {
                res.send(employee)
            })
            .catch((err) => {
                res.send(err)
            })
        })

module.exports = router
