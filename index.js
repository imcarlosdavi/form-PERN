const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layout')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

let users = [{

}]

app.get('/',(req,res)=>{
    res.send("Deu certo")
})

app.get('/users', (req,res)=>{
    res.render('user')
    console.log(req.body)
})

app.post('/users', (req,res)=>{
    users.push(req.body)
    res.json({status: 'usuário enviado com sucesso!'})
})

app.delete('/users', (req,res)=>{
    users.pop(req.body)
    res.json({status:"usuário deletado com sucesso."})
    console.log("user deletado")
})

//my server
app.listen('3000',()=>{
    console.log("Server is working!")
})