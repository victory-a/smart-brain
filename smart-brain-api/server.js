const express = require('express');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')

const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            has: '',
            email: 'john@gmail.com'
        }
    ]
}

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.status(400).json('error logging in')
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
    })
    console.log(database.users[database.users.length - 1])
    res.json(database.users[database.users.length - 1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const requestedUser = database.users.filter(user => user.id === id)
    if (requestedUser.length) {
        res.json(requestedUser[0]);
    } else {
        res.status(404).json('user not found');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    const requestedUser = database.users.filter(user => user.id === id)
    if (requestedUser.length) {
        requestedUser[0].entries++
        res.json(requestedUser[0].entries);
    } else {
        res.status(404).json('user not found');
    }
})


// bcrypt.hash(password, null, null, function(err, hash) {
//     console.log(hash);
// });
// Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3000, () => {
    console.log('app is running on port 3000')
})


