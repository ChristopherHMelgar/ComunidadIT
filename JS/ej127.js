var helados = ["chocolate","mascarpone","coco","pizza","crema del cielo", "vainilla","chocolate con almendras", "melon", "banana","granizaso"]
var nuevoGusto = "frutilla"
//helados.reverse()

function listaHelados(helados,nuevoGusto){
    helados.reverse()
    helados.push(nuevoGusto)
    return helados
}


var nuevaLista = listaHelados(helados,nuevoGusto)
var sinStock = []
let primerSabor = nuevaLista.shift()
let segundoSabor = nuevaLista.shift()
sinStock.push(primerSabor, segundoSabor)


console.log("Gusto de Helados: " + nuevaLista)
console.log("Gustos sin stock: " + sinStock)