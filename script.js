console.log("IMPORTED");

const baseDiv = document.querySelector(".container");
baseDiv.addEventListener("mouseover", mouseHandler);
baseDiv.addEventListener("mousedown", mouseHandler);

const changeGridBtn = document.querySelectorAll("button")[0];
changeGridBtn.addEventListener("click", changeGridHandler);

const clearBtn = document.querySelectorAll("button")[1];
clearBtn.addEventListener("click", clearHandler);


const colors = document.querySelector(".colors");
const colorsArr = [
    "#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4",
    "#ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7",
]

let currentColor = "#000";
let currentSelected = null;

function buildColors() {
    for (let i = 0; i < 20; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = i;
        square.style.width = "20px";
        square.style.height = "20px";
        square.style.backgroundColor = colorsArr[i];
        square.addEventListener("click", selectColor);
        colors.append(square);
    }
    currentSelected = colors.children[0];
    currentSelected.classList.add("selected");
    currentSelected.classList.re
}

/**
 * 
 * @param {MouseEvent} e 
 */
function selectColor(e) {
    currentSelected.classList.remove("selected");
    currentSelected = e.target;
    currentColor = currentSelected.style.backgroundColor;
    currentSelected.classList.add("selected");
}

function buildGrid(numSquares) {
    baseDiv.innerHTML = '';
    const size = 600 / numSquares;
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = i;
        square.style.width = size + "px";
        square.style.height = size + "px";
        square.style.backgroundColor = "#fff";
        baseDiv.append(square);
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function mouseHandler(e) {
    if (e.buttons == 1)
        e.target.style.backgroundColor = currentColor;
}

/**
 * 
 * @param {MouseEvent} e 
 */
function changeGridHandler(e) {
    let input = window.prompt("Digite a dimensão para seu grid.\n Maximo de 100x100");

    if (input == "")
        return;

    input = parseInt(input);

    if (Number.isNaN(input)) {
        alert("Digite um número inteiro");
        return;
    }

    if (input > 100) {
        alert("Valor muito grande.");
        return;
    }

    if (input < 1) {
        alert("Valor muito pequeno.");
        return;
    }

    buildGrid(input);
}

function clearHandler() {
    buildGrid(Math.sqrt(baseDiv.children.length));
}

buildColors();
buildGrid(16);