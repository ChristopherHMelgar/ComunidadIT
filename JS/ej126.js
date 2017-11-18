var helados = ["chocolate","mascarpone","coco","pizza","crema del cielo", "vainilla","chocolate con almendras", "melon", "banana","granizaso"]
var nuevoGusto = "frutilla"
//helados.reverse()


function listaHelados(helados,nuevoGusto){
    helados.reverse()
    helados.push(nuevoGusto)
    return helados
}


console.log(listaHelados(helados,nuevoGusto))

