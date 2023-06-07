const mysql = require('mysql')

// Mengganti koneksi SQLite dengan koneksi MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pp'
});

connection.connect((error) => {
  if (error) {
    console.error('Koneksi ke MySQL gagal: ' + error.stack);
    return;
  }

  console.log('Terhubung ke MySQL dengan ID koneksi ' + connection.threadId);
});

// Mengambil dan menampilkan nama dan nim dari tabel mahasiswa
//connection.query('SELECT nama, nim FROM mahasiwa', (error, results, fields) => {
  //if (error) {
    //console.error('Gagal menjalankan query: ' + error.message);
    //return;
  //}

 // console.log('Data nama dan nim dari tabel mahasiwa:');
 // results.forEach((row) => {
 //   console.log('Nama:', row.nama);
 //   console.log('NIM:', row.nim);
  //  console.log('------------------------');
 // });
// });

// Menutup koneksi setelah selesai
connection.end();

module.exports = connection;


