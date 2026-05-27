<template>
  <section>
    <h2>Editar libro</h2>

    <p v-if="cargando">Cargando información del libro...</p>

    <form v-else @submit.prevent="actualizarLibro">
      <div>
        <label for="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          v-model="libro.titulo"
          required
        >
      </div>

      <div>
        <label for="autor">Autor:</label>
        <input
          type="text"
          id="autor"
          v-model="libro.autor"
          required
        >
      </div>

      <div>
        <label for="editorial">Editorial:</label>
        <input
          type="text"
          id="editorial"
          v-model="libro.editorial"
          required
        >
      </div>

      <button type="submit">Actualizar libro</button>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const cargando = ref(true)

const libro = reactive({
  titulo: '',
  autor: '',
  editorial: ''
})

const obtenerLibro = async () => {
  try {
    const respuesta = await axios.get(`http://localhost:3000/libros/${route.params.id}`)

    libro.titulo = respuesta.data.titulo
    libro.autor = respuesta.data.autor
    libro.editorial = respuesta.data.editorial
  } catch (error) {
    console.error('Error al obtener el libro:', error)
    alert('No se pudo cargar el libro')
  } finally {
    cargando.value = false
  }
}

const actualizarLibro = async () => {
  try {
    await axios.put(`http://localhost:3000/libros/${route.params.id}`, {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial
    })

    alert('Libro actualizado correctamente')

    router.push('/')
  } catch (error) {
    console.error('Error al actualizar el libro:', error)
    alert('Ocurrió un error al actualizar el libro')
  }
}

onMounted(() => {
  obtenerLibro()
})
</script>