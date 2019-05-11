let hd = document.getElementsByTagName('h1')[0];
let pf = document.getElementsByTagName('p')[0];

fetch('dt.json').then(function (res) {
  return res.json();
}).then(function (d) {
  hd.innerHTML = 'Привет ' + d.name;
  pf.innerHTML = 'Тебе ' + d.age + ' лет.'
})