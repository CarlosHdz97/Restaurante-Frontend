<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-12">
        <h1 class="title">Solicitar nuevo pedido</h1>
        <form v-on:submit.prevent="addOrder">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Proveedor:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <div class="select is-primary" >
                    <select v-on:change="productsProvedor()" v-model="detail.provedorId" required id="provedor">
                      <option  v-for="provedor in provedors" :value="provedor.id">{{provedor.name}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Producto:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <div class="select is-primary" >
                    <select v-model="detail.productId" id="producto" class="necesario">
                      <option  v-for="product in products" :value="product.id">{{product.name}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <label class="label">Precio por <span v-if="detail.productId"><span v-for="product in products">
                <span v-if="product.id == detail.productId">
                  <strong class="is-text-info">{{product.unit}}</strong>
                </span>
              </span></span>: </label>
              <div class="field">
                <div class="control">
                  <td v-if="detail.productId"><div v-for="product in products">
                    <div v-if="product.id == detail.productId">
                      <input id="precio" class="input help-size" type="number" placeholder="precio" :value="product.price" disabled>
                      <!--<strong class="is-text-info">{{product.price}}</strong>-->
                    </div>
                  </div></td>
                  <td v-else ></td>
                </div>
              </div>
              <label class="label">Cantidad de
                <span v-if="detail.productId"><span v-for="product in products">
                  <span v-if="product.id == detail.productId">
                    <strong class="is-text-info">{{product.unit}}</strong>
                  </span>
                </span></span>
                <td v-else ></td> a solicitar: </label>
              <div class="field">
                <div class="control">
                  <span v-if="detail.productId"><span v-for="product in products">
                    <span v-if="product.id == detail.productId">
                      <span v-if="product.unit == 'Pzs'"><input id="cantidad" class="input help-size" v-model="detail.cantidad" type="number" min="1" placeholder="Cantidad" value="1"></span>
                      <span v-else><input id="cantidad" class="input help-size" v-model="detail.cantidad" type="number" min="0.01" step="any"  placeholder="Cantidad" value="1"></span>
                    </span>
                  </span>
                </span>
                </div>
              </div>
            </div>
            <span class="button is-success" v-on:click="agregarProducto()">
              <span class="icon is-small is-left">
                <i class="fas fa-plus-square fa-lg"></i>
              </span>
              .  Añadir Producto
            </span>
          </div>
          <div>Total:
            <span v-if="detail.productId"><span v-for="product in products">
              <span v-if="product.id == detail.productId">
                <strong class="is-text-info">{{product.price * getAmount()}}</strong>
              </span>
            </span></span>
          </div><br>
          <input type="submit" name="" value="Guardar" class="button is-link is-rounded">
        </form>
      </div>
    </div>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <p class="is-size-3">Detalles del pedido</p>
        <table class="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad solicitada</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>68</td>
              <td>36</td>
              <td>+32</td>
              <td>81</td>
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
    return {
      provedors:[],
      products:[],
      detail:{
        cantidad:"0"
      },
      orderDetails:[]
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
    agregarProducto(){
      var product = document.getElementById('producto');
      var amount = document.getElementById('cantidad');
      var price = document.getElementById('precio');
      alert(product.value + " " + amount.value+ " " + price.value);
      var detalle = {
        "amount":parseFloat(amount.value),
        "price":parseFloat(price.value),
        "productId":parseFloat(amount.value)
      }
    this.orderDetails.push(detalle);
    console.log(this.orderDetails);

  },
    addOrder() {
      //modificar--------------------------------------------------
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
    productsProvedor(id){
      var provedor = document.getElementById("provedor");
      this.axios.get(url+"product/provedor/"+provedor.value)
      .then(res=>{
        this.products = res.data;
      })
      .catch(err => console.log(err));
    },
    getAmount(){
      return this.detail.cantidad
    }
  }
}
</script>
