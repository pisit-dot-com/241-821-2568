const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const mysql = require(`mysql2/promise`);
const port = 8000;

let conn = null;
const initDBconnection = async () => {
     const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8821  
});
    conn = connection;
}

app.use(bodyParser.json());

//path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
app.get(`/users`, async (req, res) => {
    const [rows, fields] = await conn.execute(`SELECT * FROM users`);
    res.json(rows);
});

app.post('/users', async (req, res) => {
    try {
        let user = req.body;

        console.log("BODY:", user);

        const [result] = await conn.query(
            "INSERT INTO users SET ?",
            user
        );

        console.log("result", result);

        res.json({
            message: "User created successfully",
            data: result
        });

    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({
            error: "Insert failed",
            detail: err.message
        });
    }
});

app.listen(port, async () => {
    await initDBconnection();
    console.log(`Server running on port ${port}`);
});