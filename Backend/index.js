require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());



const postRouters = require('./routes/post.routes')
const eventRouters = require('./routes/events_routes')
const holidayRouters = require('./routes/holidays_routes')
const awardRouters = require('./routes/award_routes')
const logbookRouters = require('./routes/logbook_routes')
const profileRouters = require('./routes/profile_routes')
const adminloginRouters = require('./routes/adminlogin_routes')
const companyRouters = require('./routes/company_routes')
const applyRouters = require('./routes/apply_routes')
const placedRouters = require('./routes/placed_routes')
const shortlistRouters = require('./routes/shortlist_routes')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/posts", postRouters)
app.use("/api/events", eventRouters)
app.use("/api/holidays", holidayRouters)
app.use("/api/award", awardRouters)
app.use("/api/logbook", logbookRouters)
app.use("/api/profile", profileRouters)
app.use("/api/adminlogin", adminloginRouters)
app.use("/api/company", companyRouters)
app.use("/api/apply", applyRouters)
app.use("/api/placed", placedRouters)
app.use("/api/shortlist", shortlistRouters)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}.....`)
});



