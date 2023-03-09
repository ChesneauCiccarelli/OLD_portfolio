<script>

</script>

<template>
  <section class="template">
    <article id="about">
      <div class="about">
        <div class="about_left">
          <figure>
            <img src="/public/img/MonogramChrome@2x.png" alt="Monogram Lilian Chesneau">
          </figure>
        </div>
        <div class="about_right">
          <h1>Hello</h1>
          <h2>I'm Lilian Chesneau</h2>
          <div class="about_right-txt">
            <p>I am a 21-year-old student from <a class="underlinelink" href="https://www.google.com/maps/place/10000+Troyes,+France/@48.2923894,4.041115,13z/data=!3m1!4b1!4m5!3m4!1s0x47ee9857e787b7b1:0x57dd125566e84f75!8m2!3d48.2973451!4d4.0744009" target="_blank" rel="noopener noreferrer">Troyes</a>, a charming French city located in the Aube department. Currently, I am in my second year of studies at the IUT of Belfort-Montbéliard, where I am pursuing a degree in the "Métiers du Multimédia et de l'Internet" department.</p>
            <p>During my academic journey, I had the privilege of attending a semester of class at <a class="underlinelink" href="https://www.vaniercollege.qc.ca/" target="_blank" rel="noopener noreferrer">Vanier College</a> in Montreal, QC, where I studied in the Micropublishing and Hypermedia department. This study abroad experience allowed me to broaden my horizons, learn from different perspectives, and immerse myself in a new culture. You can learn more about it below</p>
            <p>This portfolio showcase some of my work, and I invite you to take your time to explore it in more detail. You can also click on the "Learn More" button below to contact me or find out more about me.</p>
          </div>
          <RouterLink to="/about-me">
            <button class="mt-[3rem]">
              <span>Learn more</span>
              <div class="liquid"></div>
            </button>
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<style>
  section.template {
    margin-bottom: 5rem;
  }

  /* ===== AboutMe ===== */
  article#about {
    display: flex;
    padding-top: 10rem;
    padding-bottom: 5rem;
    width: 100%;
  }
  #about .about {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }
  #about .about_right h2 {
    margin-bottom: 10px;
  }
  #about .about_right p {
    margin-bottom: 2rem;
  }
  #about .about_right p.btn_underlineGradient-txt-p {
    margin-bottom: 0px;
  }
  #about .about_right-txt {
    margin-left: 8%;
    margin-right: 8%;
  }
  #about .about_right-txt p:first-child {
    margin-top: 5rem;
  }
  #about .about_right {
    margin-top: 2rem;
  }



  /* ===== Tablet ===== */
  @media only screen and (min-width: 768px) {
    section.template {
      margin-bottom: 0rem;
      padding-top: 8rem;
    }

    /* ===== AboutMe ===== */
    #about .about {
      display: flex;
      flex-direction: row;
      padding-top: 1;
      padding-bottom: auto;
    }
    #about .about_left {
      max-width: 300px;
    }
    #about .about_right {
      text-align: left;
      padding: 30px;
    }
    #about .about_right h1 {
      text-align: left;
    }
    #about .about_right-txt {
      margin-left: 0;
      margin-right: 0;
    }
  }



  /* ===== Laptops ===== */
  @media only screen and (min-width: 1025px) {
    #about .about_left {
      max-width: 500px;
    }
  }
</style>