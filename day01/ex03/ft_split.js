// function    ft_split(str) {
//     let ret = new Array();
//     str = str.split(' ');
//     for (var x = 0; x < str.length; x++){
//         if (str[x]){
//             //console.log(ret.push(str[x]));
//             ret.push(str[x]);
//         }
//         console.log(x + ' => ' + ret);
//     }
//     return(ret)
// }

// ft_split('bow wow wow yippee yo yippee yay');

function    ft_split() {
    var str = process.argv[2]
    let ret = new Array();
    str = str.split(' ');
    for (var x = 0; x < str.length; x++){
        if (str[x]){
            //console.log(ret.push(str[x]));
            ret.push(str[x]);
        }
        console.log('[' + x + ']' + ' => ' + ret[x]);
    }
    return(ret)
}