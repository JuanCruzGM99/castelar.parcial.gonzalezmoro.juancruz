function Guardar()
{
    function Constelacion(siglo, nombre) {
        this.Nombre = nombre;
        this.Siglo = siglo;
    }

    var InputSiglo = document.getElementById("InputSiglo").value;
    var InputNombre = document.getElementById("InputNombre").value;
    if (InputNombre.length == 0 || InputNombre == null && InputSiglo.length == 0 || InputSiglo == null) {
        alert("No ha llenado todos los campos solicitados");
    }
    else {
        var Constelacion = new Constelacion(InputSiglo, InputNombre);
        document.getElementById("table").innerHTML += '<tbody><tr><td> ' + Constelacion.Siglo + '</td><td>' + Constelacion.Nombre + '</td></tr></tbody >';
    }
}