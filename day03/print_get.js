if (process.argv[2])
{
    var str = process.argv[2]
    var arr = new Array ()
    for (var x = 0; x < str.length; x++){
       if (str[x] == '?') {
           arr = str.split('?')
        }
    } 
    arr.shift()
    var str2 = arr.toString()
    str2 = str2.split('&')
    var str3 = str2.toString()
    for (let w = 0; w < str3.length; w++) {
        str3 = str3.replace('=', ': ')
        str3 = str3.replace(',', '\n')  
    }
    console.log(str3)
}