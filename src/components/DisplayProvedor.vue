<template lang="html">
  <div>
  </br>
    <div class="columns">
      <div class="column is-3">
        <router-link :to="{ name: 'CreateProvedor'}" class="button is-link is-rounded">
          <span class="icon is-small is-left">
            <i class="fas fa-plus-square fa-lg"></i>
          </span>
          .  Añadir Proveedor
        </router-link>
      </div>
      <div class="column is-8">
      </div>
      <div class="column is-1">
        <router-link :to="{ name: 'Init'}" class="button is-link is-rounded">
          <span class="icon is-small is-left">
            <i class="fas fa-sign-out-alt fa-lg"></i>
          </span>
        </router-link>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h1 class="title">Proveedores</h1>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="provedor in provedors">
              <td>{{provedor.name}}</td>
              <td><a v-bind:href="'http://maps.google.com/maps/?q='+provedor.address" target="_blank">{{provedor.address}}</a></td>
              <td><a v-bind:href="'tel:'+provedor.phone">{{provedor.phone}}</a></td>
              <td><a v-bind:href="'mailto:'+provedor.email">{{provedor.email}}</a></td>
              <td>{{provedor.description}}</td>
              <td>
                <a href="#" v-on:click="deleteProvedor(provedor.id, provedor.name)">
                  <span class="icon is-small is-left">
                    <i class="fas fa-trash-alt fa-lg"></i>
                  </span>
                </a>
                <router-link :to="{ name: 'UpdateProvedor', params: {id: provedor.id} }">
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
        provedors: []
      }
    },
    created(){
      this.fetchProvedors();
    },
    methods:{
      fetchProvedors(){

        this.axios.get(url+"provedor/")
        .then(res=>{
          this.provedors = res.data;
        })
        .catch(err => console.log(err));
      },
      deleteProvedor(id,name){
        const response = confirm('Estas seguro de eliminar al provedor '+name+'?');
        if(response){
          this.axios.delete(url+"provedor/"+id)
          .then(res =>{
            alert(res.data.provedor);
            for(var i=0; i<this.provedors.length; i++){
              if(this.provedors[i].id==id){
                this.provedors.splice(i,1);
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
