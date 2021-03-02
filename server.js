const { request, response } = require('express');
let express = require('express');

//initialize the app
let app = express();

app.use(express.urlencoded({extended:true}));

let router = require('./routes');
app.use('/', router);

//fixer le port
app.listen(8000, function() {
    console.log('Server is running on port 8000')
});


