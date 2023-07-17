const pool = require("../database/db")

const postsController = {
    
    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from login")
            res.json({
                data: row
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from login where id=?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { name,email,password,cpassword } = req.body
            const sql = "insert into login(name,email,password,cpassword)values(?,?,?,?)"
            const [row, fields] = await pool.query(sql, [name,email,password,cpassword])
            res.json({
                data: row
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { name,email,password } = req.body
            const { id } = req.params
            const sql = "update login set name=?,email=?,password=? where id=?"
            const [row, fields] = await pool.query(sql, [name,email,password,id])
            res.json({
                data: row
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [row, fields] = await pool.query("delete from login where id=?", [id])
            res.json({
                data: row
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },

}

module.exports = postsController