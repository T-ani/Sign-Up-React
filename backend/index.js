const { response } = require('express');
const express = require('express');
const app = express();
require('./db/config');
const User = require('./db/users');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let user = new User(req.body);
    let result = user.save();
    resp.send(result);
})


// const connectDb = async()=>{
//     mongoose.connect('mongodb://localhost:27017/MedSearch');
//     const sign_up = new mongoose.Schema({});
//     const sign = mongoose.model('users',sign_up) ;
//     const data = await sign.find();
//     console.warn(data);
// }

//connectDb();
// app.get("/",(req,resp)=>{
//     resp.send("app is working")
// });

app.listen(3010)