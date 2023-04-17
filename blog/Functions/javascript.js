let Commutestart = 15

function fillInCheckboxes() {
  document.getElementById('trafficIsConcern').innerHTML =
    'Traffic is a concern' + '(add 10 minutes)'
  document.getElementById('dropKidsOff').innerHTML =
    'Drop kids off at school or babysitters (add 20 minutes)'
  document.getElementById('stopAtDairy').innerHTML =
    'Stopping in at the dairy? (add 5 minutes)'
}
function beingweird() {
  kid = document.getElementById('Kids')
  traffics = document.getElementById('Traffic')
  foodstops = document.getElementById('Dairy')
}

function checkboxes() {
  if (kid.checked == true) {
    kids = 20
  } else {
    kids = 0
  }
  if (traffics.checked == true) {
    traffic = 10
  } else {
    traffic = 0
  }
  if (foodstops.checked == true) {
    foodstop = 5
  } else {
    foodstop = 0
  }
}

function displayTime() {
  document.getElementById('commuteTime').innerHTML =
    'Commute Time: ' + [kids + Commutestart + traffic + foodstop] + ' minutes'
}

document.getElementById('button').onclick = buttons

function buttons() {
  checkboxes()
  displayTime()
}

beingweird()
fillInCheckboxes()
