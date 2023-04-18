const express = require("express");
const app = express();
const mysql = require("mysql");

// Configurando a captura de dados dos inputs
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hellow Word");
});

//inserindo informacao teste no banco
app.post("/user/create", (req, res) => {
    const name = "Enzo";
    const email = "enzo.felipebb78@gmail.com";
    const password = "1234";

    const sql = `INSERT INTO info (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
    })
})

// Conectando no banco de dados
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "redefibra"
});

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
})
