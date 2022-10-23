const express = require('express')
const fs =require('fs')
const app = express()
app.set('view engine', 'ejs');
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  var image1= 
  res.send('Hello World!')
})
app.get('/classes', (req, res) => {
  res.render('pages/ClassPage.ejs');
})
app.get('/home', (req, res) => {
  res.render('pages/HomePage.ejs', {classNames:["class1.jpg","class2.jpg","class3.jpg","class4.jpg","class5.jpg","class6.jpg",]});
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}`)
})