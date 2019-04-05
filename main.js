// Write your JavaScript code here!
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
//`.forEach` `document.createElement` `document.getElementById` `.appendChild`

planets.forEach(function(planet) {
    let select =  document.getElementById('planets');
    let option =  document.createElement('option');
    option.text =   planet[0];
    option.value =  planet[0];
    select.appendChild(option);
});
function calculateWeight(weight, planetName) {
    var planet = planets[0];
    var result;
    planets.forEach(function(planet) {
      if (planet[0] == planetName) {
        result = weight * planet[1];
      }
    });
    return result;
  }
  function handleClickEvent(e) {
    var userWeight = $("#user-weight").val();
    var planetName = $('#planets option:selected').text();
     console.log(planetName);
    var result = calculateWeight(userWeight, planetName);
    console.log(userWeight);
    $('#output').text("If you were on " + planetName + ", you would weigh " + result + "lbs!");
  }
