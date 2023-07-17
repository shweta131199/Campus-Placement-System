import express, { json } from "express";
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.unsubscribe(cors());
app.use(json());

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"

})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login ('name','email','password') VALUES (?)";
    const values = [
       req.body.name,
       req.body.email,
       req.body.password

    ]
    db.query(sql, [values], (err, data) => {
       if(err) {

        return res.json("Error");
       } 
       return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM  login WHERE 'email' =? AND 'password' = ?";
    const values = [
       req.body.name,
       req.body.email,
       req.body.password

    ]
    db.query(sql, [req.body.name,req.body.password ], (err, data) => {
       if(err) {

        return res.json("Error");
       } 
       if(data.length > 0) {
        return res.json("Success");
       } else {
        return res.json("Failed");
       }
    })
})

app.listen(4000, ()=> {
    console.log("listening");

})