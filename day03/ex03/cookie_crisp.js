//npm init to create json and npm install express cookie-parser --save to add node modules to json
const port = '4200'

let express = require('express'); 
let cookieParser = require('cookie-parser'); 
//setup express app 
let app = express() 
app.use(cookieParser()); 
//basic route for homepage 
app.get('/', (req, res)=>{ 
res.send('Time To Make Cookies'); 
}); 
//JSON object to be added to cookie 
let users = { 
name : "Big Wubs", 
Age : "19",
NetWorth : "100 Billion"
} 
//Route for adding cookie 
app.get('/setuser', (req, res)=>{ 
res.cookie("userData", users); 
res.send('user data added to cookie'); 
}); 
//Iterate users data from cookie 
app.get('/getuser', (req, res)=>{ 
//shows all the cookies 
res.send(req.cookies); 
}); 
//server listens to port 3000 
app.listen(port, (err)=>{ 
if(err) 
throw err; 
console.log('listening on port' + ' ' + port); 
}); 
