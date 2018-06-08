<template>
  <div lang="html">
    <div class="container">
      <div id="app">
        <div id="nav">

              <div class="wrap " v-if="authenticated">
                <span class="decor"></span>
                <nav>
                  <ul class="primary">
                    <li>
                      <router-link   to="/almacenista" replace>Inicio</router-link>
                    </li>
                    <li>
                      <router-link   to="/almacenista" replace>Proveedores</router-link>
                      <ul class="sub">
                        <router-link :to="{ name: 'DisplayProvedor'}">
                          Registrados
                        </router-link>
                        <router-link :to="{ name: 'CreateProvedor'}">
                          Añadir nuevo proveedor
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <router-link   to="/almacenista" replace>Productos</router-link>
                      <ul class="sub">
                        <router-link :to="{ name: 'DisplayProduct'}">
                          Registrados
                        </router-link>
                        <router-link :to="{ name: 'DisplayProductSoldOut'}">
                          Agotados
                        </router-link>
                        <router-link :to="{ name: 'DisplayProductSoonSellOut'}">
                          Próximos a agotarse
                        </router-link>
                        <router-link :to="{ name: 'CreateProduct'}">
                          Añadir nuevo producto
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <router-link   to="/almacenista" replace>Pedidos</router-link>
                      <ul class="sub">
                        <router-link :to="{ name: 'DisplayOrder'}">
                          Todos
                        </router-link>
                        <router-link :to="{ name: 'DisplayOrderSinEntregar'}">
                          Próximos a ser entregados
                        </router-link>
                        <router-link :to="{ name: 'CreateOrder'}">
                          Solicitar pedido
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <router-link   to="/almacenista" replace>Platillos</router-link>
                      <ul class="sub">
                        <a>Generados</a>
                        <a>Crear Platillo</a>
                      </ul>
                    </li>
                    <li>
                      <router-link   to="/almacenista" replace>Carta</router-link>
                      <ul class="sub">
                        <a>Menú del dia</a>
                        <a>Crear Menú</a>
                      </ul>
                    </li>
                    <li>
                      <router-link   to="/almacenista" replace>Ordenes</router-link>
                      <ul class="sub">
                        <a>Tomar orden del comensal</a>
                        <a>Comanda</a>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/" v-on:click.native="logout()" replace ><i class="fas fa-power-off"></i></router-link>
                    </li>
                  </ul>
                </nav>
              </div>

        </nav>
        </div>
        <router-view @authenticated="setAuthenticated" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'App',
      data() {
          return {
              authenticated: Boolean(Number(localStorage.getItem('authenticated'))),
              mockAccount: {}
          }
      },
      mounted() {
          if(!this.authenticated) {
              this.$router.replace({ name: "Init" });
          }
      },
      methods: {
          setAuthenticated(status) {
              this.authenticated = status;
          },
          logout() {
              localStorage.setItem('authenticated',0);
              this.authenticated = false;
          }
      }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>
<style media="screen">
/* A simple, css only, (some-what) responsive menu */

body {
  background: #ccc;
  font-family: helvetica, arial, serif;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
}

.wrap {
  display: inline-block;
  -webkit-box-shadow: 0 0 70px #fff;
  -moz-box-shadow: 0 0 70px #fff;
  box-shadow: 0 0 70px #fff;
  margin-top: 40px;
}

/* a little "umph" */
.decor {
  background: #000000;
  background: -webkit-linear-gradient(left, #000000 50%, #2d302f 50%);
  background: -moz-linear-gradient(left, #000000 50%, #2d302f 50%);
  background: -o-linear-gradient(left, #000000 50%, #2d302f 50%);
  background: linear-gradient(left, white 50%, #e0095d 50%);
  background-size: 50px 25%;;
  padding: 2px;
  display: block;
}

li a {
  text-decoration: none;
  color: #ffffff;
  display: block;
}

ul {
  list-style: none;
  position: relative;
  text-align: left;
}

li {
  float: left;
}

/* clear'n floats */
ul:after {
  clear: both;
}

ul:before,
ul:after {
    content: " ";
    display: table;
}

nav {
  position: relative;
  background: #0f0f0f;
  /*background-image: -webkit-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  background-image: -moz-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  background-image: -o-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  background-image: linear-gradient(bottom, #2B2B2B 7%, #333333 100%);*/
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #0E0E0E;
  -webkit-box-shadow: 2px 2px 3px #888;
  -moz-box-shadow: 2px 2px 3px #888;
  box-shadow: 2px 2px 3px #888;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

/* prime */
ul.primary li a {
  display: block;
  padding: 20px 30px;
  border-right: 1px solid #3D3D3D;
}

ul.primary li:last-child a {
  border-right: none;
}

ul.primary li a:hover {

  color: #000;
}

/* subs */
ul.sub {
  position: absolute;
  z-index: 200;
  box-shadow: 2px 2px 0 #BEBEBE;
  width: 35%;
  display:none;
}

ul.sub li {
  float: none;
  margin: 0;
}

ul.sub li a {
  border-bottom: 1px dotted #ccc;
  border-right: none;
  color: #000;
  padding: 15px 30px;
}

ul.sub li:last-child a {
  border-bottom: none;
}

ul.sub li a:hover {
  color: #000;
  background: #eeeeee;
}

/* sub display*/
ul.primary li:hover ul {
  display: block;
  background: #fff;
}

/* keeps the tab background white */
ul.primary li:hover a {
  background: #fff;
  color: #666;
  text-shadow: none;
}

ul.primary li:hover > a{
  color: #000;
}

@media only screen and (max-width: 600px) {
  .decor {
    padding: 3px;
  }

  .wrap {
    width: 100%;
    margin-top: 0px;
  }

   li {
    float: none;
  }

  ul.primary li:hover a {
    background: none;
    color: #8B8B8B;
    text-shadow: 1px 1px #000;
  }

  ul.primary li:hover ul {
    display: block;
    background: #272727;
    color: #fff;
  }

  ul.sub {
    display: block;
    position: static;
    box-shadow: none;
    width: 100%;
  }

  ul.sub li a {
    background: #272727;
  	border: none;
    color: #8B8B8B;
  }

  ul.sub li a:hover {
    color: #ccc;
    background: none;
  }
}

</style>
