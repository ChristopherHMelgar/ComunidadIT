var usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
}



function autenticarUsuario(nombreUsuario, clave){

    if(nombreUsuario === "batman" && clave === "Alfred1960KPO!"){
        
            return true
    }
    else{
            return false;
    }

}

if(autenticarUsuario(usuario.username, usuario.password) === true){
    console.log(usuario.username, usuario.password)
}
else{
    console.log("Usuario no autenticado")
}
