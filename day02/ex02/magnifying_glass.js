var fs = require('fs');
var argv = process.argv[2] 
function    main() {
    // fs.readFile(argv, 'utf8', function(err, contents) {
    //     //console.log(contents);
    // });
    modFile()
}
function modFile() {
    var arr = new Array ()
    var contents = fs.readFileSync(argv, 'utf8');
    var str = contents.split('\n')
    for (var x = 0; x < str.length; x++) {
        arr.push(str[x])
    }
    console.log(arr);
        fs.writeFile('new.html', arr.join('\n'), function(err) {
            if(err) {
                return console.log(err);
            }
            var text = text.replace(/<wiki>(.+?)<\/wiki>/g, function(match, contents, offset, input_string)
            {
                return "<a href='wiki/"+contents.replace(/ /g, '_')+"'>"+contents+"</a>";
            }
        );
        
            console.log("The file was saved!");
        });
}

main ()