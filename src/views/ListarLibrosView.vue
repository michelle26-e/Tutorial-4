<template>
  <section>
    <h2>Lista de libros</h2>

    <p v-if="cargando">Cargando libros...</p>

    <table v-else border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Editorial</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="libro in libros" :key="libro.id">
          <td>{{ libro.id }}</td>
          <td>{{ libro.titulo }}</td>
          <td>{{ libro.autor }}</td>
          <td>{{ libro.editorial }}</td>
          <td>
            <router-link :to="`/editar/${libro.id}`">
              Editar
            </router-link>

            |
            
            <button @click="eliminarLibro(libro.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const libros = ref([])
const cargando = ref(true)

const obtenerLibros = async () => {
  try {
    const respuesta = await axios.get('http://localhost:3000/libros')
    libros.value = respuesta.data
  } catch (error) {
    console.error('Error al obtener los libros:', error)
  } finally {
    cargando.value = false
  }
}

const eliminarLibro = async (id) => {
  const confirmar = confirm('¿Estás seguro de eliminar este libro?')

  if (!confirmar) {
    return
  }

  try {
    await axios.delete(`http://localhost:3000/libros/${id}`)

    libros.value = libros.value.filter((libro) => libro.id !== id)

    alert('Libro eliminado correctamente')
  } catch (error) {
    console.error('Error al eliminar el libro:', error)
    alert('Ocurrió un error al eliminar el libro')
  }
}

onMounted(() => {
  obtenerLibros()
})
</script>