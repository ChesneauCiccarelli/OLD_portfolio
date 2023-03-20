<template>
  <section id="project">
    <article class="project up">
      <div class="project_header mt-[20rem]">
        <h1 class="project_header-title">A journey trought my work</h1>
      </div>

      <div class="project_layout">
        <div class="project_item">
          <div class="project_item-info right">
            <RouterLink class="header_container-homelink" to="/womenswork">
              <h1 class="underlinelink">Women's Work</h1>
            </RouterLink>
            <h2>The emancipation of women's work</h2>
            <p>From the Amazons to the #Metoo movement, Women's Work develops a vision of women in our society through the differentiation of work by gender. It is a discovery of the history behind the emancipation of women's work through time.</p>
            <RouterLink class="header_container-homelink" to="/womenswork">
              <button>
                <span>See more</span>
                <div class="BTN_liquid"></div>
              </button>
            </RouterLink>
          </div>
          <RouterLink class="project_img right" to="/womenswork">
            <img class="rounded-[20px] m-auto" src="/public/img/ww.png" alt="Women's Work Mock">
          </RouterLink>
        </div>

        <div class="project_item">
          <div class="project_item-info right">
            <RouterLink class="header_container-homelink" to="/deepdown">
              <h1 class="underlinelink">Deep Down festival</h1>
            </RouterLink>
            <h2>Branding of a music festival</h2>
            <p>The Deep Down festival is a memento of electronic music and its greatest aspects. The name brings together the two biggest electronic genres known to the general public which are House (or Deep House) and Chillout (also called Down Tempo). The idea is to dive into the deepest part of the musical genre by going over everything that made up its universe.</p>
            <RouterLink class="header_container-homelink" to="/deepdown">
              <button>
                <span>See more</span>
                <div class="BTN_liquid"></div>
              </button>
            </RouterLink>
          </div>
          <RouterLink class="project_img right" to="/deepdown">
            <img class="rounded-[20px] m-auto" src="/public/img/dd-homepage.png" alt="Deep Down Festival mock up">
          </RouterLink>
        </div>

        <div class="project_item">
          <div class="project_item-info right">
            <RouterLink class="header_container-homelink" to="/fulmine">
              <h1 class="underlinelink">Fulmine</h1>
            </RouterLink>
            <h2>Designing a brand style guide</h2>
            <p>What is a Brand ? What is Brand Identity ? What is a Brand Guidelines ? What is a logo ? Discover it with the creation of a brand new brand of electric super sports car that can revolutionise the world of motoring.</p>
            <RouterLink class="header_container-homelink" to="/fulmine">
              <button>
                <span>See more</span>
                <div class="BTN_liquid"></div>
              </button>
            </RouterLink>
          </div>
          <RouterLink class="project_img right" to="/fulmine">
            <img class="rounded-[20px] m-auto" src="/public/img/ful-bsg.png" alt="Deep Down Festival mock up">
          </RouterLink>
        </div>

        <h1 class="ANIM_shine mb-[10rem] text-center">More to come</h1>
      </div>
    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style>
/* ===== Projet ===== */
#project .project {
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 8% 0 8%;
}
#project .project_layout {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20rem;
}
#project .project_item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: min-content;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
  gap: 2rem;
}
#project .project_item-info {
  flex-basis: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: var(--black);
}
#project .project_item-info h1 {
  font-size: var(--xl);
  font-family: var(--display);
}
.project_header {
  margin: 0rem 0rem 15rem 0rem;
  text-align: center;
}
#project .project_item-info h2 {
  font-size: var(--l);
  font-family: var(--btn);
  text-transform: uppercase;
  text-shadow: 1px 1px 1px var(--accent);
  color: var(--white);
  margin: 1rem 0px 0.5rem 0rem;
}
#project .project_item-info h2:hover {
  text-transform: uppercase;
}
#project .project_item-info p {
  color: var(--white);
  margin-bottom: 2rem;
}
#project .project_img {
  flex-basis: 50%;
  overflow: hidden;
  position: relative;
}
#project .project_img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
}
#project .project_img img {
  transition: 0.3s ease transform;
  max-height: 500px;
}
#project .project_img:hover img {
  transform: scale(1.1);
}



/* ===== Laptop ===== */
@media only screen and (min-width: 1025px) {
  /* ===== Project ===== */
  #project .project_item {
    flex-direction: row;
  }
  #project .project_item:nth-child(even) {
    flex-direction: row-reverse;
  }
  #project .project_item {
    height: fit-content;
    margin: 0;
    width: 100%;
    border-radius: 0;
  }
  #project .all-projects .project-info {
    height: 100%;
  }
  #project .all-projects .project-img {
    height: 100%;
  }
  .project_header-title {
    margin-left: 0rem;
  }
}</style>