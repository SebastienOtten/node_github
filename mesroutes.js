let express = require ('express');
let router = express.Router();
//initialiser le tableau
let todo = ["Faire les courses", "Nourir le chat"];

//récupérer les inputs du formulaire todo et les ajouter à la liste

router.get('/', (request, response) => {
response.render('todo.ejs', {todolist : todo});
 });

router.get('/todo/new', (request, response) => {
    item = request.query.todolabel
    todo.push(item)
    response.redirect('/')
});


router.get('/delete/:id', (request, response) => {
    item = request.params.id
    todo.splice(item,1)
    response.redirect('/')
});

//récupérer les inputs du formulaire sur le nom
router.post('/', (request, response) =>{
console.log(request.body);
response.send("Hello " + request.body.myname);
});

module.exports = router;
