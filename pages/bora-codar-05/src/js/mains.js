//sempre irá tirar 2 algarismos
function back() {
  var result = document.getElementById("result").innerHTML
  document.getElementById("result").innerHTML = result.substring(
    0,
    result.length - 2
  )
}

//irá zerar a operação
function clean() {
  document.getElementById("result").innerHTML = ""
}

function percent() {
  var percent = document.getElementById("result").innerHTML + '/ 100'
  document.getElementById("result").innerHTML = eval(percent)
}

function insert(num) {
  var number = document.getElementById("result").innerHTML
  document.getElementById("result").innerHTML = number + num
}

function plusMinus() {
  var signal = document.getElementById("result").innerHTML
  document.getElementById("result").innerHTML = signal * -1
}

function equals() {
  var result = document.getElementById("result").innerHTML
  document.getElementById("result").innerHTML = eval(result)
}