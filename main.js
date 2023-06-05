function bienvenida(){
  alert("Hola nuevamente, Bienvenido al simulador de registro de notas del alumnado!!")
  alert("A continuación se le va a solicitar información de los alumnos y sus respectivas notas.")
}

bienvenida()

class Alumno {
  constructor(nombre, edad, calificacion){
    this.nombre = nombre
    this.edad = edad
    this.calificacion = calificacion
  }
}

const alumnos = [];
const notas = []
let continuar = true
let nombre
let edad
let calificacion

function crearAlumno() {
  while (continuar) {
    nombre = prompt("Ingrese el nombre y apellido del alumno:")
    edad = parseInt(prompt("Ingrese la edad del alumno:"))
    calificacion = parseFloat(prompt("Ingrese la nota de la última evaluación del alumno:"))

    notas.push(calificacion)

    const nuevoAlumno = new Alumno(nombre, edad, calificacion)
    alumnos.push(nuevoAlumno)

    let pregunta = prompt("¿Desea ingresar otro alumno? (Si/No)");
    if (pregunta.toLowerCase() !== "si") {
          continuar = false;
    }
  }
}

crearAlumno()

function resultadosAlumnos() {
  for (let i = 0; i < alumnos.length; i++) {
  alert("Lista de alumnos:" + "\n" + "\n" +
  
        "Alumno " + (i + 1) + ":" + "\n" + "\n" +
        
        "Nombre: " + alumnos[i].nombre + "\n" +
        "Edad: " + alumnos[i].edad + "\n" +
        "Última evaluación: " + alumnos[i].calificacion)
  }
}

resultadosAlumnos()

function filtrarNotas() {
  let ordenar = prompt("Desea ordenar las notas de los alumnos de mayor a menor? (Si/No)")
  if (ordenar.toLowerCase() === "si"){
    notas.sort((a, b) => b - a)
    alert(notas.join(", "))
  }
}

filtrarNotas()

function despedida() {
  alert("Espero una vez más que haya disfrutado del simulador")
  alert("Un facto: Mega-Gardevoir shiny es el mejor pokemon de todos")
}

despedida()