var usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
}



function autenticarUsuario(usuario){

    if(usuario.username === "batman" && usuario.password === "Alfred1960KPO!"){
        
        return true
    }
    else{
        return false;
    }

}

if(autenticarUsuario(usuario) === true){
    console.log(usuario.username, usuario.password)
}
else{
    console.log("Usuario no autenticado")
}