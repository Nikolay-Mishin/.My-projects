

function test1() {
  var aStr = document.getElementById('a').value;

  var c = document.getElementById('c');
  if (aStr.length < 6) {
    c.innerText = 'Короткая';
  }
  else {
    c.innerText = 'Длинная';
  }

}

function test2() {
  var a = document.getElementById('a').value;

  if (!isNaN(Number(a))) {
    document.getElementById('c').innerText = 'Число';
  }
  else {
    document.getElementById('c').innerText = 'Строка';
  }

}

function test3() {
  var a = document.getElementById('a').value;
  var words = a.split(' ');
  var count = words.length - 1;
  document.getElementById('c').innerText = count;
}


function test3() {
  var a = document.getElementById('a').value;

  var c = 0;

  a = 'Hello, world';

  while (true) {
    if (a[i] == 'l') {
      c = c + 1;
    }
  }


  for ( ;  true   ;  ) {
    if (a[i] == ' ') {
      c = c + 1;
    }
  }



  document.getElementById('c').innerText = count;
}





function test4() {
  var a = document.getElementById('a').value;
  var count = 0;
  for (var i = 0; i < a.length; i = i + 1) {
    if (a[i] == ' ') {
      count = count + 1;
    }
  }
  document.getElementById('c').innerText = count;
}
