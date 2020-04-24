const x = document.querySelector('.x');
const o = document.querySelector('.o');
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('#buttons-container button');
const messageContainer = document.querySelector('#message');
const messageText = document.querySelector('#message p');
let secondPlayer;

let player1 = 0;
let player2 = 0;


const addClickEvent = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', () => {
            let elCurrentPlayer = currentPlayer(player1, player2);

            if (boxes[i].childNodes.length === 0) {
                let cloneElCurrentPlayer = elCurrentPlayer.cloneNode(true);
                boxes[i].appendChild(cloneElCurrentPlayer);

                if (player1 === player2) {
                    player1++;
                } else {
                    player2++;
                }

                checkWinCondition();
            }
        });
    }
}
addClickEvent();

// const removeClickEvent = () => {
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].removeEventListener('click', () => {});
//     }
// }


const currentPlayer = (player1, player2) => {
    if (player1 === player2)
        return elPlayer = x;
    else
        return elPlayer = o;
}

const checkWinCondition = () => {
    const elBox1 = document.getElementById('block-1');
    const elBox2 = document.getElementById('block-2');
    const elBox3 = document.getElementById('block-3');
    const elBox4 = document.getElementById('block-4');
    const elBox5 = document.getElementById('block-5');
    const elBox6 = document.getElementById('block-6');
    const elBox7 = document.getElementById('block-7');
    const elBox8 = document.getElementById('block-8');
    const elBox9 = document.getElementById('block-9');

    //All horizontal possibilities
    if (elBox1.childNodes.length > 0 &&
        elBox2.childNodes.length > 0 &&
        elBox3.childNodes.length > 0) {

        let elBox1Class = elBox1.childNodes[0].className;
        let elBox2Class = elBox2.childNodes[0].className;
        let elBox3Class = elBox3.childNodes[0].className;


        if (elBox1Class === 'o' && elBox2Class === 'o' && elBox3Class === 'o') {
            declareWinner('o');
        } else if (elBox1Class === 'x' && elBox2Class === 'x' && elBox3Class === 'x') {
            declareWinner('x');
        }
    }

    if (elBox4.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox6.childNodes.length > 0) {

        let elBox4Class = elBox4.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox6Class = elBox6.childNodes[0].className;


        if (elBox4Class === 'o' && elBox5Class === 'o' && elBox6Class === 'o') {
            declareWinner('o');
        } else if (elBox4Class === 'x' && elBox5Class === 'x' && elBox6Class === 'x') {
            declareWinner('x');
        }
    }

    if (elBox7.childNodes.length > 0 &&
        elBox8.childNodes.length > 0 &&
        elBox9.childNodes.length > 0) {

        let elBox7Class = elBox7.childNodes[0].className;
        let elBox8Class = elBox8.childNodes[0].className;
        let elBox9Class = elBox9.childNodes[0].className;


        if (elBox7Class === 'o' && elBox8Class === 'o' && elBox9Class === 'o') {
            declareWinner('o');
        } else if (elBox7Class === 'x' && elBox8Class === 'x' && elBox9Class === 'x') {
            declareWinner('x');
        }
    }

    //All vertical possibilities
    if (elBox1.childNodes.length > 0 &&
        elBox4.childNodes.length > 0 &&
        elBox7.childNodes.length > 0) {

        let elBox1Class = elBox1.childNodes[0].className;
        let elBox4Class = elBox4.childNodes[0].className;
        let elBox7Class = elBox7.childNodes[0].className;


        if (elBox1Class === 'o' && elBox4Class === 'o' && elBox7Class === 'o') {
            declareWinner('o');
        } else if (elBox1Class === 'x' && elBox4Class === 'x' && elBox7Class === 'x') {
            declareWinner('x');
        }
    }

    if (elBox2.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox8.childNodes.length > 0) {

        let elBox2Class = elBox2.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox8Class = elBox8.childNodes[0].className;


        if (elBox2Class === 'o' && elBox5Class === 'o' && elBox8Class === 'o') {
            declareWinner('o');
        } else if (elBox2Class === 'x' && elBox5Class === 'x' && elBox8Class === 'x') {
            declareWinner('x');
        }
    }

    if (elBox3.childNodes.length > 0 &&
        elBox6.childNodes.length > 0 &&
        elBox9.childNodes.length > 0) {

        let elBox3Class = elBox3.childNodes[0].className;
        let elBox6Class = elBox6.childNodes[0].className;
        let elBox9Class = elBox9.childNodes[0].className;


        if (elBox3Class === 'o' && elBox6Class === 'o' && elBox9Class === 'o') {
            declareWinner('o');
        } else if (elBox3Class === 'x' && elBox6Class === 'x' && elBox9Class === 'x') {
            declareWinner('x');
        }
    }

    //All diagonal possibilities
    if (elBox1.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox9.childNodes.length > 0) {

        let elBox1Class = elBox1.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox9Class = elBox9.childNodes[0].className;


        if (elBox1Class === 'o' && elBox5Class === 'o' && elBox9Class === 'o') {
            declareWinner('o');
        } else if (elBox1Class === 'x' && elBox5Class === 'x' && elBox9Class === 'x') {
            declareWinner('x');
        }
    }

    if (elBox3.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox7.childNodes.length > 0) {

        let elBox3Class = elBox3.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox7Class = elBox7.childNodes[0].className;


        if (elBox3Class === 'o' && elBox5Class === 'o' && elBox7Class === 'o') {
            declareWinner('o');
        } else if (elBox3Class === 'x' && elBox5Class === 'x' && elBox7Class === 'x') {
            declareWinner('x');
        }
    }

    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] !== undefined) {
            counter++;
        }
    }
    if (counter === 9) {
        weTied();
    }
}

const weTied = () => {
    showMessage('We tied, shit!');
}

const showMessage = (message) => {
    // removeClickEvent();
    messageText.innerHTML = message;
    messageContainer.classList.remove('hide');
    resetGame();

    setTimeout(() => {
        messageContainer.classList.add('hide');
        //addClickEvent();
    }, 3000);
}

const resetGame = () => {
    player1 = 0;
    player2 = 0;

    let allMarkedUpBoxes = document.querySelectorAll('.box div');

    for (let i = 0; i < allMarkedUpBoxes.length; i++) {
        allMarkedUpBoxes[i].parentNode.removeChild(allMarkedUpBoxes[i]);
    }
}

const declareWinner = (winner) => {
    let scoreboardX = document.getElementById('x-scoreboard-value');
    let scoreboardO = document.getElementById('o-scoreboard-value');
    let message = '';

    if (winner === 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        message = `Player 1 win!`;
    } else if (winner === 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        message = `Player 2 win!`;
    } else {
        weTied();
    }
    showMessage(message);
}