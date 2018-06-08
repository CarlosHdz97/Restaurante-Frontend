<!--<template>
    <div id="login">
        <h1>Login</h1>
        <input class="input" type="text" name="username" v-model="input.username" placeholder="Username" />
        <input class="input" type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
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
                user:{}
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
-->
