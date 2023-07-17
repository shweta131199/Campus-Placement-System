const pool = require("../database/db")

const adminlogin_controller = {
    
    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from admin_login")
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
            const [rows, fields] = await pool.query("select * from admin_login where id=?", [id])
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
            const sql = "insert into admin_login(name,email,password,cpassword)values(?,?,?,?)"
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
            const sql = "update admin_login set name=?,email=?,password=? where id=?"
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
            const [row, fields] = await pool.query("delete from admin_login where id=?", [id])
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

module.exports = adminlogin_controller