const pool = require("../database/db")

const profileController = {

    getAll: async (req, res) => {
        try {
            const [row, fields] = await pool.query("select * from profile where status='0' ")
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
            const [rows, fields] = await pool.query("select * from profile where profile_id=?", [id])
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
            const { profile_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume, c_name,status } = req.body
            // company_id	employee_id	event_color	event_date	event_time	event_title	event_note	created_at	event_id	

            const sql = "insert into profile(profile_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume, c_name,status)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'0')"
            const [row, fields] = await pool.query(sql, [profile_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume, c_name,status])
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
            const { firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume } = req.body
            const { profile_id } = req.params
            const sql = "update profile set firstname=?, lastname=?, contactno=?, email=?, gender=?, ten_percentage=?, twelth_percentage=?, ten_passingyear=?, twelth_passingyear=?, diploma_percentage=?, deploma_passingyear=?, graduation_degree=?, graduation_percentage=?, graduation_passingyear=?, college_name=?, pg_degree=?, pg_percentage=?, pg_passingyear=?, pg_collegename=?, location=?, upload_resume=? where profile_id =?"
            const [row, fields] = await pool.query(sql, [profile_id, firstname, lastname, contactno, email, gender, ten_percentage, twelth_percentage, ten_passingyear, twelth_passingyear, diploma_percentage, deploma_passingyear, graduation_degree, graduation_percentage, graduation_passingyear, college_name, pg_degree, pg_percentage, pg_passingyear, pg_collegename, location, upload_resume ])
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


    // update: async (req, res) => {
    //     try {
    //         const { status } = req.body
    //         const { profile_id } = req.params
    //         const sql = "UPDATE `profile` SET `status`='1' WHERE `profile_id`= ? "
    //         const [row, fields] = await pool.query(sql, [ status, profile_id])
    //         res.json({
    //             data: row
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         res.json({
    //             status: "error"
    //         })
    //     }
    // },
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