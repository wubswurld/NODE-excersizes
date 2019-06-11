// function    epur_str(str) {
//     //var allows variable to be accessed in other functions and will have same value
//     //str.length starts counting at 1 instead of zero, to get accurate length of string subtract 1
//    var arr = new Array();
//    str = str.split(' ');    
//     for (let x = 0; x < str.length; x++){
//         if (str[x]) {
//             arr.push(str[x]);
//         }    
//    }
//    console.log(arr.join(' '));
// }
// epur_str("abc  abc  abc       abc abc");

if (process.argv[2]) {
    var arr = new Array();
    var str = process.argv[2];
    str = str.split(' ');
    for (let x = 0; x < str.length; x++){
        if (str[x]) {
            arr.push(str[x]);
        }    
   }
   console.log(arr.join(' '));
}