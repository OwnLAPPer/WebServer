const express = require('express')
const hbs = require("hbs");
require ("dotenv").config({path:"./views/.env"});
const app = express()


const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+'/views/partials');
// servir contenido estatico
app.use(express.static("public"))

app.get('/', function (req, res) {
  res.render("home", {
    nombre: "LEONARDO PERES",
    titulo: "curso de node"
  });
})


app.get('/generic', function (req, res) {
  res.render("generic", {
    nombre: "LEONARDO PERES",
    titulo: "curso de node"
  });
})
app.get('/elements', function (req, res) {
  res.render("elements", {
    nombre: "LEONARDO PERES",
    titulo: "curso de node"
  });
})
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port,()=>{
  console.log(`example app listening at http://localhost: ${port} `)
});