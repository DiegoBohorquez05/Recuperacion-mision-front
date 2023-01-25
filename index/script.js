count=1
const botonCrear = document.getElementById("crearCliente");
const Cliente = document.getElementById("tabla");

botonCrear.addEventListener("click", () => {
  const Nombre = document.getElementById("Nombre").value;
  const Apellido = document.getElementById("Apellido").value;
  const Nit = document.getElementById("NIT/CC").value;
  const Ciudad = document.getElementById("Ciudad").value;
  const Contacto = document.getElementById("Contacto").value;
  const Direccion = document.getElementById("Direccion").value;
  const Telefono = document.getElementById("Telefono").value;
  const CT = document.getElementById("CupTotal").value;
  const CD = document.getElementById("CupDisponible").value;
  const DG = document.getElementById("DiasGracia").value;

  if (
    Nombre != "" &&
    Apellido != "" &&
    Nit != "" &&
    Ciudad != "Seleccione..." &&
    Contacto != "" &&
    Direccion != "" &&
    Telefono != "" &&
    CT != "" &&
    CD != "" &&
    DG != ""
  ) {
    // console.log(Nombre)
    // console.log(Apellido)
    // console.log(Nit)
    // console.log(Ciudad)
    // console.log(Contacto)
    // console.log(Direccion)
    // console.log(Telefono)
    // console.log(CT)
    // console.log(CD)
    // console.log(DG)
    
    id=count++

    tabla.innerHTML += `<tr><th scope="row" id="id">${id}</th><th scope="row">${Nombre}</th><td>${Apellido}</td><td>${Nit}</td><td>${Direccion}</td><td>${Ciudad}</td><td>${Telefono}</td><td>${CD}</td><td>Activado</td><td>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16" id="editar">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" style="margin-left:30px;" id="borrar">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg></td></tr>`;

    const eliminar = document.getElementById("borrar");

    eliminar.addEventListener('click',(e)=>{
        e.target.parentNode.parentNode.parentNode.remove()
    })

     const editar = document.getElementById("editar");

     editar.addEventListener("click", () => {
       console.log("editar");
     });
  } else {
    alert("Formulario incompleto");
  }
});

  const buscar = document.getElementById("buscar");
  const valorBuscar = document.getElementById("valor").value;
  buscar.addEventListener("click", () => {
     if(valorBuscar!=''){
        console.log('se esta buscando algo')
      if(valorBuscar===tabla){
        console.log(valorBuscar)
      }
     }else{
      alert('No hay nada por buscar')
     }
  });
