// deklarasi 3 variable untuk memanggil libary
const express = require('express');
const bodyParser = require('body-parser');
// Fungsi app memanggil secara global express
const app = express(); 
// Parser app json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Memanggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});