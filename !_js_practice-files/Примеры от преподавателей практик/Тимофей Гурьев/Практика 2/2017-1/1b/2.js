document.getElementById("go").addEventListener("click", countB);
function countB(){
  var sub = "abc";
  var str = document.getElementById("in").value;
  var count = 0;
  var pos = str.indexOf(sub);
  while ( pos != -1 ) {
     count++;
     pos = str.indexOf(sub,pos+1);
  }
  document.getElementById("output").innerHTML = count;
}
