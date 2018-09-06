module.exports = function(app, io){
  console.log("Server socket initialised");

//respond to conection request
  io.on('connection', (socket)=>{
      console.log('user connected');

      socket.on('new-message', (message) =>{
        console.log(message);
      });

      //respond to disconnect
      socket.on('disconnect', function(){
          console.log('user disconnected');
      });

      //respond to getting message
      //socket.on('add-message',(message)=>{
        //display message for all in chat
         //io.emit('message', {type:'message', text: message});
      });


  });
};
