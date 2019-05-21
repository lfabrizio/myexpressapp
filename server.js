// express server
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./keys')
const User = require('./models/User')
const app = express()
const port = process.env.Port || 4000;
app.use(express.static("public"));
// same as app.use("/", express.static("public"));
app.use(bodyParser.json());
//connecting mongoDB or in this case mongoDB Atlas
mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true}).then((err) =>  console.log("DB connected"));

// app.get('/', (req, res) => res.send('Bonjour, Jethro!'))


app.post('/api', (req, res) => {
    //request can send over queries, paramaters, Json, files..
    //usually you are sending out queries and params
    const userName = req.body.username;
    const message = req.body.message;
    const data = {
        username: userName,
        message: message
    }
    console.log(data);
    const user = new User(data)
    user.save().then(() => {
        console.log(`New user created`)
        res.send(data);
    })

   
})

app.get('/getallusers', (req, res) =>{
    res.send("data");
})

app.get('/showprofile/:username', (req, res) => {
    const user = req.params.username;
    res.send('show Profile is working')
    console.log(user)
})


app.listen(port, () => console.log(`App is live currently listening on port ${port}!`))