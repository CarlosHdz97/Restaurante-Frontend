<template lang="html">
  <div>
  </br>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h1 class="title">Productos próximos a agotarse</h1>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Existencia</th>
              <th>Stock mínimo</th>
              <th>Stock máximo</th>
              <th>Tipo</th>
              <th>Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="product in products">
              <td>{{product.name}}</td>
              <td>{{product.amount + " " + product.unit}}</td>
              <td>{{product.minStock + " " + product.unit}}</td>
              <td>{{product.maxStock + " " + product.unit}}</td>
              <td v-if="product.kind==true">Perecedero</td>
              <td v-else >No perecedero</td>
              <td>{{product.provedor.name}}</td>
              <td>
                <a href="#" class="button is-dark">Realizar pedido</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="columns">
      <div class="column is-2 is-offset-10">
        <p class="control">
          <a class="button is-light">
            <router-link :to="{ name: 'MenuAlmacenista'}" class="button is-link is-rounded">
              <span class="icon is-small is-left">
                <i class="fas fa-arrow-left fa-lg"></i>
              </span>
              . Volver al menú
            </router-link>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      products: []
    }
  },
  created(){
    this.fetchProducts();
  },
  methods:{
    fetchProducts(){
      this.axios.get(url+"product/soonSellOut")
      .then(res=>{
        this.products = res.data;
        console.log(url+"product/soldOut");
        console.log(this.products);
      })
      .catch(err => console.log(err));
    }
  }
}
</script>
