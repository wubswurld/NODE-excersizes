function main () {
  var arr = new Array ();
  let str = process.argv[2].split(' ');
  if (process.argv[2]) {
    for (let x = 0; x < str.length; x++) {
        if (str[x])
          arr.push(str[x]);
    }
    console.log("your date: " + arr);
    validate(arr);
  }
}
function validate(arr){
  if (arr.length == 5)
  {
    if (arr[3] != '2019' || arr[3].length != 4){
      console.log("Wrong format!")
      return false;
    }
    if (!(arr[0] == "Lundi" || arr[0] == "Mardi" || arr[0] == "Mercredi" || arr[0] == "Jeudi" || arr[0] == "Vendredi" || arr[0] == "Samedi" || arr[0] == "Dimanche")) {
      console.log("Wrong format!")
      return false
    }
  }
  else {
    console.log("Wrong format!")
  }
  setMonth(arr);
}
function setMonth(arr) {
  var month = arr[2]
  var monthnum = 0
  if (month == "janvier" || month == "Janvier")
    monthnum = 0
  if (month == "fevrier" || month == "Fevrier")
    monthnum = 1
  if (month == "mars" || month == "Mars")
    monthnum = 2
  if (month == "avril" || month == "Avril")
    monthnum = 3
  if (month == "mai" || month == "Mai")
    monthnum = 4
  if (month == "juin" || month == "Juin")
    monthnum = 5
  if (month == "juillet" || month == "Juillet")
    monthnum = 6
  if (month == "aout" || month == "Aout")
    monthnum = 7
  if (month == "septembre" || month == "Septembre")
    monthnum = 8
  if (month == "octobre" || month == "Octobre")
    monthnum = 9
    if (month == "novembre" || month == "Novembre")
    monthnum = 10
  if (month == "decembre" || month == "Decembre")
    monthnum = 11
  init(arr, monthnum);
}

function init(arr, monthnum) {
  var daynum = arr[1]
  if (daynum > 31 || daynum <= 0 || daynum.length > 2)
    return false;
  // var month = arr[2];
  var year = arr[3];
  let newarr = new Array ()
  newarr = arr[4].split(':');
  var hours = newarr[0]
  var minutes = newarr[1]
  getSeconds(daynum, monthnum, year, hours, minutes)
}
function getSeconds(daynum, monthnum, year, hours, minutes) {

  var seconds = new Date(year, monthnum, daynum, hours, minutes, 0).getTime() / 1000;  
  console.log("Seconds since January 1st, 1970: " + seconds);
}
main ()
//Validate ()