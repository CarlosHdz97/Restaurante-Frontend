<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Agregar nuevo producto al almacén</h1>
        <form v-on:submit.prevent="addProduct">
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input class="input" v-on:keydown="validate" type="text" v-model="product.name" placeholder="Nombre del producto" required autofocus>
            </div>
          </div>
          <div class="field">
            <label class="label">Precio</label>
            <div class="control">
              <input class="input" v-on:keydown="validate" type="number" min="0" step="any" v-model="product.price" placeholder="Precio" value="0" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Cantidad</label>
            <div class="control">
              <input class="input" type="number" min="0" step="any" v-model="product.amount" placeholder="Cantidad" value="0">
            </div>
          </div>
          <div class="field">
            <label class="label">Stock mínimo</label>
            <div class="control">
              <input class="input" id="min" type="number" min="0" step="any" v-model="product.minStock" placeholder="Stock mínimo" value="0" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Stock Máximo</label>
            <div class="control">
              <input class="input" id="max" type="number" min="0" step="any" v-model="product.maxStock" placeholder="Stock máximo" value="0" required>
            </div>
          </div>
          <div class="field" >
            <label class="label">Unidad</label>
            <div class="control">
              <div class="select is-primary">
                <select v-model="product.unit" required>
                  <option value="Kg">Kg</option>
                  <option value="Gr">Gr</option>
                  <option value="Pzs">Pzs</option>
                  <option value="L">L</option>
                  <option value="Ml">Ml</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control">
            <input type="radio" name="answer" value="true" v-model="product.kind" checked required>
            <label class="radio">
              Perecedero
            </label>
            <label class="radio">
              <input type="radio" name="answer" value="false" v-model="product.kind">
              No perecedero
            </label>
          </div>
          <div class="field">
            <label class="label">Proveedor</label>
            <div class="control">
              <div class="select is-primary">
                <select v-model="product.provedorId" required>
                  <option v-for="provedor in provedors" v-bind:value="provedor.id">{{provedor.name}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button class="button is-link is-rounded">
                Guardar
              </button>
            </p>
            <p class="control">
              <a class="button is-light">
                <router-link :to="{ name: 'DisplayProduct'}" class="button is-primary is-rounded">Cancelar</router-link>
              </a>
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
      provedors:[],
      product:{}
    }
  },
  created(){
    this.fetchProvedor();
  },
  methods:{
    fetchProvedor(){
      this.axios.get(url+"provedor/")
      .then(res=>{
        this.provedors = res.data;
      })
      .catch(err => console.log(err));
    },
    addProduct() {
      this.product.price= parseFloat(this.product.price);
      this.product.amount= parseFloat(this.product.amount);
      this.product.minStock= parseFloat(this.product.minStock);
      this.product.maxStock= parseFloat(this.product.maxStock);
      function boolean(string){
        if(string=="true") return true
        else return false
      }
      this.product.kind = boolean(this.product.kind);
      this.axios.post(url+"product/", this.product)
      .then(res => {
        this.$router.replace({name :'DisplayProduct'})
      })
      .catch(err => console.log(err));
    },
    validate() {
      var min = document.getElementById("min");
      var max = document.getElementById("max");

      max.addEventListener("keyup", function (event) {
        if (max.value<min.value) {
          max.setCustomValidity("El stock máximo no puede ser menor al stock mínimo");
        } else if (min.value==max.value) {
          max.setCustomValidity("El stock máximo no puede ser igual al stock mínimo");
        }else{
          this.setCustomValidity("");
        }
      });
    }
  }
}
</script>
