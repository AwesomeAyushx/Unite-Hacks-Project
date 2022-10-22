const express = require('express')
const fs =require('fs')
const app = express()
const port = 3000
app.use(express.static('public'))
/*fs.readFileSync('communications.txt', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
})*/
data = {
  classes:{
    class1: {
      type : "honors",
      grade: "C"
    },
    class2: {
      type : "AP",
      grade: "A"
    },
  }
}
/*
fs.writeFile('communications.txt', JSON.stringify(data), (err) => {
  if (err) throw err;
})*/
console.log(JSON.stringify(data))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Node App listening on port ${port}`)
})