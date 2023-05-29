let output = document.getElementById('output');
let play = document.getElementById('play');


play.addEventListener('click', function(){
    const difficulty = parseInt(document.getElementById('difficulty').value);

    let cellNumber;

    switch(difficulty){
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

    console.log(cellNumber)

    output.innerHTML = '';
    for (let i = 1; i <= cellNumber; i++) {
        let elem = document.createElement('div');
        let cellPerRow = Math.sqrt(cellNumber)
        console.log(cellPerRow)
        elem.classList.add('square');
        elem.style.width = `calc(90% / ${cellPerRow})`;
        elem.style.width = elem.style.width;
        elem.innerText = i;
        output.append(elem);
    }

let squares = document.querySelectorAll('.square');

squares.forEach(function(square) {
    square.addEventListener('click', function() {
        this.classList.add('active');
        console.log(this.innerText);
    });
});
})

let reset = document.getElementById('reset')
reset.addEventListener('click', function(){
    location.reload();
}
)