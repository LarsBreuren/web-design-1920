const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  })
})
app.get('/jaarplan', (req, res) => {
  res.render('jaarplan', {
    title: 'Jaarplan'
  })
})

app.post('/maandactiviteit', (req, res) => {
  res.render('maandactiviteit', {
    title: 'Maandactiviteit',
    maand: req.body.maand
  })
})
app.get('/details', (req, res) => {
  res.render('details', {
    title: 'Details'
  })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
