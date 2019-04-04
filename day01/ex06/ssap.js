// function ssap(str) {
//     var arr = new Array();
//     str = str.split(' ');
//     for (let x = 0; x < str.length; x++){
//         if (str[x]){
//             arr.push(str[x]);
//         }
//     }
//     console.log(arr.sort().join(' '))
// }

function ssap() {
    var str = process.argv[2]
    var arr = new Array();
    str = str.split(' ');
    for (let x = 0; x < str.length; x++){
        if (str[x]){
            arr.push(str[x]);
        }
    }
    console.log(arr.sort().join(' '))
}

ssap("abc 123 uno dos");