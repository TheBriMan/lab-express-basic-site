const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    //res.send('<h1>hello world</h1>');
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/about', (req, res, next) => {
    //res.send('<h1>hello world</h1>');
    res.sendFile(path.join(__dirname, '/views/about.html'));
})

app.get('/works', (req, res, next) => {
    //res.send('<h1>hello world</h1>');
    res.sendFile(path.join(__dirname, '/views/works.html'));
})

app.get('/photo-gallery', (req, res, next) => {
    //res.send('<h1>hello world</h1>');
    res.sendFile(path.join(__dirname, '/views/photo-gallery.html'));
})

app.listen(3000, () => {
    console.log('server running on port 3000');
});