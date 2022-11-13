let nombre = "Lenny";
let apellido = "Gomez";

const estudiante = `     ${nombre} ${apellido}  `;
console.log(estudiante);

const estudianteMayus = `${estudiante.toUpperCase()}`;
console.log(estudianteMayus);

const estudianteMinus = `${estudiante.toLowerCase()}`;
console.log(estudianteMinus);

caractEest = estudiante.length;
console.log(caractEest);

let nombreletter = nombre.charAt(0);
let nombreletter2 = nombre.charAt(4);
console.log(nombreletter);
console.log(nombreletter2);

console.log(estudiante.trim().length);

let confirmation_name = false;

if (estudiante.toLowerCase().trim().includes("lenny")) {
  confirmation_name = true;
}

console.log(confirmation_name);