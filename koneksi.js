// Memanggil libary mysql
var mysql = require('mysql');
// Buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});
// Membuat kondisi jika database tidak terkoneksi / error
conn.connect((err)=>{
if(err) throw err;
console.log('Mysql terkoneksi');
})