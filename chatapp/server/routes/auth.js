/* File to log in and compare usernames */

module.exports = function(app, fs){
  //route to manage user logins
  app.get('', (req, res) => {

    //passing in the username from the route
    var uname = req.query.username;
    var userObj;

    //reading authdata file in utf8 format with function to handle errors
    fs.readFile('authdata.json', 'utf8', function(err, data) {

      if (err){
        console.log(err);
        //send out error message to user
        res.send({'username':'', 'success':false});
      } else {
        //turn input into a JSON object
        userObj = JSON.parse(data);
        //loop through all user data
        for (let i=0;1,userObj.length;i++){
          if (userObj[i].name == uname){
            //send out success message to user
            res.send({'username':uname, 'success':true});
            return;
          }
        }
        //username does not match any in data
        res.send(['username':uname, 'success':false]);
      }
    });
  });
}
