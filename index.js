const express = require('express')
const fs =require('fs')
const app = express()
app.set('view engine', 'ejs');
const port = 3000
app.use(express.static('public'))
/*fs.readFileSync('communications.txt', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
})*/
data = {
    class1: {
      type : "Honors",
      grade: "C"
    },
    class2: {
      type : "AP",
      grade: "A"
    },
    class3: {
      type : "Normal",
      grade: "F"
    },
}
/*
fs.writeFile('communications.txt', JSON.stringify(data), (err) => {
  if (err) throw err;
})*/
console.log(JSON.stringify(data))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/classes', (req, res) => {
  res.render('ClassPage.ejs');
})
app.get('/home', (req, res) => {
  res.render('HomePage.ejs');
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}`)
})