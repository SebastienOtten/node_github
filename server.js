const { request, response } = require('express');
let express = require('express');

let app = express();

// a écrire pour que la méthode POST fonctionne!!
app.use(express.urlencoded());

//render todo page
//app.get('/', (request, response) => {
   // response.render('todo.ejs', {todolist : todo});
//});

//récupérer les inputs du formulaire todo et les ajouter à la liste
//app.get('/todo/new', (request, response) => {
   // item = request.query.todolabel
    //todo.push(item)
    //response.redirect('/')
//});

//récupérer les inputs du formulaire sur le nom
//app.post('/', (request, response) =>{
//console.log(request.body);
//response.send("Hello " + request.body.myname);
//});

let routes = require('./mesroutes');
app.use('/', routes);


//appliquer le CSS
app.use(express.static('public'));


//fixer le port
app.listen(3000, function() {
    console.log('Server is running on port 3000')
});


