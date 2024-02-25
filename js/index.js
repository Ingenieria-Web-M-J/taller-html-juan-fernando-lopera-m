// Obtiene todos los elementos con la clase number-button, los cuales son los botones de los números.
const numberButtons = document.querySelectorAll('.number-button');

// Obtiene el elemento con la clase screen-label, el cual es el display de la calculadora.
const screenValue = document.querySelector('.screen-label');

// Obtiene todos los elementos con la clase operation-button, los cuales son los botones de las operaciones
// y que no tienen un id.
const operatorButtons = document.querySelectorAll('button.operation-button:not([id])');

// Obtiene el elemento con el id equal-button, el cual es el botón de igual.
const equalButton = document.getElementById('equal-button');

// Obtiene el elemento con el id c-button, el cual es el botón de limpiar.
const cButton = document.getElementById('c-button');

// Obtiene el elemento con el id ce-button, el cual es el botón de borrar.
const ceButton = document.getElementById('ce-button');

// Obtiene el elemento con el id ans-button, el cual es el botón de respuesta anterior.
const ansButton = document.getElementById('ans-button');

// Inicializa la variable input, la cual es el valor que se muestra en el display de la calculadora.
let input = ''

// Inicializa la variable answer_value, la cual es el valor de la respuesta anterior.
let answer_value = ''

// Agrega un evento de click a cada botón de número. 
// Cuando se hace click en un botón de número, se llama a la función pressButton
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        pressButton(button.innerText);
    })
});

// Agrega un evento de click a cada botón de operación.
// Cuando se hace click en un botón de operación, se llama a la función pressButton
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        pressButton(button.innerText);
    });
});

// Agrega un evento de click al botón de igual. Llama a la función pressEqual.
equalButton.addEventListener('click', pressEqual);

// Agrega un evento de click al botón de borrar. Llama a la función deleteChar.
ceButton.addEventListener('click', deleteChar);

// Agrega un evento de click al botón de limpiar. Llama a la función restart.
cButton.addEventListener('click', restart);

// Agrega un evento de click al botón de respuesta anterior. Llama a la función answer.
ansButton.addEventListener('click', answer);


// Esta función se encarga de actualizar el valor que se muestra en el display de la calculadora,
// agregando a la variable input el valor pasado como parámetro.
function pressButton(num) {
    input += num
    update();
}

// Esta función se encarga de actualizar el valor que se muestra en el display de la calculadora.
function update() {
    screenValue.innerText = input;
}

// Esta función se encarga de evaluar la expresión que se encuentra en la variable input,
// y mostrar el resultado en el display de la calculadora.
// Si la expresión no es válida, se muestra un mensaje de error.
function pressEqual() {
    try {
        input = eval(input);
        input = parseFloat(input).toFixed(2)
        if (isFinite(input)) {
            update();
            answer_value = input;
            input = '';
        } else {
            throw new Error("Error");
        }
    }
    catch {
        screenValue.innerText = 'Error';
        input = '';
    }
}

// Esta función se encarga de limpiar el display de la calculadora.
function restart() {
    input = '';
    screenValue.innerText = '';
}

// Esta función se encarga de borrar el último caracter que se encuentra en el display de la calculadora.
function deleteChar() {
    input = input.slice(0, -1);
    update();
}

// Esta función se encarga de agregar el valor de la respuesta anterior al display de la calculadora.
function answer() {
    input += answer_value;
    update();
}