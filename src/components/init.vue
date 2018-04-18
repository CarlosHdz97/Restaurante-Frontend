<template lang="html">
<div>
  <div class="level">
    <p class="level-item has-text-centered">
      <a class="title">Bienvenido al Sistema</a>
    </p>
  </div>
  <div class="columns is-gapless">
    <div class="column">
      <div class="field is-grouped is-grouped-centered">
        <p class="title is-3">Almacenista</p>
      </div>
      <figure class="image is-square">
        <img src="../assets/almacenista.jpg" alt="Almacenista">
      </figure>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <router-link :to="{ name: 'MenuAlmacenista'}" class="button is-link is-rounded">Iniciar sesión</router-link>
        </p>
      </div>
    </div>
    <div class="column">
      <div class="field is-grouped is-grouped-centered">
        <p class="title is-3">Gerente</p>
      </div>
      <figure class="image is-square">
        <img src="../assets/gerente.jpg" alt="Gerente">
      </figure>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button class="button is-link is-rounded">
            Iniciar sesión
          </button>
        </p>
      </div>
    </div>
    <div class="column">
      <div class="field is-grouped is-grouped-centered">
        <p class="title is-3">Chef</p>
      </div>
      <figure class="image is-square">
        <img src="../assets/chef.png" alt="Chef">
      </figure>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button class="button is-link is-rounded">
            Iniciar sesión
          </button>
        </p>
      </div>
    </div>
    <div class="column">
      <div class="field is-grouped is-grouped-centered">
        <p class="title is-3">Cajero</p>
      </div>
      <figure class="image is-square">
        <img src="../assets/cajero.png" alt="Cajero">
      </figure>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button class="button is-link is-rounded">
            Iniciar sesión
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>
