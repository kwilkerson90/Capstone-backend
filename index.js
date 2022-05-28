const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); 




app.use(cors());
app.use(express.json()); // req.body

//ROUTEYS

app.post('/signup', (req, res) => {
    //calling this HTTP request; also need to ensure that we're passing the values for email and password to the frontend
    db.query("INSERT INTO users (email, password) VALUES (?,?)", [email, password], 
    (err, result) => {
        console.log(err);
    }
    );
});



app.listen(5000, () => {
    console.log("server has started on port 5000");
});

