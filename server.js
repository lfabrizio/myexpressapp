const express = require('express')
const app = express()
const port = 8080

app.use('/', express.static("public"));

app.get('/', function (req, res) {
res.send('Hello!!')
})

app.get('/api', function (req, res){
    const userName = req.query.username;
    const userId = req.query.Id;
    const message = req.query.message;
    console.log("userName");
    const reply = `${userName} with id of ${userId} is saying ${message}`
    res.send(reply);
})

app.get("/showProfile/:username", function(req, res) {
    const user = req.params.username;
    console.log(user);
    res.send("show profile working");
})   

app.listen(port, () => console.log(`Example app listening on port ${port}!`))