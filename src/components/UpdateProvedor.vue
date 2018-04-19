<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Actualizar Proveedor</h1>
        <form v-on:submit.prevent="updateProvedor">
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
            <label class="label">Teléfono</label>
            <div class="control">
              <input class="input" type="tel" v-model="provedor.phone" placeholder="Ingrese un número teléfonico" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="provedor.email" placeholder="Ingrese el email del proveedor" required>
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
      provedor:{}
    }
  },
  created(){
    this.getProvedor();
  },
  methods:{
    getProvedor(){
      const uri = "https://restaurante-backend.herokuapp.com/provedor/";
      this.axios.get(uri+this.$route.params.id)
      .then(res => {
        this.provedor = res.data;
      });
    },
    updateProvedor(){
      const uri = "https://restaurante-backend.herokuapp.com/provedor/";
      this.axios.put(uri+this.$route.params.id, this.provedor)
      .then( res => {
        alert("Proveedor actualizado correctamente!!!");
        this.$router.replace({name: 'DisplayProvedor'});
      });
    }
  }
}
</script>
