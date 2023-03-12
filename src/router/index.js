import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import WomensworkView from '../views/WomensworkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'Homepage', component: HomepageView},
    {path: '/about-me', name: 'About', component: AboutView},
    {path: '/gallery', name: 'Gallery', component: GalleryView },
    { path: '/womenswork', name: 'WomensWork', component: WomensworkView },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
