import { get } from 'mongoose';
import {addNewContact, deleteContact, getContacts, getContactwithID, updateContact} from '../controllers/crmControler'


const routes = (app) => {
    app.route('/contact')
       .get((req,res,next)=>
         {
       
          console.log(req.originalUrl);
          console.log(req.method);
          next();
         },
         getContacts
       )
       .post(addNewContact );
       app.route('/contact/:contactID')
          .get(getContactwithID)
          .put(updateContact)
          .delete(deleteContact)
}
export default routes;