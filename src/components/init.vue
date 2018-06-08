<template lang="html">
  <div>
    <nav class="level" v-if="!authenticated">
      <!-- Left side -->
      <div class="level-left">

        <div class="level-item">

        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <input class="input" type="email" name="username" v-model="input.username" placeholder="Correo" />
        <input class="input" type="password" name="password" v-model="input.password" placeholder="Contreñas" />
        <button type="button" v-on:click="login()" class="button is-dark">Login</button>
      </div>
    </nav>
    <!-- Main container -->

    <p class="is-size-3">Menú del día</p>
    <div class="columns">
      <div class="column is-3 is-offset-1">
        <article class="message is-info">
          <div class="message-header">
            <p>ESPECIALES</p>
          </div>
          <div class="message-body content">
            <ul>
              <li>SOPA FRIA DE AGUACATE</li>
              <li>FIDEO SECO A LOS 3 CHILES </li>
              <li>FILETE DE ROBALO NEGRO</li>
              <li>SALMÓN 180 GRS.</li>
            </ul>
          </div>
        </article>
      </div>
      <div class="column is-3 is-offset-1">
        <article class="message is-success">
          <div class="message-header">
            <p>ENTRADAS</p>

          </div>
          <div class="message-body content">
            <ul>
              <li>TACOS DE RIB EYE</li>
              <li>CEVICHE PERUANO </li>
              <li>TACO DE ATÚN SAKUDORI</li>
              <li>PROVOLETA CON JAMÓN SERRANO BERENJENAS A LA PARRILLA</li>
              <li>BERENJENAS A LA PARRILLA</li>
            </ul>
          </div>
        </article>
      </div>
      <div class="column is-3 is-offset-1">
        <article class="message is-warning">
          <div class="message-header">
            <p>GUARNICIONES</p>
          </div>
          <div class="message-body content">
            <ul>
              <li>Papas a la Francesa Provenzal</li>
              <li>Cebollitas de cambray</li>
              <li>Papa al horno</li>
              <li>Espárragos</li>
            </ul>
          </div>
        </article>
      </div>
    </div>

  </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                user:{},
                authenticated: Boolean(Number(localStorage.getItem('authenticated')))
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                  this.axios.get(url+"user/"+this.input.username)
                  .then(res => {
                    if (res.data!=null) {
                      this.user = res.data;
                      this.$parent.mockAccount.username = this.user.email;
                      this.$parent.mockAccount.password = this.user.password;
                      if(this.input.username.toLowerCase() == this.$parent.mockAccount.username.toLowerCase() && this.input.password == this.$parent.mockAccount.password) {
                          localStorage.setItem('authenticated',1);
                          this.$emit("authenticated", true);
                          this.$router.replace({ name: "MenuAlmacenista" });
                      } else {
                        alert("Usuario o contraseña erronea");;
                          console.log("The username and / or password is incorrect");
                      }
                    }
                    else{
                      alert("Usuario no registrado");;
                      console.log(this.user);
                    }
                  });
                } else {
                  alert("Ingrese las credenciales solicitadas");
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>
