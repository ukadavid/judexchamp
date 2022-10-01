const express = require('express');
const app = express();

// All the folders
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.listen(3001, function(){
    console.log("server is running")
})



