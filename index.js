import express from 'express';
import routes from './src/routes/crmRoutes';
import mongooes from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 9999;

//mongo connect local
// mongooes.Promise =  global.Promise;
// mongooes.connect('mongodb://localhost/CRMdb',{
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// })
//mongo connect server

// require database connection 
const dbConnect = require("./db/dbConnect");

// execute database connection 
dbConnect();

//setup bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 routes(app);
 app.use(express.static('public'));
app.get('/',(req,res)=>
  res.send(`<h1 style='color:#dd2c00'> Hoàng Anh Tuấn </h1>
  <h1 style='color:#aa00ff'>Đinh Thị Thảo </h1>
  <h1 style='color:#ff6d00'> Hoàng Thanh Tùng sinh ngày 25 tháng 10 năm 2014</h1>`)
);
app.listen(PORT,()=>
console.log(`Your server running on port ${PORT}`)
);