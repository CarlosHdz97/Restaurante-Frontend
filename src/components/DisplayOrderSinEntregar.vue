<template lang="html">
  <div>
  </br>
    <div class="columns">
      <div class="column is-3">
        <router-link :to="{ name: 'CreateProvedor'}" class="button is-link is-rounded">
          <span class="icon is-small is-left">
            <i class="fas fa-plus-square fa-lg"></i>
          </span>
          .  Añadir Pedido
        </router-link>
      </div>
      <div class="column is-8">
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h1 class="title">Pedidos</h1>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Folio</th>
              <th>Total</th>
              <th>Status</th>
              <th>Fecha de entrega</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="pedido in orders">
              <td v-on:click="activar(pedido.id)"><a href="#">{{pedido.id}}</a></td>
              <td>{{pedido.total}}</td>
              <td v-if="pedido.status==1">Entregado</td>
              <td v-else >No entregado</td>
              <td>{{pedido.deliveryDate}}</td>
              <div class="columns">
                <div class="column is-3">
                  <div class="modal" :id="pedido.id">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                      <div class="notification">
                        <p class="is-size-5 has-text-link"><strong>Pedido N°: </strong>{{pedido.id}}</p>
                        <p class="is-size-5 has-text-link">
                          <p v-if="pedido.status==1"><strong>Status: </strong>Recibido</p>
                          <p v-else ><strong>Status: </strong>No entregado</p>
                        </p>
                        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                          <thead>
                            <tr>
                              <th>Producto</th>
                              <th>Cantidad solicitada</th>
                              <th>Precio</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="detalles in pedido.Detalles">
                                <td>{{detalles.name}}</td>
                                <td>{{detalles.productOrder.amount}}</td>
                                <td>{{detalles.productOrder.price}}</td>
                                <td>{{detalles.productOrder.amount * detalles.productOrder.price}}</td>
                            </tr>
                          </tbody>
                        </table>
                        <p class="is-size-4 has-text-danger"><strong>Total: </strong>{{pedido.total}}</p>
                        <p class="is-size-5 has-text-link">Fecha de entrega: </strong>{{pedido.deliveryDate}}</p>
                      </div>
                    </div>
                    <button class="modal-close is-large" aria-label="close" v-on:click="close(pedido.id)"></button>
                  </div>
                </div>
              </div>
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
      orders: []
    }
  },
  created(){
    this.fetchOrders();
  },
  methods:{
    fetchOrders(){
      this.axios.get(url+"order/sinEntregar")
      .then(res=>{
        this.orders = res.data;
      })
      .catch(err => console.log(err));
    },
    activar(id){
      var modal = document.getElementById(id);
      modal.className += " is-active";
    },
    close(id){
      var modal = document.getElementById(id);
      modal.classList.remove("is-active");
    }
  }
}
</script>
