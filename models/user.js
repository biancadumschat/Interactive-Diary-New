const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: [
        {
            _id: { id: false},
            name: String,

        }
    ]
})

const User = mongoose.model('User', userSchema);

const addUsername = async (id) => {
    const user = await User.findById(id);
    user.username.push(
        {
            name: 'BobLahBlahsUser'
        }
    )
    const res = await user.save()
}

module.exports = User;

// const makeUser = async () => {
//     const u = new User({
//         email: 'Harry@Potter.com',
//         password: 'Potter'
//     })
//     const res = await u.save()
//     console.log(res)
// }

// const addUsername = async (id) => {
//     const user = await User.findById(id);
//     user.username.push(
//         {
//             name: 'MagikKid1'

//         }
//     )
//     const res = await user.save()
//     console.log(res);
// }
