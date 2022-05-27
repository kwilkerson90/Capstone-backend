const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "goodworks17",
    host: "localhost",
    port: 5432,
    database= "yumappusers"
});

//ROUTEYS

//adding a new user to the database
const newUser = (req, res) => {
    let insertQuery = `INSERT INTO users (email, password) 
                        VALUES ('${user.email}', '${user.password}')`
    const user = req.body;

    //callback
    pool.query(insertQuery, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })

    //promise
    pool
        .query(insertQuery)
        .then(res => {
            console.log(res.rows[0])
        })
        .catch(e => console.error(e.stack))

    //async/await 
    try {
        const res = await pool.query(insertQuery)
        console.log(res.rows[0])
    } catch (err) {
        console.log(err.stack)
    }

}



module.exports = pool;
module.exports = {
    newUser
}