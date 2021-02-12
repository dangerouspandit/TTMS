var express = require('express');
var router = express.Router();


var users=[
  {
    email: 'skdwivediiitn@gmail.com', password:'sam@123',
    userid: 'A1001', password:'123'
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("welcome to backend server")
});


router.post('/login', function(req, res){
  let result = users.find(user => user.email == req.body.email);
  let result = users.find(user => user.userid == req.body.userid);
            
  if(result){
    if(result.password == req.body.password){
      res.status(200).send({
        message: "Successful login"
      })
    }
    else{
      res.status(200).send({
        message: "Incorrect Password"
      })
    }
  }
  else{
    res.status(200).send({
      message: "User Not Found!"
    })
  }

})

module.exports = router;
