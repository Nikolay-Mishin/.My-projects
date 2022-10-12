function test() {
  var x = document.querySelector("input[name=Name]");
  x.style.borderColor = "Red";
  console.log('Name', x.value);

  var p = document.querySelector("#USER_PWD");
  p.style.borderColor = "Blue";
  console.log('Password', p.value);

  var pin = document.getElementById("USER_PIN");
  pin.style.borderColor = "Green";
  console.log('PIN', pin.value);
}

var sendButton = document.querySelector("button.send");
var addButton = document.querySelector("button.add");
b.onclick = function() {
  test();
};
