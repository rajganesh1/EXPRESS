const express = require("express");

const router = express.Router();
//router.use(logger);////either in the main js file or in this file depending upon the requirement

router.get('/',(req,res)=>{
    console.log(req.query.name);
    res.send("Users list");
})

router.get('/new', (req,res)=>{
    res.render("users/new");
})

router.post("/", (req,res)=>{
    //res.send("create user");
    const isvalid = true;
    if(isvalid){
        users.push({firstname: req.body.firstname});
        res.redirect(`/users/${users.length-1}`);
    }
    else{
        console.log("error");
        res.render("users/new", {firstname: req.body.firstname});
    }
})

// router.get("/:id", (req,res)=>{// this is same as the first get method in this file..( "id" indicates dynamic api name..can be anything or any value)
//     res.send(`Get user with userId ${req.params.id}`);
// })

// router.put("/:id", (req,res)=>{
//     res.send(`update users with userId ${req.params.id}`);
// })

// router.delete("/:id", (req,res)=>{
//     res.send(`Delete users with userId ${req.params.id}`);
// })

//above 3 different methoids with same api..to put them in one common function ..below is the latest version

router
.route("/:id")
.get((req,res)=>{// this is same as the first get method in this file..( "id" indicates dynamic api name..can be anything or any value)
    res.send(`Get user with userId ${req.params.id}`);
    console.log(req.user);
})
.put((req,res)=>{
    res.send(`update users with userId ${req.params.id}`);
})
.delete((req,res)=>{
    res.send(`Delete users with userId ${req.params.id}`);
})

const users=[{name: "Rajjjjjjj"}, {name: "Ganesh"}];

router.param("id", (req,res,next,id)=>{
    req.user = users[id];
    next();
})



module.exports = router;

