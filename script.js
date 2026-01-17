console.log("IMPORTED");

const baseDiv = document.getElementById("base");
baseDiv.addEventListener("mouseover", mouseHandler);
baseDiv.addEventListener("mousedown", mouseHandler);

const clearBtn = document.querySelector("button")
clearBtn.addEventListener("click", clearHandler)

function buildGrid(numSquares) {
    baseDiv.innerHTML = '';
    const size = 400 / numSquares;
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = i;
        square.style.width = size + "px";
        square.style.height = size + "px";
        baseDiv.append(square);
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function mouseHandler(e) {
    if (e.buttons == 1)
        e.target.style.backgroundColor = "#0f0f0f";
}

/**
 * 
 * @param {MouseEvent} e 
 */
function clearHandler(e) {
    const input = parseInt(window.prompt("Digite a dimensão para seu grid.\n Maximo de 100x100"));
    console.log(input)
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

buildGrid(16);