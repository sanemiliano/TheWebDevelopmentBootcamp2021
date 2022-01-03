const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
    let rand = Math.random();
    res.render('home.ejs', {rand: rand});
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});