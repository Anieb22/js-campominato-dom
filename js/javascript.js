let output = document.getElementById('output');
let play = document.getElementById('play');
let arrayBomb = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumbers(count, max) {
  let randomNumbers = [];
  
  while (randomNumbers.length < count) {
    let randomNumber = getRandomNumber(1, max);

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  
  return randomNumbers;
}

play.addEventListener('click', function() {
  const difficulty = parseInt(document.getElementById('difficulty').value);
  let cellNumber;

  output.innerHTML = '';
  
  switch (difficulty) {
    case 1:
      cellNumber = 100;
      break;
    case 2:
      cellNumber = 81;
      break;
    case 3:
      cellNumber = 49;
      break;
  }

  arrayBomb = generateRandomNumbers(16, cellNumber);
  console.log(arrayBomb);

  for (let i = 1; i <= cellNumber; i++) {
    let elem = document.createElement('div');
    let cellPerRow = Math.sqrt(cellNumber);

    elem.classList.add('square');
    elem.style.width = `calc(90% / ${cellPerRow})`;
    elem.style.width = elem.style.width;
    elem.innerText = i;
    output.append(elem);
  }

  let squares = document.querySelectorAll('.square');
  let gameOver = false
  let clicForWin = 0

  squares.forEach(function(square) {
    square.addEventListener('click', function() {

        if(gameOver === false){
            if(!arrayBomb.includes(parseInt(this.innerText))){
                this.classList.add('active');
                clicForWin++
                
            }
    
            else{
                this.classList.add('bomb-finded')
                gameOver = true;
                document.getElementById('punteggio').innerText = `Punteggio: ${clicForWin}`
            }    
        }

    });
  });
});

let reset = document.getElementById('reset')
reset.addEventListener('click', function() {
  location.reload();
});
