<template>
  <section>
    <h2>Agregar nuevo libro</h2>

    <form @submit.prevent="guardarLibro">
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

      <button type="submit">Guardar libro</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const libro = reactive({
  titulo: '',
  autor: '',
  editorial: ''
})

const guardarLibro = async () => {
  try {
    await axios.post('http://localhost:3000/libros', libro)

    alert('Libro guardado correctamente')

    router.push('/')
  } catch (error) {
    console.error('Error al guardar el libro:', error)
    alert('Ocurrió un error al guardar el libro')
  }
}
</script>