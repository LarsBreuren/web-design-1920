const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/jaarplan', (req, res) => {
  res.render('jaarplan')
})
app.get('/jaarschema', (req, res) => {
  res.render('jaarschema')
})
app.get('/details', (req, res) => {
  res.render('details')
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
