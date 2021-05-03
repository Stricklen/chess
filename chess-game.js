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
    isSelected: false,
    pieceSelected: " ",
    availableSquares: [],
    pieces: {
        w_pawn1: {
            startPosition: "a_2",
            position: "a_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-1",
            captured: false,
        },
        w_pawn2: {
            startPosition: "b_2",
            position: "b_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-2",
            captured: false,
        },
        w_pawn3: {
            startPosition: "c_2",
            position: "c_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-3",
            captured: false,
        },
        w_pawn4: {
            startPosition: "d_2",
            position: "d_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-4",
            captured: false,
        },
        w_pawn5: {
            startPosition: "e_2",
            position: "e_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-5",
            captured: false,
        },
        w_pawn6: {
            startPosition: "f_2",
            position: "f_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-6",
            captured: false,
        },
        w_pawn7: {
            startPosition: "g_2",
            position: "g_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-7",
            captured: false,
        },
        w_pawn8: {
            startPosition: "h_2",
            position: "h_2",
            img: "/pieces/wPawn.png",
            piece: "pawn-white-8",
            captured: false,
        },
        w_rook1: {
            startPosition: "a_1",
            position: "a_1",
            img: "/pieces/wRook.png",
            piece: "rook-white-1",
            captured: false,
        },
        w_rook2: {
            startPosition: "h_1",
            position: "h_1",
            img: "/pieces/wRook.png",
            piece: "rook-white-2",
            captured: false,
        },
        w_knight1: {
            startPosition: "b_1",
            position: "b_1",
            img: "/pieces/wKnight.png",
            piece: "knight-white-1",
            captured: false,
        },
        w_knight2: {
            startPosition: "g_1",
            position: "g_1",
            img: "/pieces/wKnight.png",
            piece: "knight-white-2",
            captured: false,
        },
        w_bishop1: {
            startPosition: "c_1",
            position: "c_1",
            img: "/pieces/wBishop.png",
            piece: "bishop-white-1",
            captured: false,
        },
        w_bishop2: {
            startPosition: "f_1",
            position: "f_1",
            img: "/pieces/wBishop.png",
            piece: "bishop-white-2",
            captured: false,
        },
        w_queen: {
            startPosition: "d_1",
            position: "d_1",
            img: "/pieces/wQueen.png",
            piece: "queen-white",
            captured: false,
        },
        w_king: {
            startPosition: "e_1",
            position: "e_1",
            img: "/pieces/wKing.png",
            piece: "king-white",
            captured: false,
        },
        b_pawn1: {
            startPosition: "a_7",
            position: "a_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn2: {
            startPosition: "b_7",
            position: "b_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn3: {
            startPosition: "c_7",
            position: "c_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn4: {
            startPosition: "d_7",
            position: "d_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn5: {
            startPosition: "e_7",
            position: "e_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn6: {
            startPosition: "f_7",
            position: "f_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn7: {
            startPosition: "g_7",
            position: "g_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_pawn8: {
            startPosition: "h_7",
            position: "h_7",
            img: "/pieces/bPawn.png",
            piece: "pawn-black-1",
            captured: false,
        },
        b_rook1: {
            startPosition: "a_8",
            position: [1,8],
            img: "/pieces/bRook.png",
            piece: "rook-black-1",
            captured: false,
        },
        b_rook2: {
            startPosition: "h_8",
            position: ["h",8],
            img: "/pieces/bRook.png",
            piece: "rook-black-1",
            captured: false,
        },
        b_knight1: {
            startPosition: "b_8",
            position: ["b",8],
            img: "/pieces/bKnight.png",
            piece: "knight-black-1",
            captured: false,
        },
        b_knight2: {
            startPosition: "g_8",
            position: ["g",8],
            img: "/pieces/bKnight.png",
            piece: "knight-black-1",
            captured: false,
        },
        b_bishop1: {
            startPosition: "c_8",
            position: ["c",8],
            img: "/pieces/bBishop.png",
            piece: "bishop-black-1",
            captured: false,
        },
        b_bishop2: {
            startPosition: "f_8",
            position: ["f",8],
            img: "/pieces/bBishop.png",
            piece: "bishop-black-1",
            captured: false,
        },
        b_queen: {
            startPosition: "d_8",
            position: ["d",8],
            img: "/pieces/bQueen.png",
            piece: "queen-black-1",
            captured: false,
        },
        b_king: {
            startPosition: "e_8",
            position: ["e",8],
            img: "/pieces/bKing.png",
            piece: "king-black-1",
            captured: false,
        }
    },
};

function loadPieces() {
    for (let gamepiece in variables.pieces) {
        var square = document.getElementById(variables.pieces[gamepiece].startPosition);
        var newDiv = document.createElement("div");
        newDiv.classList.add("piece");
        newDiv.id = variables.pieces[gamepiece].piece;
        newDiv.setAttribute("onclick", `selectPiece(${variables.pieces[gamepiece].startPosition})`)
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

function selectPiece(thing) {
    thing.classList.toggle("selected");
    console.log(thing);
};

function movePiece(pos) {
    console.log(pos)
};

function main() {
    setUsers();
    loadPieces();
};

main();