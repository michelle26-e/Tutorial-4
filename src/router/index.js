import { createRouter, createWebHistory } from 'vue-router'
import ListarLibrosView from '../views/ListarLibrosView.vue'
import CrearLibroView from '../views/CrearLibroView.vue'
import EditarLibroView from '../views/EditarLibroView.vue'

const routes = [
  {
    path: '/',
    name: 'listar-libros',
    component: ListarLibrosView
  },
  {
    path: '/crear',
    name: 'crear-libro',
    component: CrearLibroView
  },
  {
    path: '/editar/:id',
    name: 'editar-libro',
    component: EditarLibroView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router