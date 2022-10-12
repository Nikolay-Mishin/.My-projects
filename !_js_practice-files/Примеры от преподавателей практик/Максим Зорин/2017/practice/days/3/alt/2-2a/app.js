
function test() {
  var aElement = document.querySelector('input[name=a]');
  var a = aElement.value;

  a = a.split(',').map(Number);

  var sum = 0;
  for (var i = 0; i < a.length; i += 1) {
    sum += a[i];
  }



  var max = a[0];
  for (var i = 1; i < a.length; i += 1) {
    if (a[i] > max) {
      max = a[i];
    }
  }


  var maxi = 0;
  for (var i = 1; i < a.length; i += 1) {
    if (a[i] > a[maxi]) {
      maxi = i;
    }
  }
  a[maxi];






  var min = a[0];
  for (var i = 1; i < a.length; i += 1) {
    if (a[i] < min) {
      min = a[i];
    }
  }




  var res = sum;

  var out = document.querySelector('.out');
  out.innerHTML = res;
}


// var a = ['A', 'B', 'C'];
//
// a[0] == 'A'
// a[1] == 'B'
// a[2] == 'C'
// a.length == 3
//
//
// a[5] = 'Z';
//
//
// a[0] == 'A'
// a[1] == 'B'
// a[2] == 'C'
// a[3] == undefined
// a[4] == undefined
// a[5] == 'Z';
// a.length == 6
