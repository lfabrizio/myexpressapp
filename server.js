const express = require('express')
const bodyParser = require('body-parser');
const keys = require('./keys');
const User = require('./models/User');
const app = express()
const port = 8080

// Connecting mongoDB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => console.log("DB connected"));

app.use(bodyParser.json());
app.use('/', express.static("public"));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/api', function (req, res) {
  const userName = req.body.username;
  const message = req.body.message;

  const data = {
    username: userName,
    message: message
  }
  console.log(data);

  const user = new User(data)
  user.save().then(() => {
    console.log("New user created");
    res.send(data);
  })


})

app.get("/getallusers", function (req, res) {
  User
    .find()
    .then(results => {
      console.log(results)
      res.send(results)
    })
})



app.get("/showprofile/:username", function (req, res) {
  const user = req.params.username;
  console.log(user);

  User.find({ username: user })
    .then(result => {
      console.log("Showing", user, "profile:", result)
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})


app.listen(port, () => console.log(`App is live currently listening on port ${port}!`))