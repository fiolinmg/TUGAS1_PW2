const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Data biodata (contoh)
const biodata = {
    nama: 'John Doe',
    umur: 25,
    hobi: ['Membaca', 'Berenang', 'Ngoding'],
    alamat: 'Jl. Contoh No. 123'
};

// Routing
app.get('/', (req, res) => {
    res.render('index', { biodata });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});