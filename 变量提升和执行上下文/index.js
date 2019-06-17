var a = 3;
function fn() {
  console.log(a);
  var a = 4;
}

fn(); // undefined
