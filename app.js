const express = require("express");
const app = express()
const port = process.env.PORT || 3000
const methods = require ("./Request/get")

app.get("/", (req, res)=>{ 
    
    methods.getAll().then(
        (result)=>{
            res.json(result)
        }
    )
    .catch(error=>res.send(error)) 
})


app.listen(port, ()=>{
    console.log(`Long Life contection: http://localhost:${port}`)
})


