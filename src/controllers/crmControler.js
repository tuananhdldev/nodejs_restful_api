import { Logger } from 'mongodb';
import mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel'



const Contacts = mongoose.model('Contact',ContactSchema);

export const addNewContact  = (req,res)=>{
    let newContact = new Contacts(req.body);
    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}
export const getContacts  = (req,res)=>{
   Contacts.find
   ({},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}
export const getContactwithID  = (req,res)=>{
    console.log(req.body);
    Contacts.findById
    (req.params.contactID,(err,contact)=>{
         if(err){
             res.send(err);
         }
         res.json(contact);
     });
 }
 export const updateContact = (req, res) => {
    console.log(req.body);
    Contacts.findOneAndUpdate(
        { _id: req.params.contactID}, 
        req.body, 
        { new: true, useFindAndModify: false },
        (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}
export const deleteContact = (req, res) => {
    console.log(req.body);
    Contacts.remove(
        { _id: req.params.contactID}, 
        (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json('message: delete contact successful');
    });
}