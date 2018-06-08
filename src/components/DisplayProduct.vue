<template lang="html">
  <div>
  </br>
    <div class="columns">
      <div class="column is-3">
        <router-link :to="{ name: 'CreateProduct'}" class="button is-link is-rounded">
          <span class="icon is-small is-left">
            <i class="fas fa-plus-square fa-lg"></i>
          </span>
          .  Añadir Producto
        </router-link>
      </div>
      <div class="column is-8">
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h1 class="title">Productos en inventario</h1>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Existencia</th>
              <th>Stock minimo</th>
              <th>Stock maximo</th>
              <th>Tipo</th>
              <th>Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="product in products">
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td>{{product.amount + " " + product.unit}}</td>
              <td>{{product.minStock + " " + product.unit}}</td>
              <td>{{product.maxStock + " " + product.unit}}</td>
              <td v-if="product.kind==1">Perecedero</td>
              <td v-else >No perecedero</td>
              <td>{{product.provedor.name}}</td>
              <td>
                <span v-on:click="deleteProduct(product.id, product.name)">
                  <span class="icon is-small is-left">
                    <i class="fas fa-trash-alt fa-lg"></i>
                  </span>
                </span>
                <router-link :to="{ name: 'UpdateProduct', params: {id: product.id} }">
                  <span class="icon is-small is-left">
                    <i class="fas fa-pen-square fa-lg"></i>
                  </span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
        this.axios.get(url+"product")
        .then(res=>{
          this.products = res.data;
        })
        .catch(err => console.log(err));
      },
      deleteProduct(id,name){
        const response = confirm('Estas seguro de eliminar el producto '+name+'?');
        if(response){
          this.axios.delete(url+"product/"+id)
          .then(res=>{
            alert(res.data.product);
            for(var i=0; i<this.products.length; i++){
              if(this.products[i].id==id){
                this.products.splice(i,1);
                break
              }
            }
          })
          .catch(err => console.log(err));
        }
      }
    }
  }
</script>
