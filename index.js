//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const date = require(__dirname+"/date.js")


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : true}))

app.use(express.static("public"))

let ress =["Buy food","Cook food","Eat food"] 
let workList = []

app.get("/",function(req,res){
    
    let day = date.getDate();
    res.render("list",{kindOfDay : day, newListItem : ress})
})

app.post("/",function(req, res){
    // ress = req.body.newItem
    let a = req.body.clicked
    if(a === "Work"){
        workList.push(req.body.newItem)
        res.redirect("/work")
    }
    else{
        
            ress.push(req.body.newItem)
        //console.log(req.body.newItem)
            res.redirect("/")
        
    }
    //console.log(req.body.clicked)
    
})

app.get("/work",function(req, res){
    res.render("list",{kindOfDay: "Work List", newListItem : workList})
})

app.get("/about",function(req, res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("port 3000")
})