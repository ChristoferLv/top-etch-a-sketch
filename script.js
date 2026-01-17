console.log("IMPORTED");

const baseDiv = document.getElementById("base");
baseDiv.addEventListener("mouseover", mouseHandler);
baseDiv.addEventListener("mousedown", mouseHandler);

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = i;
    baseDiv.append(square);
}

/**
 * 
 * @param {MouseEvent} e 
 */
function mouseHandler(e) {
    if (e.buttons == 1)
        e.target.style.backgroundColor = "#0f0f0f";
}