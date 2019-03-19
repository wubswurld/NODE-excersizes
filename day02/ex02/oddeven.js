var stdin = process.openStdin();

process.stdout.write("Enter a number:");
stdin.addListener("data", function(num) {
    let n = num.toString().trim();
    if(n >= 0){
        console.log("Positive");
    }
    if(n < 0){
        console.log("Negative");
    }
    if(isNaN(n))
        console.log("not a #");
  });