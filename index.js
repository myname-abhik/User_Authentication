
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const URL = require("./models/user");
const userRoute = require("./route/user");
const bodyparser = require('body-parser');
const {restrictTologgedinUserOnly,checkAuth} = require("./middleware/auth.js")
require('dotenv').config()
const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://abhik16chakrabortty:${PASSWORD}@cluster0.iuakazn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch((err)=>{  
  console.log('Error connecting to MongoDB',err);
})
app.use(express.urlencoded({extended:false}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(express.json());
const StaticRouter = require("./route/user1");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))
app.get('/',restrictTologgedinUserOnly,(req, res) => {
  console.log('Staring');
  res.send('Hello World!');
});
app.use('/',StaticRouter)
app.use("/user",userRoute)



app.listen(PORT, (req, res) => {console.log(`listening on ${PORT}`)});
