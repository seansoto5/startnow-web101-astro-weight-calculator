
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  planets.reverse();

var sel = document.getElementById('planets');

planets.forEach(function(item) {
  var opt = document.createElement('option');
  opt.innerHTML = item[0];
  sel.appendChild(opt);
});

function calculateWeight(weight, planetName) {
  var userWeight       = document.getElementById("user-weight").value;
  var planetSelect     = document.getElementById("planets").value;

  for (i = 0; i < planets.length; i++) {
    if (planets[i][0] === planetSelect) {
      var gravity = planets[i][1];
    }
  }

  var weightTotal      = userWeight * gravity;
  document.getElementById("output").innerHTML = "If you were on " + planetSelect + ", you would weigh " + weightTotal + "lbs!";
}; 

  
function handleClickEvent() {
  calculateweight();
};
