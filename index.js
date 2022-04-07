<<<<<<< HEAD
const http=require("http"); //es5 writing format
//creating a server

//Single API will run in defualt route url ie. /
http.createServer((request,response)=>{

    var user={
        name:"sabya",
        age:26,
    }
   response.write(JSON.stringify(user));

   //closing the server
   response.end();
=======
const http=require("http"); //es5 writing format
//creating a server

//Single API will run in defualt route url ie. /
http.createServer((request,response)=>{

    var user={
        name:"sabya",
        age:26,
    }
   response.write(JSON.stringify(user));

   //closing the server
   response.end();
>>>>>>> 6f42ded (http-module)
}).listen(3000);         