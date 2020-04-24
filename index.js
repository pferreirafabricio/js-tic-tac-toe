const x = document.querySelector('.x');
const o = document.querySelector('.o');
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('#buttons-container button');
const messageContainer = document.querySelector('#message');
const messageText = document.querySelector('#message p');
let secondPlayer;

let player1 = 0;
let player2 = 0;

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
            console.log(`Player O win!`);
        } else if (elBox1Class === 'x' && elBox2Class === 'x' && elBox3Class === 'x') {
            console.log(`Player X win!`);
        }
    }

    if (elBox4.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox6.childNodes.length > 0) {

        let elBox4Class = elBox4.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox6Class = elBox6.childNodes[0].className;


        if (elBox4Class === 'o' && elBox5Class === 'o' && elBox6Class === 'o') {
            console.log(`Player O win!`);
        } else if (elBox4Class === 'x' && elBox5Class === 'x' && elBox6Class === 'x') {
            console.log(`Player X win!`);
        }
    }

    if (elBox7.childNodes.length > 0 &&
        elBox8.childNodes.length > 0 &&
        elBox9.childNodes.length > 0) {

        let elBox7Class = elBox7.childNodes[0].className;
        let elBox8Class = elBox8.childNodes[0].className;
        let elBox9Class = elBox9.childNodes[0].className;


        if (elBox7Class === 'o' && elBox8Class === 'o' && elBox9Class === 'o') {
            console.log(`Player O win!`);
        } else if (elBox7Class === 'x' && elBox8Class === 'x' && elBox9Class === 'x') {
            console.log(`Player X win!`);
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
            console.log(`Player O win!`);
        } else if (elBox1Class === 'x' && elBox4Class === 'x' && elBox7Class === 'x') {
            console.log(`Player X win!`);
        }
    }

    if (elBox2.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox8.childNodes.length > 0) {

        let elBox2Class = elBox2.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox8Class = elBox8.childNodes[0].className;


        if (elBox2Class === 'o' && elBox5Class === 'o' && elBox8Class === 'o') {
            console.log(`Player O win!`);
        } else if (elBox2Class === 'x' && elBox5Class === 'x' && elBox8Class === 'x') {
            console.log(`Player X win!`);
        }
    }

    if (elBox3.childNodes.length > 0 &&
        elBox6.childNodes.length > 0 &&
        elBox9.childNodes.length > 0) {

        let elBox3Class = elBox3.childNodes[0].className;
        let elBox6Class = elBox6.childNodes[0].className;
        let elBox9Class = elBox9.childNodes[0].className;


        if (elBox3Class === 'o' && elBox6Class === 'o' && elBox9Class === 'o') {
            console.log(`Player O win!`);
        } else if (elBox3Class === 'x' && elBox6Class === 'x' && elBox9Class === 'x') {
            console.log(`Player X win!`);
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
            console.log(`Player O win!`);
        } else if (elBox1Class === 'x' && elBox5Class === 'x' && elBox9Class === 'x') {
            console.log(`Player X win!`);
        }
    }

    if (elBox3.childNodes.length > 0 &&
        elBox5.childNodes.length > 0 &&
        elBox7.childNodes.length > 0) {

        let elBox3Class = elBox3.childNodes[0].className;
        let elBox5Class = elBox5.childNodes[0].className;
        let elBox7Class = elBox7.childNodes[0].className;


        if (elBox3Class === 'o' && elBox5Class === 'o' && elBox7Class === 'o') {
            console.log(`Player O win!`);
        } else if (elBox3Class === 'x' && elBox5Class === 'x' && elBox7Class === 'x') {
            console.log(`Player X win!`);
        }
    }

    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] !== undefined) {
            counter++;
        }
    }
    if (counter === 9) {
        giveOld();
    }
}

const giveOld = () => {
    console.log(`Give old, shit!`);
}