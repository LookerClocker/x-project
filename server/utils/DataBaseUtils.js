import mongoose from 'mongoose';
import '../models/Users';

const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost/testDB');
}

export function UserList() {
    return User.find();
}

// export function createUser(data) {
//     const user =  new User({
//         username: data.username,
//         password: data.password
//     });
//
//     return user.save();
// }

export function createUser() {
    const user =  new User({
        username: 'admin',
        password: 'admin'
    });

    return user.save();
}