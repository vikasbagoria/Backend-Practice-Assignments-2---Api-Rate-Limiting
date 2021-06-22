const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const data = require("./initialData");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/api/posts', (req, res) => {
    var max =req.query.max;
    var limit =0;

    if(max>data.length){
        limit = data.slice(0, 9) 
    }else{
   limit = data.slice(0,max || 9)
    }
    // console.log(max);
    res.status(200).send(limit);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
