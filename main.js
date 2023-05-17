function bienvenida(){
    alert("Bienvenido al simulador de plazo fijo!")
    alert("Antes de iniciar el movimiento le vamos a solicitar unos datos")
}

bienvenida()

let nombre = prompt("Ingrese su nombre:")
let sexo = ""

function saludar(){
    
    while (sexo != "F" && sexo != "M" && sexo != "NC") {
        sexo = prompt("Ingrese su sexo F/M/NC (Ingrese NC en caso de que prefiera no decirlo):").toUpperCase()
        
        if (sexo == "F") {
          alert("Bienvenida " + nombre + "!!")
        } else if (sexo == "M") {
          alert("Bienvenido " + nombre + "!!")
        } else if (sexo == "NC") {
          alert("Bienvenidx " + nombre + "!!")
        } else {
          alert("ERROR!, por favor ingrese su sexo nuevamente")
        }
      }
}

saludar()

let plazo
let montoInicial

function informacion() {
    montoInicial = parseInt(prompt(nombre + " Ingrese el monto deseado a depositar:"))

    alert("¿Está seguro de que desea depositar $" + montoInicial + " en un plazo fijo?")

    plazo = parseInt(prompt("Indique por cuánto tiempo quiere el plazo fijo (En días):"))
    
    alert("Genial! Usted va a depositar $" + montoInicial + " en " + plazo + " días")
}

informacion()

let interes = 97
let intereses = ((montoInicial * interes) * plazo) / 36500

function calculo() {
    let montoFinal = montoInicial + intereses
    let interesGanados = montoFinal - montoInicial

    alert("Tu monto final es de $" + montoFinal.toFixed(2))
    alert("Generarías una ganancia de interes de $" + interesGanados.toFixed(2))
}

calculo()

function despedida() {
    alert("Espero haber solucionado su inquietud!")
    alert("Vuelva pronto!!")
}

despedida()