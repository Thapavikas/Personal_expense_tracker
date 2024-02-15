const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'register'
})

app.post('/register',(req,res)=>{
    const sql = "INSERT INTO register_table (username,email,password) values (?,?,?)"
    const username=req.body[0]
    const email=req.body[1]
    const password=req.body[2]
    values=[username,email,password]
    console.log(values)

    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        return res.json(data)
    })
})

app.listen(3001,()=>{
    console.log("Backend Connected...")
})