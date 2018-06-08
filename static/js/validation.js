function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validateTelefono(number) {
  var re=/^[1-9]{8,12}$/;
  return re.test(parseInt(number));
}

window.addEventListener('load', validaciones, false);
function validaciones(){
  //validaciones de email
  var correo = document.getElementsByClassName("correo");
  for(var i=0; i<correo.length; i++){
    correo[i].addEventListener("keyup", function (event) {
      if (!validateEmail(this.value)) {
        this.setCustomValidity("Ingrese una dirección de correo valida! ej: usuario@dominio.terminación");
      } else {
        this.setCustomValidity("");
        validateEmail(this.value);
      }
    });
  }

//validaciones de nímero telefonico
  var number = document.getElementsByClassName("tel");
  for(var i=0; i<number.length; i++){
    number[i].addEventListener("keyup", function (event) {
       if (!validateTelefono(this.value)) {
         this.setCustomValidity("Ingrese una número de teléfono valido");
    } else {
      this.setCustomValidity("");
      validateTelefono(this.value)
    }
  });
  }

}
