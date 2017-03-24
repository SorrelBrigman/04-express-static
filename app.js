const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next)=>{
  res.send(`<h1>Not cat</h1>`);
})


app.listen(3000, ()=>{
  console.log("serving on port 3000");
})
