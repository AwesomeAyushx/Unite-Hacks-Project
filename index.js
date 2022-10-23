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

function gpa(classes){
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].type == "AP") {
            const APG = new Map([
                ["A", 5.0],
                ["B", 4.0],
                ["C", 3.0],
                ["D", 2.0],
                ["F", 1.0]
            ])
            total_points += APG.get(classes[i].grade);
        }
        if (classes[i].type == "Honors") {
            const HG = new Map([
                ["A", 4.5],
                ["B", 3.5],
                ["C", 2.5],
                ["D", 1.5],
                ["F", 0.5]
            ])
            total_points += HG.get(classes[i].grade);
        }
        if (classes[i].type == "Normal") {
            const NG = new Map([
                ["A", 4.0],
                ["B", 3.0],
                ["C", 2.0],
                ["D", 1.0],
                ["F", 0.0]
            ])
            total_points += NG.get(classes[i].grade);
        }
    }
    GPA = total_points/classes;
    return GPA
  }
console.log(JSON.stringify(data))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/grades', (req, res) => {
  res.render('pages/grades.ejs');
})
app.get('/class', (req, res) => {
  res.render('pages/ClassPage.ejs');
})
app.get('/login', (req, res) => {
  res.render('pages/Login.ejs');
})
app.get('/home', (req, res) => {
  res.render('pages/HomePage.ejs', {classNames:["class1","class2","class3","class4","class5","class6",]});
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}`)
})