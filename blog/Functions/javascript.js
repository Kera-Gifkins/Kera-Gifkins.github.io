let Commutestart = 15
let kid = 7
let vechicles = 7
let food = 7

function fillInCheckboxes() {
  document.getElementById('trafficIsConcern').innerHTML =
    'Traffic is a concern' + '(add 10 minutes)'
  document.getElementById('dropKidsOff').innerHTML =
    'Drop kids off at school or babysitters (add 20 minutes)'
  document.getElementById('stopAtDairy').innerHTML =
    'Stopping in at the dairy? (add 5 minutes)'
}

function checkboxes() {
  if (document.getElementById('Kids').checked) {
    kid = 20
  } else {
    kid = 10
  }

  if (document.getElementById('Traffic').checked) {
    vechicles = 10
  } else {
    vechicles = 0
  }

  if (document.getElementsById('Dairy').checked) {
    food = 5
  } else {
    food = 10
  }
}
function displayTime() {
  checkboxes
  document.getElementById('commuteTime').innerHTML =
    'Commute Time: ' + [kid + Commutestart + vechicles + food] + ' minutes'
}
document.getElementById('button').onclick = displayTime

fillInCheckboxes()
