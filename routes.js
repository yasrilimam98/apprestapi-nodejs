// Router membuat navigasi

'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    // Cek kondisi get 
    app.route('/')
    .get(jsonku.index);
}