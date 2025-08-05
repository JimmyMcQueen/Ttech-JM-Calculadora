// Funciones matemáticas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir por cero";
  }
  return a / b;
}

// Función Calculadora
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return sumar(num1, num2);
  } else if (operacion === "resta") {
    return restar(num1, num2);
  } else if (operacion === "multiplicacion") {
    return multiplicar(num1, num2);
  } else if (operacion === "division") {
    return dividir(num1, num2);
  } else {
    return "Operación no válida";
  }
}

// Interacción con el usuario
let continuar = true;

while (continuar) {
  let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division o salir):").toLowerCase();

  if (operacion === "salir") {
    alert("Gracias por usar la calculadora. ¡Hasta pronto!");
    break;
  }

  if (
    operacion !== "suma" &&
    operacion !== "resta" &&
    operacion !== "multiplicacion" &&
    operacion !== "division"
  ) {
    alert("Operación no válida. Intenta con suma, resta, multiplicacion, division o salir.");
    continue;
  }

  let numero1 = parseFloat(prompt("Ingresa el primer número:"));
  let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Debes ingresar números válidos.");
    continue;
  }

  let resultado = realizarOperacion(numero1, numero2, operacion);
  alert("Resultado: " + resultado);
  console.log("Resultado:", resultado);

  let respuesta = prompt("¿Deseas realizar otra operación? (sí / no):").toLowerCase();
  if (respuesta === "no" || respuesta === "n") {
    alert("Gracias por usar la calculadora.");
    continuar = false;
  }
}
