
const enviarForm = ()=>{
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");
    let messageInput = document.getElementById("message");
    Swal.fire(
        'Éxito!',
        'Datos enviados correctamente!',
        'success'
      )
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
}