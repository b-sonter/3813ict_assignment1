/* file to log new users into the system */

module.exports = function(app,fs){
  app.get('/api/reg', (req, res) => {

    var isUser = 0;
    var userObj;

    var uname = req.query.username;

    fs.readFile('authdata.json', 'utf-8', function(err, data){
      if (err){
        console.log(err);
      } else {
        userObj = JSON.parse(data);
        for (let i=0;i<userObj.length;i++){
          if (userObj[i].name == uname){
            // check for duplicates
            isUser = 1;
          }
        }

        //if username already exists
        if (isUser > 0){
          //tell user name already exists
          res.send({'username':'', 'success':false});
        }
        //if username doesnt exist
        else {
          //add name to user list
          userObj.push({'name': uname});
          //prepare data for writting (convert to string)
          var newdata = JSON.stringify(userObj);
          //write file with new user
          fs.writeFile('authdata.json', newdata, 'utf-8', function(err){
            //throw error if there is an error
            if (err) throw err;
            //send response if registration was a success
            res.send({'username':uname, 'success':true});
          });
        }
      }
    });
  });


}
