<template>
  <colors class="absolute"/>
  <section class="glasmorphism_container">
    <div class="glasmorphism_content">
      <h1>Error 404</h1>
      <p>Oops! Looks like you've stumbled upon a page that doesn't exist. Maybe you took a wrong turn somewhere or I've misplaced the page. You should go back to safety while I figure that out.</p>
      <RouterLink to="/">
        <button class="mt-[3rem] m-auto">
          <span>Homepage</span>
          <div class="BTN_liquid"></div>
        </button>
      </RouterLink>
    </div>
  </section>
</template>

<script>
import colors from '../../src/components/Colors.vue'

export default {
  components: {
    colors,
  },
}
</script>

<style>
section.glasmorphism_container{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 3rem 0 3rem;
}
.glasmorphism_content{
  width: 400px; 
  border: 1px solid rgba(255,255,255,0.3);
  padding: 40px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  box-shadow: 0 0 40px rgba(0,0,0,0.4);
  color: var(--dark); 
  text-align: center;
}
</style>