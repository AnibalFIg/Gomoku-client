'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  const playerOne = 'X'
  const playerTwo = 'O'

  let currentTurn = 1
  let movesMade = 0
  console.log(movesMade)

  const winnerContainer = $('.winner')
  const reset = $('.reset')

  const sqr = $('.square')
  console.log(sqr)

  let results = []

  sqr.on('click', function (e) {
    movesMade++

    if (currentTurn === 1) {
      event.target.innerHTML = playerOne
      event.target.style.color = 'red'
      currentTurn++
    } else {
      event.target.innerHTML = playerTwo
      event.target.style.color = 'purple'
      currentTurn--
    }

    if (checkForWinner()) {
      let theWinner = currentTurn === 1 ? playerTwo : playerOne
      declareWinner(theWinner)
    }
  })

  reset.on('click', (e) => {
    const moves = Array.prototype.slice.call($('.square'))
    moves.map((m) => {
      m.innerHTML = ('')
    })

    winnerContainer.html('')
    winnerContainer.scss('display', 'none')
    currentTurn = 1
  })

  function declareWinner (winner) {
    winnerContainer.scss('display', 'block')
    reset.scss('display', 'block')
    winner = winner === playerOne ? 'X' : 'O'
    winnerContainer.html(winner + 'Wins!')
  }

  function checkForWinner () {
    if (movesMade > 4) {
      const moves = Array.prototype.slice.call($('.square'))
      results = moves.map(function (square) {
        return square.innerHTML
      })
    }
  }
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  return winningCombos.find(function (combo) {
    console.log(results)
    if (results[combo[0]] !== '' && results[combo[1]] !== '' && results[combo[2]] !== '' && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
      return true
    } else {
      return false
    }
  })
})
