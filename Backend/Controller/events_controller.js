const pool = require("../database/db")

const eventController = {

    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from event")
            res.json({data:row})
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
            const [rows, fields] = await pool.query("select * from event where event_id=?", [id])
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
            const { company_id, employee_id, event_color, event_date, event_time, event_title, event_note, created_at } = req.body
            // company_id	employee_id	event_color	event_date	event_time	event_title	event_note	created_at	event_id	

            const sql = "insert into event(company_id, employee_id, event_color, event_date, event_time, event_title, event_note, created_at)values(?,?,?,?,?,?,?,?)"
            const [row, fields] = await pool.query(sql, [company_id, employee_id, event_color, event_date, event_time, event_title, event_note, created_at])
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
            const { firstname, lastname, gender, email, password, number } = req.body
            const { id } = req.params
            const sql = "update event set firstname=?,lastname=?,gender=?,email=?,password=?,number=? where id=?"
            const [row, fields] = await pool.query(sql, [firstname, lastname, gender, email, password, number, id])
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
            const [row, fields] = await pool.query("delete from event where event_id=?", [id])
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

module.exports = eventController