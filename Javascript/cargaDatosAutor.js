function CargaDatos(){
    $(document).ready(function () {
        $.ajax({
            type: "get",
            url: "https://k4l3thp.github.io/Proyecto/JSON/datosAutor.json",
            dataType: "json",
            success: OnSuccess,
        });
    });
}
function OnSuccess(data){
let foto = document.getElementById("fotoAutor");
foto.src = "";
let nombre = document.getElementById("nombre");
nombre.innerHTML = "";
let cedula = document.getElementById("cedula");
cedula.innerHTML = "";
let correo = document.getElementById("correoelectronico");
correo.innerHTML = "";

foto.src = data.datos.foto;
nombre.innerHTML = data.datos.nombre;
cedula.innerHTML = data.datos.cedula;
correo.innerHTML = data.datos.correo;
}