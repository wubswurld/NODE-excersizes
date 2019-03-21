function    aff_param(str){
for (var i = 0; i < str.length; i++){
    if (str[i] == ' ')
        str = str.replace(' ', '\n');
    process.stdout.write(str[i]);
    }
}


aff_param("abc abc");