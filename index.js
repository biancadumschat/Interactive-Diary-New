const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const methodOverride = require('method-override');

const morgan = require('morgan');

const UserModel = require('./models/user');

const { AsyncResource } = require('async_hooks');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(session({ secret: 'nothing!' }))

mongoose.connect('mongodb://localhost:27017/eDiaApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connection Open!")
})
.catch(err => {
    console.log("ERROR")
    console.log(err)
})

app.get('/', (req, res) => { //1
    res.render('entry')
})

app.get('/register', (req, res) => { //1
    res.render('login')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password:hash })
    await newUser.save();
    console.log(newUser)
    res.redirect(`/goals/${newUser._id }`)
})

app.get('/goals/:id', async (req, res) => {
    const { id } = req.params.id;
    const username = await UserModel.findById(id);
    res.render('goals/setGoal')
})

app.post('/goals/:id', async (req, res) => {
    const { id } = req.params.id;
    const { goals } = req.body;
    const addedGoals = await UserModel.findByIdAndUpdate(id, goals, {runValidators:true});
    console.log(addedGoals)
    res.redirect(`/goals/${id}`)
})


app.get('/welcomeFirst', (req, res) => {
    res.render('welcomeFirst')
})

app.post('/welcomeFirst', async (req, res) => {
    const { username } = req.body;
    const verify = await UserModel.findOne({ username });
    if (verify) {
        res.redirect(`welcomeBack/${username._id}`)
    }
    else {
        res.redirect('entry')
    }
    res.render(`setGoal/${username._id}`)
})

app.get('/welcomeBack/:id', async (req, res) => {
    const { id } = req.params.id;
    const username = await UserModel.findById(id);
    res.render(`setGoal/${username._id}`, { username })
})


app.put('/setGoal/:id', async (req, res) => {
    const { id } = req.params;
    const { goals } = req.body;
    const addGoals = await UserModel.findByIdAndUpdate(id, goals, { runValidators: true });
    await addGoals.save();
    res.redirect(`/survey/`)
})


// app.post('/welcomeFirst', async (req, res) => {
//     const { username } = req.body;
//     const addUsername = new UserModel({
//         email,
//         password: hash
//     })
//     await newUser.save();
//     res.redirect('welcomeFirst')
// })


// app.post('/setgoal', async (req, res) => {
//     const { email, password } = req.body;
//     const hash = await bcrypt.hash(password, 12);
//     const newUser = new UserModel({
//         email,
//         password: hash
//     })
//     await newUser.save();
//     res.redirect('setGoal')
// })


app.listen(8080, () => {
    console.log('App is running on local host 8080')
})
