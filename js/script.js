let player = document.querySelector(".player");

let playerOne = document.querySelector(".player__one")
let playerTwo = document.querySelector(".player__two")

let inputBar1 = document.querySelector(".input__bar1")
let playerOneBtn = document.querySelector(".player__one__btn")
let playerOneError = document.querySelector(".player__one__error")

let inputBar2 = document.querySelector(".input__bar2")
let playerTwoError = document.querySelector(".player__two__error")
let playerTwoBtn = document.querySelector(".player__two__btn")
let restartBtn = document.querySelector(".restart");

let playerOneNumberStore




playerOneBtn.addEventListener("click", function () {
  if (Boolean(inputBar1.value)) {
    if (Boolean(inputBar1.value - 5)) {
      if (inputBar1.value >= 0 && inputBar1.value <= 10) {
        playerOneError.innerHTML = ""
        player.innerHTML = "secound player"
        playerOne.style.display = "none"
        playerTwo.style.display = "block"
        playerOneNumberStore = inputBar1.value
        restartBtn.style.display = "none"
      } else {
        playerOneError.innerHTML = "vai 0 theka 10 er modday den"

      }
    } else {
      playerOneError.innerHTML = "please enter a number do not use text"
    }
  } else {
    playerOneError.innerHTML = "vai khali raikha jayen na"
  }
})

playerTwoBtn.addEventListener("click", function () {
  if (Boolean(inputBar2.value)) {
    if (Boolean(inputBar2.value - 5)) {
      if (inputBar2.value >= 0 && inputBar2.value <= 10) {
        playerTwoError.innerHTML = ""
        if (playerOneNumberStore == inputBar2.value) {
          player.innerHTML = "2nd Player winner"
          playerTwoBtn.style.display = "none"
          inputBar2.style.display = "none"
          restartBtn.style.display = "block"
        } else {
          player.innerHTML = "1st Player winner"
          playerTwoBtn.style.display = "none"
          inputBar2.style.display = "none"
          restartBtn.style.display = "block"

        }
      } else {
        playerTwoError.innerHTML = "oi miya 10 er beshi khan keno"
      }
    } else {
      playerTwoError.innerHTML = "Vai text dilay apni fail"
    }



  } else {
    playerTwoError.innerHTML = "Vai allah rastay kiso leikha jan"
  }
})

restartBtn.addEventListener("click", function () {
  location.reload()
})