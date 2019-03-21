var fs = require('fs');
var user = (require("os").userInfo().username)
var regex = /console/
var regex1 = /ttys000/
var regex2 = /ttys001/
var regex3 = /ttys003/
var arr = new Array ()
var arr2 = new Array ()
if (user)
    arr.push(user)
var contents = fs.readFileSync('/var/run/utmpx', 'utf8');
if (regex.test(contents))
    arr.push("console");
if (regex1.test(contents)){
    arr2.push(user, "ttys000")
}
var d = new Date();
var n = d.getMonth();
arr.push(n)
var d = new Date();
var m = d.getDate();
arr.push(m)
var d = new Date();
var t = d.getHours();
var d = new Date();
var ms = d.getMinutes();
var str = arr.join('  ')
console.log("WHO: " + str + ' ' + t + ':' + ms);
if (require("os").userInfo().username > 1)
    console.log(arr2 + ' ' + t + ':' + ms);