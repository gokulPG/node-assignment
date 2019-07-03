const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    details:{
            city:{
                type: String,
                required:true
            },
            state:{
                type: String,
                required: true
            }
    },
    education:[
            {
                name:{
                    type: String,
                    required:true
                },
                institution:{
                    type: String,
                    required: true
                },
                year:{
                    type: Number,
                    required: true
                }
            }
        ]
})
const Employee = mongoose.model('Employee', EmployeeSchema)

//pre-save hooks
// EmployeeSchema.pre('save', function(next){
//     const emp = this
//     Employee.details.city = emp.city
//     Employee.details.state = emp.state
//     next()
// })

module.exports = Employee