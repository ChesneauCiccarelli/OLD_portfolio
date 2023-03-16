import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'

import WomensworkView from '../views/WomensworkView.vue'
import DeepDownView from '../views/DeepDownView.vue'
import FulmineView from '../views/FulmineView.vue'

import Page404View from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'Homepage', component: HomepageView},
    {path: '/about-me', name: 'About', component: AboutView},
    { path: '/gallery', name: 'Gallery', component: GalleryView },
    
    { path: '/womenswork', name: 'WomensWork', component: WomensworkView },
    { path: '/deepdown', name: 'DeepDown', component: DeepDownView },
    { path: '/fulmine', name: 'Fulmine', component: FulmineView },
    
    {path: "/:catchAll(.*)",name: "Page404", component: Page404View,}, 

  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
