<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Agregar datos de nuevo proveedor</h1>
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
        <form v-on:submit.prevent="addProvedor">
          <div class="field">
            <label class="label">Nombre del proveedor</label>
            <div class="control">
              <input class="input" type="text" v-model="provedor.name" placeholder="Ingrese el nombre del proveedor" required autofocus>
            </div>
          </div>
          <div class="field">
            <label class="label">Dirección</label>
            <div class="control">
              <input class="input" type="address" v-model="provedor.address" placeholder="Ingrese la dirección de la empresa" required>
            </div>
          </div>
          <div class="field">
            <label class="label" >Teléfono</label>
            <div class="control">
              <input class="input tel" v-on:keydown="validate" type="tel" v-model="provedor.phone" placeholder="Ingrese un número teléfonico" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input correo" type="email" v-model="provedor.email" placeholder="Ingrese el email del proveedor" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Descripción</label>
            <div class="control">
              <textarea class="textarea is-info" type="text" placeholder="Anotaciones del proveedor" v-model="provedor.description"></textarea>
            </div>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button class="button is-link is-rounded">
                Guardar
              </button>
            </p>
            <p class="control">
              <router-link :to="{ name: 'DisplayProvedor'}" class="button is-primary is-rounded">Cancelar</router-link>
            </p>
          </div>
</form>
</div>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      provedor:{},
      errors:[]
    }
  },
  created(){
  },
  methods:{
    addProvedor() {
      this.axios.post(url+"provedor/", this.provedor)
      .then(res => {
        alert("Proveedor agregado correctamente!!!");
        this.$router.replace({name :'DisplayProvedor'});
      })
      .catch(err => console.log(err));
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateTelefono(number) {
      var re=/^[1-9]{8,12}$/;
      return re.test(parseInt(number));
    },
    validate(){
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

    }
  }
}
</script>
