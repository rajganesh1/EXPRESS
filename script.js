const express = require("express");
const app = express();

app.use(express.static("public"));//not working now..to access static html files
app.use(express.urlencoded({extended: true}))//to access the body of the request
app.use(express.json());

app.set("view engine", "ejs");
app.use(logger);

app.get('/',logger, (req,res)=>{//to use the logger middleware only for this api(can have n number of middlewares)
    //res.json({message: "Error"});
    //res.download("script.js");//auto download the html file once refresh is clicked
    res.render("index",{text: "world"});//render = refe the html file
})

const userrouter = require('./routes/users');

app.use('/users', userrouter);

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000, (req,res)=>{
    console.log('Started on port 3000'); 
});