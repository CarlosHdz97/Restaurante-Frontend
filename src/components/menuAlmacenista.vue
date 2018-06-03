<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter title is-4">
        Bienvenido almacenistas
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-quarter">
        <br>
        <aside class="menu">
          <p class="menu-label">
            Menú
          </p>
          <ul class="menu-list">
            <router-link :to="{ name: 'DisplayProvedor'}">
              Proveedores
            </router-link>
            <li>
              <a class="is-active">Productos</a>
              <ul>
                <router-link :to="{ name: 'DisplayProduct'}">
                  Todos
                </router-link>
                <li><a>Próximos a agotarse</a></li>
                <li><a>Agotados</a></li>
                <li><a>Próximos a caducar</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">Pedidos</a>
              <ul>
                <li><a>Todos</a></li>
                <li><a>Próximos a ser entregados</a></li>
              </ul>
            </li>
            <router-link :to="{ name: 'Init'}">
              Cerrar sesión
              <span class="icon is-small is-left">
                <i class="fas fa-sign-out-alt fa-lg"></i>
              </span>
            </router-link>
          </ul>
        </aside>
      </div>
      <div class="column">
        <p class="title is-3">Notificaciones</p>
        <div class="notification is-info">
          <button class="delete"></button>
          Hoy se surtira el pedido <strong>Tal.....</strong>
        </div>
        <div class="notification is-danger">
          <button class="delete"></button>
          El producto <strong>tal.....</strong> esta inexistente y es requerido para futuros platillos
        </div>
        <div class="notification is-warning">
          <button class="delete"></button>
          El producto <strong>tal.......</strong> esta por llegar al stock minimo y es requerido para futuros platillos
        </div>
      </div>
    </div>
  </div>
</template>
