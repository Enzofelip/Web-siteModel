const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");

//Configurando a captura do html
const baseRule = path.join(__dirname, "template");

// Configurando a captura de dados dos inputs
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(`${baseRule}/index.html`);
});

//inserindo informacao teste no banco
app.post("/user/save", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
 

    const sql = `INSERT INTO correta (name, email) VALUES ('${name}', '${email}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        console.log(req.body);
        res.redirect("/");
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
