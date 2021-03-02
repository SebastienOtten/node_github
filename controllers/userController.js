let User = require('../models/userModel');

let userList = [];

exports.userList = function(request, response){
    response.render('userList.ejs', {users : userList});
}

exports.userFormAdd = function(request, response){
    response.render('userAdd.ejs', {iduser:'-1', lastname:"", firstname:""});
}

exports.userUpdate = function(request, response){
    let iduser = request.params.iduser;
    response.render('userAdd.ejs',{iduser: iduser, lastname: userList[iduser]["lastname"], firstname:userList[iduser]["firstname"]});
}

exports.userNew = function(request, response){
   let iduser = request.body.iduser;
   let lastname = request.body.lastname;
   let firstname = request.body.firstname;

   if ( iduser >= 0 ) {
        userList[iduser]["lastname"] = lastname;
        userList[iduser]["firstname"] = firstname;
   }
   else{
        let user = new User(lastname, firstname);
    userList.push(user);
   }
    response.redirect('/user');
}

exports.userShow = function(request, response){
    let iduser = request.params.iduser;
    response.send('Hello ' + userList[iduser]["firstname"]);
}

exports.userRemove = function(request, response){
    let iduser = request.params.iduser;
    userList.splice(iduser,1);
    response.redirect('/user');
}