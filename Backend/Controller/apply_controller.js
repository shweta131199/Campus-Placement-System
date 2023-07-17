const pool = require("../database/db")

const profileController = {

    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from apply_details where status='0' ")
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
            const [rows, fields] = await pool.query("select * from apply_details where c_id=?", [id])
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
            const { c_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume, c_name,status } = req.body
            // company_id	employee_id	event_color	event_date	event_time	event_title	event_note	created_at	event_id	

            const sql = "insert into apply_details(c_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume, c_name,status)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'0')"
            const [row, fields] = await pool.query(sql, [c_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume, c_name,status])
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
            const { c_id } = req.params
            const [row, fields] = await pool.query("UPDATE `apply_details` SET `status`='1' WHERE `c_id`=?", [c_id])
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
//     update: async (req, res) => {
//       try {
//           const { profile_id } = req.params
//           const [row, fields] = await pool.query("update profile set status='1' where profile_id=?", [profile_id])
//           res.json({
//               data: row
//           })
//       } catch (error) {
//           console.log(error);
//           res.json({
//               status: "error"
//           })
//       }
//   },

    delete: async (req, res) => {
        try {
            const { profile_id } = req.params
            const [row, fields] = await pool.query("delete from profile where profile_id=?", [profile_id])
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

module.exports = profileController