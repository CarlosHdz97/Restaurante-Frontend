<template lang="html">
  <div>
    <div class="columns">
      <div class="column">
        <p class="title is-3">Notificaciones</p>
        <div class="notification is-info" v-for="order in orders">
          <button class="delete"></button>
          Hoy se surtira el pedido <strong>{{order.id}}</strong>
        </div>
        <div class="notification is-danger" v-for="productSoldOut in productsSoldOut">
          <button class="delete"></button>
          El producto <strong>{{productSoldOut.name}}</strong> esta inexistente y es requerido para futuros platillos
        </div>
        <div class="notification is-warning" v-for="productSoonSellOut in productsSoonSellOut">
          <button class="delete"></button>
          El producto <strong>{{productSoonSellOut.name}}</strong> esta por llegar al stock minimo y es requerido para futuros platillos
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      orders: [],
      productsSoldOut:[],
      productsSoonSellOut:[]
    }
  },
  created(){
    this.fetchOrders();
    this.fetchProducts();
  },
  methods:{
    fetchOrders(){
      this.axios.get(url+"order/now")
      .then(res=>{
        this.orders = res.data;
      })
      .catch(err => console.log(err));
    },
    fetchProducts(){
      this.axios.get(url+"product/soldOut")
      .then(res=>{
        this.productsSoldOut = res.data;
      })
      .catch(err => console.log(err));
      this.axios.get(url+"product/soonSellOut")
      .then(res=>{
        this.productsSoonSellOut = res.data;
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
