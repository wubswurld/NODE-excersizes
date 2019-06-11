function    rostring() {
    var str = process.argv[2];
    var arr =  new Array();
    str = str.split(' ')
    for (var x = 0; x < str.length; x++) {
        arr.push(str[x]);
    }
    var cpy = arr[0];
    arr.shift();
    arr.push(cpy);
    console.log(arr.join(' '));
}
rostring();
// function    rostring(str) {
//     var arr = new Array();
//     str = str.split(' ');
//     for (var x = 0; x <str.length; x++) {
//         arr.push(str[x]);
//     }
//     var cpy = arr[0]
//     arr.shift();
//     arr.push(cpy);
//     console.log("Old string: " + str);
//     console.log("New string: " + arr);
// }
// rostring("lol bobby you alright");
