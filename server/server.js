let express = require('express');
let app = express();
let posts = require('./models/post');


app.get('/', function (req, res) {
    posts.getPosts().then(function (response) {
        // console.log(response)
        res.json(response)
    })
})

app.listen(3000, function () {
    console.log('Serve is running on port 3000')
})