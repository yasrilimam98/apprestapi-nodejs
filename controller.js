'use strict';

// Memanggil res dan koneksi
var response = require('./res');
var connection = require('./koneksi');

// Membuat modul indek  
exports.index = function(req,res){
    response.ok("Aplikasi API sukses")
};
