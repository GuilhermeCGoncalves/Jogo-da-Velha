var winner = false;
var squares = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var colorEmphasis = "#19474C"

function showNewGame() {
    document.getElementById('newGame').style.visibility = "visible";
    document.getElementById('X').style.visibility  = "hidden";
    document.getElementById('O').style.visibility = "hidden";
}

function newGame() {
    document.getElementById('newGame').style.visibility = "hidden";
    document.getElementById('X').style.visibility = "visible";
    document.getElementById('O').style.visibility = "visible";
    document.getElementById('X').style.color = "#19474C";
    document.getElementById('O').style.color = "white";

    squares = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    document.getElementById('message').innerText = "JOGO DA VELHA";
    document.getElementById('one').innerText = "";
    document.getElementById('two').innerText = "";
    document.getElementById('three').innerText = "";
    document.getElementById('four').innerText = "";
    document.getElementById('five').innerText = "";
    document.getElementById('six').innerText = "";
    document.getElementById('seven').innerText = "";
    document.getElementById('eight').innerText = "";
    document.getElementById('nine').innerText = "";

    document.getElementById('one').style.backgroundColor = "white";
    document.getElementById('two').style.backgroundColor = "white";
    document.getElementById('three').style.backgroundColor = "white";
    document.getElementById('four').style.backgroundColor = "white";
    document.getElementById('five').style.backgroundColor = "white";
    document.getElementById('six').style.backgroundColor = "white";
    document.getElementById('seven').style.backgroundColor = "white";
    document.getElementById('eight').style.backgroundColor = "white";
    document.getElementById('nine').style.backgroundColor = "white";
    winner = false;
}

function verifyWinner() {
    var squareOne = document.getElementById('one').innerText;
    var squareTwo = document.getElementById('two').innerText;
    var squareThree = document.getElementById('three').innerText;
    var squareFour = document.getElementById('four').innerText;
    var squareFive = document.getElementById('five').innerText;
    var squareSix = document.getElementById('six').innerText;
    var squareSeven = document.getElementById('seven').innerText;
    var squareEight = document.getElementById('eight').innerText;
    var squareNine = document.getElementById('nine').innerText;
    var message = document.getElementById('message');

    // verify player X
    if (squareOne == "X" && squareTwo == "X" && squareThree == "X") {  
        document.getElementById('one').style.backgroundColor = colorEmphasis;
        document.getElementById('two').style.backgroundColor = colorEmphasis;
        document.getElementById('three').style.backgroundColor = colorEmphasis; 
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }
    
    if (squareFour == "X" && squareFive == "X" && squareSix == "X") {
        document.getElementById('four').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('six').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }

    if (squareSeven == "X" && squareEight == "X" && squareNine == "X") {
        document.getElementById('seven').style.backgroundColor = colorEmphasis;
        document.getElementById('eight').style.backgroundColor = colorEmphasis;
        document.getElementById('nine').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }

    if (squareOne == "X" && squareFour == "X" && squareSeven == "X") {
        document.getElementById('one').style.backgroundColor = colorEmphasis;
        document.getElementById('four').style.backgroundColor = colorEmphasis;
        document.getElementById('seven').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }

    if (squareTwo == "X" && squareFive == "X" && squareEight == "X") {
        document.getElementById('two').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('eight').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }

    if (squareThree == "X" && squareSix == "X" && squareNine == "X") {
        document.getElementById('three').style.backgroundColor = colorEmphasis;
        document.getElementById('six').style.backgroundColor = colorEmphasis;
        document.getElementById('nine').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }

    if (squareOne == "X" && squareFive == "X" && squareNine == "X") {
        document.getElementById('one').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('nine').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }

    if (squareThree == "X" && squareFive == "X" && squareSeven == "X") {
        document.getElementById('three').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('seven').style.backgroundColor = colorEmphasis;
        message.innerText = "Parabéns! Você venceu!";
        winner = true;
        showNewGame();
    }
    
    // verify player O
    if (squareOne == "O" && squareTwo == "O" && squareThree == "O") {
        document.getElementById('one').style.backgroundColor = colorEmphasis;
        document.getElementById('two').style.backgroundColor = colorEmphasis;
        document.getElementById('three').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareFour == "O" && squareFive == "O" && squareSix == "O") {
        document.getElementById('four').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('six').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareSeven == "O" && squareEight == "O" && squareNine == "O") {
        document.getElementById('seven').style.backgroundColor = colorEmphasis;
        document.getElementById('eight').style.backgroundColor = colorEmphasis;
        document.getElementById('nine').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareOne == "O" && squareFour == "O" && squareSeven == "O") {
        document.getElementById('one').style.backgroundColor = colorEmphasis;
        document.getElementById('four').style.backgroundColor = colorEmphasis;
        document.getElementById('seven').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareTwo == "O" && squareFive == "O" && squareEight == "O") {
        document.getElementById('two').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('eight').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareThree == "O" && squareSix == "O" && squareNine == "O") {
        document.getElementById('three').style.backgroundColor = colorEmphasis;
        document.getElementById('six').style.backgroundColor = colorEmphasis;
        document.getElementById('nine').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareOne == "O" && squareFive == "O" && squareNine == "O") {
        document.getElementById('one').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('nine').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }

    if (squareThree == "O" && squareFive == "O" && squareSeven == "O") {
        document.getElementById('three').style.backgroundColor = colorEmphasis;
        document.getElementById('five').style.backgroundColor = colorEmphasis;
        document.getElementById('seven').style.backgroundColor = colorEmphasis;
        message.innerText = "Ops... Tente de novo."
        winner = true;
        showNewGame();
    }  
}

function machineTurn() {
    if (winner == false) {
        let random = Math.floor(Math.random() * squares.length);
        let id = squares[random];
        document.getElementById(id).innerText = "O";

        // show the turn for the user
        let colorX = document.getElementById('X');
        let colorO = document.getElementById('O');
        colorX.style.color = colorEmphasis;
        colorO.style.color = "white";

        // delete turn played in array
        squares.splice(random, 1); 

        verifyWinner();
    }
}

function changeSquare(id) {      
    if (winner == false && squares.includes(id) == true) {
        document.getElementById(id).innerText = "X";
        let squareToDelete = squares.indexOf(id);

        // delete turn played in array
        squares.splice(squareToDelete, 1);
        
        // show the turn for the user
        let colorX = document.getElementById('X');
        let colorO = document.getElementById('O');
        colorX.style.color = "white";
        colorO.style.color = colorEmphasis;

        // verify draw
        if (squares.length < 1) {
            message.innerText = "Deu velha...";
            showNewGame();
        }
        setTimeout(machineTurn, 500);
        verifyWinner();
    }
}


