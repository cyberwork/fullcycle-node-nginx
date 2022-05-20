const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Adriano')`
connection.query(sql)
connection.end()


app.get('/', (req,res) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection(config)
  connection.query("SELECT * FROM people", function (err, result, fields, resultHtml) {
    if (err) throw err;
    resultHtml = '<table><tr><td>id</td><td>Nome</td></tr>';
    for (var i=0, len=result.length; i<len; i++){
      resultHtml += '<tr><td>'+result[i]['id']+'</td><td>'+result[i]['name']+'</td></tr>';
    }
    resultHtml += '</table>';
    res.send('<h1>Full Cycle</h1><br />' + resultHtml);
  });
  connection.end()
})
// connection.end()
app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})