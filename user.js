const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username must be filled in'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password must be entered'],
    },
    goals: [
        {
            exercise: {type: Boolean, default: false},
            diet: {type: Boolean, default: false},
            meditation: {type: Boolean, default: false},
            study: {type: Boolean, default: false},
            savemoney: {type: Boolean, default: false},
            read: {type: Boolean, default: false},
            smoking: {type: Boolean, default: false},
            outdoors: {type: Boolean, default: false},
            hobby: {type: Boolean, default: false},
            mindfulness: {type: Boolean, default: false},
            management: {type: Boolean, default: false},
            language: {type: Boolean, default: false},
            required: false
        }
    ]
})

const User = mongoose.model('User', userSchema);


//userSchema.plugin(uniqueValidator);
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

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
