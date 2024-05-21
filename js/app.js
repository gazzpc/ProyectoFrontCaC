function guardarComentario (nombre, apellido, mail, telefono, mensaje){

    var comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];

    var nuevoComentario = {
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        telefono: telefono,
        mensaje: mensaje
    };

    comentariosGuardados.push(nuevoComentario);

    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

    alert('comentario enviado! Muchas gracias por tu mensaje!')
    
}
function enviarComentario(event) {
    event.preventDefault();

    var nombre = document.querySelector('[name="nombre"]').value;
    var apellido = document.querySelector('[name="apellido"]').value;
    var mail = document.querySelector('[name="mail"]').value;
    var telefono = document.querySelector('[name="telefono"]').value;
    var mensaje = document.querySelector('[name="mensaje"]').value;
    
    guardarComentario(nombre, apellido, mail, telefono, mensaje);
    
    document.querySelector('.formulario').reset();
} 