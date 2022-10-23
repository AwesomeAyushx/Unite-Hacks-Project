const express = require('express')
const fs =require('fs')
const app = express()
app.set('view engine', 'ejs');
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/classes', (req, res) => {
  res.render('pages/ClassPage.ejs');
})
app.get('/home', (req, res) => {
  res.render('pages/HomePage.ejs', {classNames:["class1","class2","class3","class4","class5","class6",]});
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}`)
})