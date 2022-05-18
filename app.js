
const express = require('express');
const app = express();
const port = 80;
const path = require("path");
const fs = require("fs");
app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

app.get('/',(req,res) =>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title':'pubG is the best game',"content":con};
    res.status(200).render('index.pug',params);
});

app.post('/',(req,res)=>{
form = req.body;
name = form.name;
age = form.age;
gender = form.gender;
address = form.address;
more = form.more;

let outputwrite = `\nThis is the form submitted by ${name},${age} years old,${gender},residing in ${address} and for more ${more}`;

if(fs.existsSync('output.txt')){
    fs.appendFileSync('output.txt',outputwrite);
    
}else{
    fs.writeFileSync('output.txt',outputwrite);
}

const params = {"message":"Your form has been submitted successfully"};
res.status(200).render('index.pug',params);
});

app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});