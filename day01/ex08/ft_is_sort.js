// function    createArray() {
//     var str = process.argv[2]
//     var arr = new Array()
//     for (var x = 0; x < str.length; x++) {
//         arr.push(str[x])
//     }
// }

// function    ft_is_sort(arr) {
//     createArray(arr)
//     var wubs = true;
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             wubs = false;
//             break;
//         }
//     }
//     if (wubs == true)
//         console.log("SORTED")
//     else
//         console.log("NOT SORTED")
// }

function    ft_is_sort() {
    var str = process.argv[2].split(' ');
    var wubs = true;
    for (var i = 0; i < str.length - 1; i++) {
       if (str[i] > str[i + 1]) {
            wubs = false;
            break;
        }
    }
    if (wubs == true)
        console.log("SORTED")
    else
        console.log("NOT SORTED")
}

ft_is_sort()
