const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");

const path = require("path");

app.use("/api/user", userRoute);

const port = process.env.PORT || 9043;

app.get("/", (req, res) =>
  res.send(` 
<div style="padding-left:20px;height:100vh;man-width:200vh;background-image: url('https://c1.wallpaperflare.com/preview/893/1020/960/contact-us-contact-email-phone.jpg');background-repeat: no-repeat;background-size: cover; ">
<div style="padding-top:50px;">
<h2 style="color:white;">Hey it's the Backend Server for <span style="color:orange;" >Contact Info | C.I .</span> <h2>   <br />
<a href="https://contact-information.netlify.app" style="color:white;"> Click here for <span style="color:orange;padding-left:5px;" >  C.I - Frontend Server.</span> </a>
</div>
</div>

`)
);
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
