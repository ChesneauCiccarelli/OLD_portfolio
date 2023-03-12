<template>
  <section id="project">
    <article class="project">
      <div class="project_header">
        <h1 class="project_header-title">A journey trought my work</h1>
      </div>

      <div class="project_layout">
        <div class="project_item">
          <div class="project_item-info">
            <RouterLink class="header_container-homelink" to="/womenswork">
              <h1 class="underlinelink">Women's Work, smartphone experience</h1>
            </RouterLink>
            <h2>The emancipation of women's work</h2>
            <p>From the Amazons to the #Metoo movement, the faces of feminism. Within the framework of the 1st semester of the BUT MMI the students of the promotion had to carry out a site “mobile first”, around feminism and its aspects. Women's Work develops a vision of women in our society through the differentiation of work by gender. It is a discovery of the history behind the emancipation of women's work through time.</p>
            <RouterLink class="header_container-homelink" to="/womenswork">
              <button>
                <span>See more</span>
                <div class="BTN_liquid"></div>
              </button>
            </RouterLink>
          </div>
          <RouterLink class="project_img" to="/womenswork">
            <img src="/public/img/ww.png" alt="Women's Work Mock up">
          </RouterLink>
        </div>

        <div class="project_item">
          <div class="project_item-info">
            <RouterLink class="header_container-homelink" to="/womenswork">
              <h1 class="underlinelink">Women's Work, smartphone experience</h1>
            </RouterLink>
            <h2>The emancipation of women's work</h2>
            <p>From the Amazons to the #Metoo movement, the faces of feminism. Within the framework of the 1st semester of the BUT MMI the students of the promotion had to carry out a site “mobile first”, around feminism and its aspects. Women's Work develops a vision of women in our society through the differentiation of work by gender. It is a discovery of the history behind the emancipation of women's work through time.</p>
            <RouterLink class="header_container-homelink" to="/womenswork">
              <button>
                <span>See more</span>
                <div class="BTN_liquid"></div>
              </button>
            </RouterLink>
          </div>
          <RouterLink class="project_img" to="/womenswork">
            <img src="/public/img/ww.png" alt="Women's Work Mock up">
          </RouterLink>
        </div>

        <div class="project_item">
          <div class="project_item-info">
            <RouterLink class="header_container-homelink" to="/womenswork">
              <h1 class="underlinelink">Women's Work, smartphone experience</h1>
            </RouterLink>
            <h2>The emancipation of women's work</h2>
            <p>From the Amazons to the #Metoo movement, the faces of feminism. Within the framework of the 1st semester of the BUT MMI the students of the promotion had to carry out a site “mobile first”, around feminism and its aspects. Women's Work develops a vision of women in our society through the differentiation of work by gender. It is a discovery of the history behind the emancipation of women's work through time.</p>
            <RouterLink class="header_container-homelink" to="/womenswork">
              <button>
                <span>See more</span>
                <div class="BTN_liquid"></div>
              </button>
            </RouterLink>
          </div>
          <RouterLink class="project_img" to="/womenswork">
            <img src="/public/img/ww.png" alt="Women's Work Mock up">
          </RouterLink>
        </div>
        
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
  gap: 15rem;
}
#project .project_item {
  display: flex;
  align-items: stretch;
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
  font-size: var(--l);
  font-family: var(--btn);
}
.project_header {
  margin: 0rem 0rem 15rem 0rem;
  text-align: center;
}
#project .project_item-info h2 {
  font-size: var(--l);
  font-family: var(--display);
  text-transform: lowercase;
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