const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const methodOverride = require('method-override');
const morgan = require('morgan');

const UserModel = require('./models/user');

const { AsyncResource } = require('async_hooks');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/eDiaApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connection Open!")
})
.catch(err => {
    console.log("ERROR")
    console.log(err)
})

app.use(morgan('tiny'));

app.get('/login', (req, res) => { //1
    res.render('login/home')
})

app.get('/login/signup', (req, res) => { //2
    res.render('login/signup')
})

app.post('/login', async (req, res) => {
    const signIn = new UserModel(req.body)
    const user = await signIn.save();
    console.log(signIn)
    res.redirect(`login/${signIn._id}`)
})

app.get('/login/:id', async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.render('login/welcome')
})

app.post('login/welcome', async (req, res) => {
    const { id } = req.params; 
    const user = await UserModel.findById(id);
//    const username = new AtUserName(req.body)
    const user = await username.save();
    console.log(username)
    res.redirect(`login/${username}`)
})

app.get('/login/:id', async (req, res) => {
    const { id } = req.params;
    const user = await AtUserName.findById(id);
    res.render('login/addphoto')
})

app.listen(8080, () => {
    console.log('App is running on local host 8080')
})
