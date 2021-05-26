import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const  ContactSchema = new Schema({
    firstName:{
        type: String,
        require: 'Enter a firt name'
    },
    lastName: {
        type: String,
        require: 'Enter a last name'
    }, 
    emai : {
        type: String
    },
    company: { type: String},
    phone: {
        type: Number
    },
    create_date:{
        type: Date,
        default : Date.now
    }
    
})