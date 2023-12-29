
// const http = require('http');
// const fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;

// const home = fs.readFileSync('./index.html');
// const homesty1 = fs.readFileSync('./style.css');
// const homesty2 = fs.readFileSync('./small_device.css');
// const homesty3 = fs.readFileSync('./mobile.css');
// const sign = fs.readFileSync('./signup.html');
// const signsty1 = fs.readFileSync('./signup_large_style.css');
// const signsty2 = fs.readFileSync('./signup_mid.css');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     const url = req.url;
//     if (url == '/') {
//         res.end(`
//         <html>
//         <head>
//             <style>${homesty1 + homesty2 + homesty3}</style>
//         </head>
//         <body>
//             ${home}
//         </body>
//         </html>
//     `);
//     }
//     else if (url == '/signup') {
//         res.end(sign + signsty1 + signsty2);
//     }
//     else {
//         res.statusCode = 404;
//         res.end("<h1>404 File not Found<h1>")
//     }
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const exp = require('express');
const fs = require('fs');
const app = exp();
const port = 80;
const index = fs.readFileSync('./static/index.html', 'utf-8');
const signup = fs.readFileSync('./static/signup.html', 'utf-8');
const mongoose = require('mongoose');

app.use('/', exp.static('static'));
app.use(exp.urlencoded());

mongoose.connect('mongodb://localhost/Netflix_details');

var contSchema = new mongoose.Schema({
    email: String,
    pass: String,
});

var Netflix_details = mongoose.model('netflixdetails', contSchema);

app.get('/', (req, res) => {
    res.send(index);
})

app.get('/signup', (req, res) => {
    res.send(signup);
})

app.post('/signup', (req, res) => {
    let data = new Netflix_details(req.body);
    data.save();
    console.log("The data by body is ", req.body);
    console.log("The data is ", data);
    res.send(index);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
