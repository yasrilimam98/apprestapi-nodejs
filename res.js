// Fungsi biar kode js lebih ketatkan salah dalam membuat variable
'use strict';
// Fungsi jika respon bener dan kepanggil atau terupdate ataupun terhapus dan memberikan respon dalam bentuk function
exports.ok = function(values, res){
    // Jika data 200 maka sukses
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
}