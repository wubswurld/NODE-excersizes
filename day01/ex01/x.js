var arrofunc = () => {
    for (var x = 0; x < 1000; x++)
    {
        process.stdout.write("x");
    }
}

function printx() {
    for (var x = 0; x < 1000; x++)
    {
        process.stdout.write("x");
    }
}

printx();
//  arrofunc();
