const express = require('express');
const mysql = require('mysql2');
const bodyparse = require('body-parser');
const path = require('path')

const app = express();
//app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'VELL2002',
    database: 'troca_tudo'
});

connection.connect((err) =>{
    if (err) throw err;
    console.log('conectado ao banco de dados');
});


const PORT  = 3000;
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});







const bodyparse = require('body-parser')

app