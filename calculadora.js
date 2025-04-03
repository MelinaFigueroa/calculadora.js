const display = document.getElementById("display");

function agregar(valor) {
    display.value += valor;
}

function limpiar() {
    display.value = "";
}

function borrar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// detecta teclas del teclado
document.addEventListener("keydown", (event) => {
    const key = event.key;
    const validKeys = "0123456789+-*/.=BackspaceEnter";

    if (validKeys.includes(key)) {
        event.preventDefault();

        if (key === "Enter" || key === "=") {
            calcular();
        } else if (key === "Backspace") {
            borrar();
        } else {
            agregar(key);
        }
    }
});
