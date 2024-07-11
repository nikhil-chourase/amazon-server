// import
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const productRouter = require("./routes/product");
const userRouter = require('./routes/user');




// Initialize

const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://nikhil:nikhil6920@cluster0.itjacly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
app.use( "/", (req,res)=>{
    res.send('welcome to the server home page');
})


// connections

mongoose.connect(DB).then( ()=>{
    console.log('connection successful');
}).catch((e)=>{
    console.log(e);
})




// CREATING an API

// app.get("/hello-world", (req,res) => {
//     res.json({hi :"hello world"});
// })


// app.get("/", (req,res) => {
//     res.json({name :"nikhil"});
// })



app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Connected at PORT ${PORT}`);
})



// app.listen(PORT, "192.168.1.5", ()=> {
//     console.log(`Connected at PORT ${PORT}`);
// })