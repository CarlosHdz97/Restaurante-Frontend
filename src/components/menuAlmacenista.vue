<template lang="html">
  <div>
    </br>
    <div class="level">
      <p class="level-item has-text-centered">
        <a class="title">Menú almacenista</a>
      </br>
      </p>
    </div>
    <div class="columns is-gapless">
      <div class="column">
        <div class="field is-grouped is-grouped-centered">
          <p class="title is-3">Proveedores</p>
        </div>
        <figure class="image is-square">
          <img src="../assets/proveedores.jpeg" alt="Proveedores">
        </figure>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <router-link :to="{ name: 'DisplayProvedor'}" class="button is-link is-rounded">
              Ir
            </router-link>
          </p>
        </div>
      </div>
      <div class="column">
        <div class="field is-grouped is-grouped-centered">
          <p class="title is-3">Productos</p>
        </div>
        <figure class="image is-square">
          <img src="../assets/Productos.jpg" alt="Productos">
        </figure>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <router-link :to="{ name: 'DisplayProduct'}" class="button is-link is-rounded">
              Ir
            </router-link>
          </p>
        </div>
      </div>
      <div class="column">
        <div class="field is-grouped is-grouped-centered">
          <p class="title is-3">Pedidos</p>
        </div>
        <figure class="image is-square">
          <img src="../assets/Pedidos.jpg" alt="Cajero">
        </figure>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <button class="button is-link is-rounded">
              Ir
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
