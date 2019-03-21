var fs = require('fs');
var argv = process.argv[2] 
function    main() {
    fs.readFile(argv, 'utf8', function(err, contents) {
        //console.log(contents);
    });
    fs.createReadStream(argv).pipe(fs.createWriteStream('new.html'));
    var path = 'new.html'
    modFile(path)
}
function modFile(path) {
    var arr = new Array ()
    const regex = /<a.*?>(.*?)</
    const regex2 = /<a.*?title="(.*?)">/
    var contents = fs.readFileSync(argv, 'utf8');
    var str = contents.split('\n')
    for (var x = 0; x < str.length; x++) {
        arr.push(str[x])
    }
    if (regex.test(arr)) {
        
    }
    if (regex2.test(arr))
        console.log("yes2")
    //console.log(arr)
}
main ()