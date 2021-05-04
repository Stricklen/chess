function setUsers() {
    var user1 = String(localStorage.getItem("player-1"));
    if (user1 !== ""){
        console.log("Player 1 - " + user1);
        document.getElementById("game-player1").innerText = user1;
    }
    var user2 = String(localStorage.getItem("player-2"));
    if (user2 !== ""){
        console.log("Player 2 - " + user2)
        document.getElementById("game-player2").innerText = user2;
    }
    
};

let variables = {
    turn: "w",
    turnnumber: 0,
    isSelected: false,
    pieceSelected: "",
    availableSquares: [],
    pieces: {
        w_pawn1: {
            startPosition: "a_2",
            position: "a_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn1",
            side: "white",
            captured: false,
        },
        w_pawn2: {
            startPosition: "b_2",
            position: "b_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn2",
            side: "white",
            captured: false,
        },
        w_pawn3: {
            startPosition: "c_2",
            position: "c_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn3",
            side: "white",
            captured: false,
        },
        w_pawn4: {
            startPosition: "d_2",
            position: "d_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn4",
            captured: false,
        },
        w_pawn5: {
            startPosition: "e_2",
            position: "e_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn5",
            side: "white",
            captured: false,
        },
        w_pawn6: {
            startPosition: "f_2",
            position: "f_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn6",
            side: "white",
            captured: false,
        },
        w_pawn7: {
            startPosition: "g_2",
            position: "g_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn7",
            side: "white",
            captured: false,
        },
        w_pawn8: {
            startPosition: "h_2",
            position: "h_2",
            img: "/pieces/wPawn.png",
            piece: "w_pawn8",
            side: "white",
            captured: false,
        },
        w_rook1: {
            startPosition: "a_1",
            position: "a_1",
            img: "/pieces/wRook.png",
            piece: "w_rook1",
            side: "white",
            captured: false,
        },
        w_rook2: {
            startPosition: "h_1",
            position: "h_1",
            img: "/pieces/wRook.png",
            piece: "w_rook2",
            side: "white",
            captured: false,
        },
        w_knight1: {
            startPosition: "b_1",
            position: "b_1",
            img: "/pieces/wKnight.png",
            piece: "w_knight1",
            side: "white",
            captured: false,
        },
        w_knight2: {
            startPosition: "g_1",
            position: "g_1",
            img: "/pieces/wKnight.png",
            piece: "w_knight2",
            side: "white",
            captured: false,
        },
        w_bishop1: {
            startPosition: "c_1",
            position: "c_1",
            img: "/pieces/wBishop.png",
            piece: "w_bishop1",
            side: "white",
            captured: false,
        },
        w_bishop2: {
            startPosition: "f_1",
            position: "f_1",
            img: "/pieces/wBishop.png",
            piece: "w_bishop2",
            side: "white",
            captured: false,
        },
        w_queen: {
            startPosition: "d_1",
            position: "d_1",
            img: "/pieces/wQueen.png",
            piece: "w_queen",
            side: "white",
            captured: false,
        },
        w_king: {
            startPosition: "e_1",
            position: "e_1",
            img: "/pieces/wKing.png",
            piece: "w_king",
            side: "white",
            captured: false,
        },
        b_pawn1: {
            startPosition: "a_7",
            position: "a_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn1",
            side: "black",
            captured: false,
        },
        b_pawn2: {
            startPosition: "b_7",
            position: "b_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn2",
            side: "black",
            captured: false,
        },
        b_pawn3: {
            startPosition: "c_7",
            position: "c_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn3",
            side: "black",
            captured: false,
        },
        b_pawn4: {
            startPosition: "d_7",
            position: "d_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn4",
            side: "black",
            captured: false,
        },
        b_pawn5: {
            startPosition: "e_7",
            position: "e_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn5",
            side: "black",
            captured: false,
        },
        b_pawn6: {
            startPosition: "f_7",
            position: "f_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn6",
            side: "black",
            captured: false,
        },
        b_pawn7: {
            startPosition: "g_7",
            position: "g_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn7",
            side: "black",
            captured: false,
        },
        b_pawn8: {
            startPosition: "h_7",
            position: "h_7",
            img: "/pieces/bPawn.png",
            piece: "b_pawn8",
            side: "black",
            captured: false,
        },
        b_rook1: {
            startPosition: "a_8",
            position: "a_8",
            img: "/pieces/bRook.png",
            piece: "b_rook1",
            side: "black",
            captured: false,
        },
        b_rook2: {
            startPosition: "h_8",
            position: "h_8",
            img: "/pieces/bRook.png",
            piece: "b_rook2",
            side: "black",
            captured: false,
        },
        b_knight1: {
            startPosition: "b_8",
            position: "b_8",
            img: "/pieces/bKnight.png",
            piece: "b_knight1",
            side: "black",
            captured: false,
        },
        b_knight2: {
            startPosition: "g_8",
            position: "g_8",
            img: "/pieces/bKnight.png",
            piece: "b_knight2",
            side: "black",
            captured: false,
        },
        b_bishop1: {
            startPosition: "c_8",
            position: "c_8",
            img: "/pieces/bBishop.png",
            piece: "b_bishop1",
            side: "black",
            captured: false,
        },
        b_bishop2: {
            startPosition: "f_8",
            position: "f_8",
            img: "/pieces/bBishop.png",
            piece: "b_bishop2",
            side: "black",
            captured: false,
        },
        b_queen: {
            startPosition: "d_8",
            position: "d_8",
            img: "/pieces/bQueen.png",
            piece: "b_queen",
            side: "black",
            captured: false,
        },
        b_king: {
            startPosition: "e_8",
            position: "e_8",
            img: "/pieces/bKing.png",
            piece: "b_king",
            side: "black",
            captured: false,
        }
    },
};

function loadPieces() {
    for (let gamepiece in variables.pieces) {
        // Finding the starting square for each piece
        var square = document.getElementById(variables.pieces[gamepiece].startPosition);

        // Creating div inside starting square
        var newDiv = document.createElement("div");
        newDiv.classList.add("piece");
        newDiv.classList.add(variables.pieces[gamepiece].side);
        newDiv.id = variables.pieces[gamepiece].piece;
        newDiv.setAttribute("onclick", `selectPiece(${variables.pieces[gamepiece].piece})`)
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";

        var img = document.createElement("img");
        img.src = variables.pieces[gamepiece].img;

        square.appendChild(newDiv);
        newDiv.appendChild(img)
    }
};

function getPosition(thing) {
    
};

function listenForMove() {
    // Add event listener to all gamecells
    var squares = document.getElementsByClassName("free");
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", movePiece);
    }
};

function forgetListen(){
    var squares = document.getElementsByClassName("gamecell");
    for (var i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", movePiece);
    }
};

function selectPiece(thing) {
    function toggleSelect() {
        // Toggling selection of piece
        if (variables.pieceSelected == "") {
            // No piece currently selected
            variables.pieceSelected = thing.id;
        } else if (variables.pieceSelected == thing.id) {
            // Selected is currently selected
            variables.pieceSelected = "";
        } else {
            // Different piece selected
            document.getElementById(variables.pieceSelected).classList.toggle("selected")
            variables.pieceSelected = thing.id;
        }
        thing.classList.toggle("selected");
    }

    toggleSelect();

    // If a piece is selected, listen for move choice
    if (variables.pieceSelected !== "") {
        listenForMove();
        // console.log("Listening");
    } else {
        forgetListen();
        // console.log("Waiting");
    };
};

function movePiece(evt) {
    var selectedpiece = document.getElementsByClassName("selected")[0];
    var destinationcell = evt.target;
    var isavailable = false;

    if (destinationcell.classList.contains("free") == true){
        isavailable = true
    } else {
        isavailable = false
    };

    if (isavailable == true){
        destinationcell.appendChild(selectedpiece);
        endTurn();
    }

    function endTurn(){
        forgetListen();
        squareAvailablity();
        var movedpiece = document.getElementById(variables.pieceSelected);
        movedpiece.classList.remove("selected");
        variables.pieceSelected = "";
        nextTurnCalc();
    }
};

function addDestinationOnClick(){
    var squares = document.getElementsByClassName("gamecell")
    for (var i=0; i < squares.length; i++) {
        squares[i].addEventListener("click", variables.destination = squares[i])
    }
}

function squareAvailablity(){
    var squares = document.getElementsByClassName("gamecell")
    for (var i=0; i < squares.length; i++) {
        if (squares[i].hasChildNodes() == false) {
            squares[i].classList.add("free")
        } else {
            squares[i].classList.remove("free")
        }
    }
}



function nextTurnCalc() {
    variables.turnnumber ++;

    var turnnum = variables.turnnumber;
    var whoseturn = "";

    if (turnnum % 2 == 0) {
        whoseturn = "black"
    } else {
        whoseturn = "white"
    };
    
    console.log(`Turn: ${whoseturn}`);
}

function main() {
    setUsers();
    loadPieces();
    squareAvailablity();
    nextTurnCalc();
};

main();