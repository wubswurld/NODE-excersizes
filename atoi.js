var jsAtoi = function(str) {
         var res = parseInt(str, 10);
         if(res > 2147483647){
             res = 2147483647;
         }else if(res < -2147483648){
            res = -2147483648;
        }
        return isNaN(res) ? 0 : res;
    };
var lol = "123";
var lol2 = jsAtoi(lol);
console.log(lol2);