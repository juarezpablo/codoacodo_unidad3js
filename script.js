let userA = prompt("Buenos dias ingrese nombre de Usuario")
let a = parseInt(prompt("Hola "+userA+" Por favor ingrese su edad"));
let userB = prompt("Buenos dias ingrese nombre de usuario")
let b = parseInt(prompt("Hola "+userB+" Por favor ingrese su edad"));
let userC = prompt("Buenos dias ingrese nombre del tercer usuario")
let c= parseInt(prompt("Hola "+userC+"ingrese su edad"));
if(a>b){
    if(a>c){
        alert(userA+" es el mayor")
    }
    else {
        alert(userC+" es mayor")
    }
}
else{
    if(b>c){
        alert(userB+" es mayor")
    }
    else{
        alert(userC+" es mayor")
    }
}