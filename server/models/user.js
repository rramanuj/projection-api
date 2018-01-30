import mongoose from 'mongoose';
//defines everything that goes inside a collection
const { Schema } = mongoose;
mongoose.Promise = global.Promise;


//first instance of our schema, this is for the user accounts.
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more.']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more']
    },
    createdAt: {type: Date, default: Date.now},
    isDeleted: {type: Boolean, default:false},
});

//TODO: write some encrpytion for password.
//puts work before you save data you can add methods

const User = mongoose.model('User', userSchema);
export default User;


