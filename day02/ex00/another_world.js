// if (process.argv[2]) {
//     var arr = new Array();
//     var str = process.argv[2];
//     str = str.split(' ');
//     for (let x = 0; x < str.length; x++){
//         if (str[x]) {
//             arr.push(str[x]);
//         }    
//    }
//    console.log(arr.join(' '));
// }

function removeSpaces(){
    let str = process.argv[2];
    let newStr = str.replace(/\s+/g,' ');
    return newStr;
  }
  console.log(removeSpaces("fuck                                 u                                      pedo"));