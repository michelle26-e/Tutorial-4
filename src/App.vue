<template>
  <div class="contenedor">
    <h1>CRUD de Libros</h1>

    <nav>
      <router-link to="/">Lista de libros</router-link>
      |
      <router-link to="/crear">Agregar libro</router-link>
    </nav>

    <router-view />
  </div>
</template>