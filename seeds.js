const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/eDiaApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open!")
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })

const bob = new User({
    email: 'boblahblah@gmail.com',
    password: 'bobspass',
})

bob.save()
    .then(bob => {
        console.log(bob)
    })
    .catch(e => {
        console.log(e)
    })

const bobsUsername = async (id) => {
    const user = await User.findById(id);
    user.username.push(
        {
            name: 'BobLahBlahsUser'
        }
    )
    const res = await user.save()
}
bobsUsername('602270959d0cfe1415b16a3d');

User.insertOne(bobsUsername)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })