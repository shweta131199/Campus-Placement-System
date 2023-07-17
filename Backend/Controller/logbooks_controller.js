const pool = require("../database/db")

const logbooksController = {

    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from log_book")
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
            const [rows, fields] = await pool.query("select * from log_book where log_id=?", [id])
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
   

}

module.exports = logbooksController