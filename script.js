let colosseum = document.querySelector("#colosseum")

let rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]

drawColosseum()

function drawColosseum() {
  for (let k = 0; k < 3; k++) {
    drawArcs()
    let last = rainbow.pop()
    rainbow.unshift(last)
  }
}

function drawArcs() {
  for (let i = 0; i < rainbow.length; i++) {
    colosseum.innerHTML += `<div class="arc ${rainbow[i]}"></div>`
  }
  for (let j = 0; j < rainbow.length; j++) {
    colosseum.innerHTML += `<div class="bottom ${rainbow[j]}"></div>`
  }
}
