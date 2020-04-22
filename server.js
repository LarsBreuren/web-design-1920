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

  let greeting = ['Hoi Larissa! Hoe gaat het?', 'Ola Larissa!', 'Ha Larissa, welkom!', 'Hola Larissa!']
  let randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

  let locations = ['Anadia', 'Amsterdam']
  let randomLocation = locations[Math.floor(Math.random()*locations.length)];

  let event = ['Kracht', 'Baan', 'Herstel', 'Weg']
  let  randomEvent = event[Math.floor(Math.random()*event.length)];

  let layout = ['allen', 'Larissa', 'T&T', 'P&S']
  let  randomLayout = layout[Math.floor(Math.random()*layout.length)];
  
  let what = ['Baangewenning', 'Sprinterswarmingup', '750m staand', 'Vrachtauto legen op de wielerbaan']
  let  whatRandom = what[Math.floor(Math.random()*what.length)];

  let verzet = ['Wegfietsen', 'Wedstrijd versnelling', 'In het huis', 'Wedstrijd']
  let  verzetRandom = verzet[Math.floor(Math.random()*verzet.length)];

 res.render('index', {
    title: 'Home',
    greeting: randomGreeting,
    location: randomLocation,
    event: randomEvent,
    layout: randomLayout,
    what: whatRandom,
    verzet: verzetRandom
  })
})
app.get('/jaarplan', (req, res) => {
  res.render('jaarplan', {
    title: 'Jaarplan'
  })
})

app.post('/maandactiviteit', (req, res) => {

  let locations = ['Anadia', 'Amsterdam', 'Tokyo']
  let randomLocation = locations[Math.floor(Math.random()*locations.length)];
  let randomLocation2 = locations[Math.floor(Math.random()*locations.length)];

  let activiteit = ['Wegfietsen', 'Wedstrijd versnelling', 'In het huis', 'Wedstrijd']
  let activiteitRandom = activiteit[Math.floor(Math.random()*activiteit.length)];
  let activiteitRandom2 = activiteit[Math.floor(Math.random()*activiteit.length)];

  res.render('maandactiviteit', {
    title: 'Maandactiviteit',
    locatie: randomLocation,
    locatie2: randomLocation2,
    activiteit: activiteitRandom,
    activiteit2: activiteitRandom2,
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
