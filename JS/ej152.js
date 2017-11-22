var usuario = {
    username: null,
    password: null,
    saludar: function(){
        if(this.username !== null){
            console.log(`Hola, soy el usuario ${this.username}`)
        }
        else{
            console.log("Este usuario no tiene username")
        }
    },
    updatePassword: function(user){
        this.passworde = user
    },
    updaterUsername: function(pass){
        this.username = pass
    }
}

console.log(usuario.updaterUsername("Pana"))
console.log(usuario.updatePassword("123456"))
console.log(usuario.saludar())
