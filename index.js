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
  function gradeCalc(list1, list2){
    var complete_total = 0, average_total = 0, total = 0;
    const categoryworth = list1;
    for (var i = 0; i < categoryworth.length; i++) {
        var average = 0;
        const assignments = list2   ;
        for (var j = 0; j < assignments.length; j++) {
            total += assignments[j];
        }
        average = (total/assignments.length) * categoryworth[i];
        complete_total += average;
    }
    average_total = (complete_total)*50;
    if (average_total >= 90) {
        return ("A")
    }
    else if (average_total >= 80 && average_total < 90) {
        return ("B")
    }
    else if (average_total >= 70 && average_total < 80) {
        return ("C")
    }
    else if (average_total >= 60 && average_total < 70) {
        return ("D")
    }
    else {
        return ("F")
    }
}

console.log(JSON.stringify(data))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/grades', (req, res) => {
  a = fs.readFileSync('class1.json', (err, data) => {
    if (err) throw err;
  
    return(data.toString());
  })
  res.render('pages/grades.ejs',[{class:'class1', grade: gradeCalc(a)}]);
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