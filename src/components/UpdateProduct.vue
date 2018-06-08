<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Actualizar datos del producto</h1>
        <form v-on:submit.prevent="updateProduct">
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input class="input" type="text" v-model="product.name" placeholder="Nombre del producto" required autofocus>
            </div>
          </div>
          <div class="field">
            <label class="label">Precio</label>
            <div class="control">
              <input class="input" type="number" min="0" step="any" v-model="product.price" placeholder="Precio" value="0" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Cantidad</label>
            <div class="control">
              <input class="input" type="number" min="0" step="any" v-model="product.amount" placeholder="Cantidad" value="0" disabled>
            </div>
          </div>
          <div class="field">
            <label class="label">Stock mínimo</label>
            <div class="control">
              <input class="input" type="number" min="0" step="any" v-model="product.minStock" placeholder="Stock mínimo" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Stock Máximo</label>
            <div class="control">
              <input class="input" type="number" min="0" step="any" v-model="product.maxStock" placeholder="Stock máximo" required>
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
          <div class="field">
            <label class="label">Unidad</label>
            <div class="control">
              <label class="radio">
                <input type="radio" name="tipo" value="true" v-model="product.kind" required>
                Perecedero
              </label>
              <label class="radio">
                <input type="radio" name="tipo" value="false" v-model="product.kind">
                No perecedero
              </label>
            </div>
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
                <router-link :to="{ name: 'DisplayProduct'}" class="button is-primary is-rounded">Cancelar</router-link>
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
      product:{},
      provedors:[]
    }
  },
  created(){
    this.getProduct();
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
    getProduct(){
      this.axios.get(url+"product/"+this.$route.params.id)
      .then(res => {
        this.product = res.data;
    });
    },
    updateProduct(){
      this.product.price= parseFloat(this.product.price);
      this.product.amount= parseInt(this.product.amount);
      this.product.minStock= parseInt(this.product.minStock);
      this.product.maxStock= parseInt(this.product.maxStock);
      this.axios.put(url+"product/"+this.$route.params.id, this.product)
      .then( res => {
        this.$router.replace({name: 'DisplayProduct'});
      });
    }
  }
}
</script>
