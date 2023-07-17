const pool = require("../database/db")

const company_controller = {
    
    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from company_details")
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
            const { c_id } = req.params
            const [rows, fields] = await pool.query("select * from company_details where c_id =?", [c_id])
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
            const { c_name,c_location,criteria,description,position,date,last_date } = req.body
            const sql = "insert into company_details(c_name,c_location,criteria,description,position,date,last_date)values(?,?,?,?,?,?,?)"
            const [row, fields] = await pool.query(sql, [c_name,c_location,criteria,description,position,date,last_date])
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
            const { c_name,c_location,criteria,description,position,date,last_date } = req.body
            const { c_id } = req.params
            const sql = "update company_details set c_name=?,c_location=?,criteria=?,description=?,position=?,date=?,last_date=? where c_id =?"
            const [row, fields] = await pool.query(sql, [c_name,c_location,criteria,description,position,date,last_date,c_id ])
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
    // delete: async (req, res) => {
    //     try {
    //       const c_id = req.params.c_id;
    //       const sql = "DELETE FROM company_details WHERE c_id = ?";
    //       connection.query(sql, [c_id], (error, result) => {
    //         if (error) {
    //           console.error("Error deleting company details:", error);
    //           res.status(500).json({ error: "Error deleting company details" });
    //         } else {
    //           res.json({ success: true });
    //         }
    //       });
    //     } catch (error) {
    //       console.log(error);
    //       res.json({ status: "error" });
    //     }
    //   }
      

      delete: async (req, res) => {

        try {
            const { c_id } = req.params
            const [row, fields] = await pool.query("delete from company_details where c_id=?", [c_id])
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

module.exports = company_controller