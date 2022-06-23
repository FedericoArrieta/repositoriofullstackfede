let usuario: string = "Mark";
let password: string = "MarkZuckerberg";
let ingreseusuario: string = String(prompt("ingrese el nombre"));
let ingresepassword: string = String(prompt("ingrese la password"));
if (ingreseusuario === usuario && ingresepassword == password) {
  console.log("El usuario se registro correctamente");
} else {
  console.log("error de inicio de sesion");
}
