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

  var now = new Date();
  var days = new Array("Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");
  var months = new Array("januari","februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
  function fourdigits(number) {
      return (number < 1000) ? number + 1900 : number;
  }
  today = days[now.getDay()] + " " +
               date + " " +
               months[now.getMonth()] + " " +
                 (fourdigits(now.getYear())) ; //https://sitecoach.alphamega.nl/SiteCoach/actuele-datum-op-je-site

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
    today: today,
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

let randomLocation = '';
let randomLocation2 = '';
let activiteitRandom = '';
let activiteitRandom2 = '';

app.post('/maandactiviteit', (req, res) => {

  setRandomActivities();
  
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
  console.log(req.body.loc);
  res.render('details', {
    title: 'Details',
    locatie: randomLocation,
    locatie2: randomLocation2,
    activiteit: activiteitRandom,
    activiteit2: activiteitRandom2,
  })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


function setRandomActivities(){
  let locations = ['Anadia', 'Amsterdam', 'Tokyo']
   randomLocation = locations[Math.floor(Math.random()*locations.length)];
   randomLocation2 = locations[Math.floor(Math.random()*locations.length)];

  let activiteit = ['Wegfietsen', 'Wedstrijd versnelling', 'In het huis', 'Wedstrijd']
   activiteitRandom = activiteit[Math.floor(Math.random()*activiteit.length)];
   activiteitRandom2 = activiteit[Math.floor(Math.random()*activiteit.length)];
}