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
<<<<<<< HEAD
  res.render('pages/HomePage.ejs', {classNames:["class1","class2","class3","class4","class5","class6",]});
=======
  res.render('HomePage.ejs');
>>>>>>> 3ea75d6e67b5458a1e8c4609c5f1bb61674150de
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}`)
})