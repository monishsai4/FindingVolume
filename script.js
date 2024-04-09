function HemiVol() {
  var r = document.getElementById("value").value;
  console.log(r);
  var a = (2 * 3.14 * r * r * r) / 3;
  console.log(a);
  document.getElementById("ans").innerHTML = a;
}
function HemiCsa() {
  var r = document.getElementById("value").value;
  console.log(r);
  var a = 3.14 * 2 * r * r;
  document.getElementById("ans").innerHTML = a;
}
function HemiTsa() {
  var r = document.getElementById("value").value;
  console.log(r);
  var a = 3.14 * 3 * r * r;
  document.getElementById("ans").innerHTML = a;
}
function ConeCsa() {
  var r = document.getElementById("radi").value;
  var l = document.getElementById("length").value;
  var h = document.getElementById("Height").value;

  console.log(r);
  var a = 3.14 * r * l;
  document.getElementById("ans1").innerHTML = a;
}
function ConeTsa() {
  var r = document.getElementById("radi").value;
  var l = document.getElementById("length").value;
  var h = document.getElementById("Height").value;
  console.log(r);
  var a = 3.14 * r * r + 3.14 * r * l;
  document.getElementById("ans1").innerHTML = a;
}
function ConeVol() {
  var r = document.getElementById("radi").value;
  var l = document.getElementById("length").value;
  var h = document.getElementById("Height").value;
  console.log(r);
  var a = (3.14 * r * r * h) / 3;
  document.getElementById("ans1").innerHTML = a;
}
function CylinVol() {
  var r = document.getElementById("radi1").value;
  var h = document.getElementById("Height1").value;
  console.log(r);
  var a = 3.14 * r * r * h;
  document.getElementById("ans2").innerHTML = a;
}
function CylinCsa() {
  var r = document.getElementById("radi1").value;
  var h = document.getElementById("Height1").value;
  console.log(r);
  var a = 2 * 3.14 * r * h;
  document.getElementById("ans2").innerHTML = a;
}
function CylinTsa() {
  var r = document.getElementById("radi1").value;
  var h = document.getElementById("Height1").value;
  console.log(r);
  var a = 2 * 3.14 * r * h + 2 * 3.14 * r * r;
  document.getElementById("ans2").innerHTML = a;
}
