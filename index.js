//Imports
const express = require('express')

//configs
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let USERS = [];

//Logic
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/echo/:msg', (req, res) => {
    res.send(req.params.msg);
});

app.get('/echo', (req, res) => {
    res.send(req.body);
});

app.get('/users/:msg', (req, res) => {
    res.json(USERS);
});

app.post('/users',(req, res) => {
    let newUser = {
        name: req.body.name,
        age: req.body.age,
    };
    USERS.push(newUser);
    res.send("User has been added");
});

app.put('/users',(req, res) => {
    let userdata = {}
    userdata.name = req.body.name;
    userdata.age = req.body.age;
    USERS.push(userData);
    res.send(`Users has been updated, total userd sre : ${USERS.length}`);
});

app.delete('/users', (req, res) => {
    USERS.splice(0, 1);
    res.send(`A user has been deleted, last user in list is : ${USERS[USERS.length-1].name}`)
});


//Listen
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
});