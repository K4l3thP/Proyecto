window.onload = CargarTodo;
function CargarTodo(){
    annioActual();
}
function annioActual(){
    let annio = new Date().getFullYear();
    let texto = "© " + annio + " Lic.Diego Mendoza Gonzalez";
    document.getElementById("pCopyright").innerHTML = texto;
}
