var fs = require('fs');
var user = (require("os").userInfo().username)
var regex = /console/
var regex1 = /ttys000/
var regex2 = /ttys001/
var regex3 = /ttys003/
var arr = new Array ()
var arr2 = new Array ()
if (user)
    arr.push(user + '   ')
var contents = fs.readFileSync('/var/run/utmpx', 'utf8');
if (regex.test(contents))
    arr.push("console");
if (regex1.test(contents)){
    arr2.push("ttys000")
}
var d = new Date();
var n = d.getMonth();
n == 0 ? n = 'Jan' : 0;
n == 1 ? n = 'Feb' : 0;
n == 2 ? n = 'Mar' : 0;
n == 3 ? n = 'Apr' : 0;
n == 4 ? n = 'May' : 0;
n == 5 ? n = 'Jun' : 0;
n == 6 ? n = 'July' : 0;
n == 7 ? n = 'Aug' : 0;
if (n == 8)
    n = 'Sep'
if (n == 9)
    n = 'Oct'
if (n == 10)
    n = 'Nov'
if (n == 11)
    n = 'Dec'
arr.push(n)
var d = new Date();
var m = d.getDate();
arr.push(m)
var d = new Date();
var t = d.getHours();
var d = new Date();
var ms = d.getMinutes();
var str = arr.join('  ')
if (t == 0)
    t = 12;
console.log(str + ' ' + t + ':' + ms);
console.log(user + '     ' + arr2 + '  ' + n + '  ' + m + ' ' + t + ':' + ms);