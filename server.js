const express = require('express')
const bodyParser = require('body-parser');
const keys = require('./keys');
const User = require('./models/User');
const api = require('./routes/api');
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


app.use('/api', api);









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