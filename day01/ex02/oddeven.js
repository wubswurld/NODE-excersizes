var stdin = process.openStdin();

process.stdout.write("Enter a number:");
stdin.addListener("data", function(num) {
    let n = num.toString().trim();
    if(n % 2 == 1){
        console.log("Odd");
    }
    if(n % 2 == 0){
        console.log("Even");
    }
    if(isNaN(n))
        console.log("not a #");
  });