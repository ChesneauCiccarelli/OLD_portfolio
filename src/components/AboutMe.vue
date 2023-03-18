<template>
  <section class="aboutMini">
    <article id="aboutMini">
      <div class="aboutMini_container">
        <div class="aboutMini_left">
          <figure>
            <img class="right" src="/public/img/MonogramChrome@2x.png" alt="Monogram Lilian Chesneau">
          </figure>
        </div>
        <div class="aboutMini_right-txt">
          <h1 class="up">Hello</h1>
          <h2 class="up">I'm Lilian Chesneau</h2>
          <div>
            <p class="left">I am a 21-year-old student from <a class="underlinelink" href="https://www.google.com/maps/place/10000+Troyes,+France/@48.2923894,4.041115,13z/data=!3m1!4b1!4m5!3m4!1s0x47ee9857e787b7b1:0x57dd125566e84f75!8m2!3d48.2973451!4d4.0744009" target="_blank" rel="noopener noreferrer">Troyes</a>, a charming French city located in the Aube department. Currently, I am in my second year of studies at the IUT of Belfort-Montbéliard, where I am pursuing a degree in the "Métiers du Multimédia et de l'Internet" department.</p>
            <p class="left">During my academic journey, I had the privilege of attending a semester of class at <a class="underlinelink" href="https://www.vaniercollege.qc.ca/" target="_blank" rel="noopener noreferrer">Vanier College</a> in Montreal, QC, where I studied in the Micropublishing and Hypermedia department. This study abroad experience allowed me to broaden my horizons, learn from different perspectives, and immerse myself in a new culture. You can learn more about it below</p>
            <p class="left">This portfolio showcase some of my work, and I invite you to take your time to explore it in more detail. You can also click on the "Learn More" button below to contact me or find out more about me.</p>
          </div>
          <RouterLink to="/about-me">
            <button class="mt-[3rem] down">
              <span>Learn more</span>
              <div class="BTN_liquid"></div>
            </button>
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<style>
  section.aboutMini {
    margin-bottom: 5rem;
  }

  /* ===== AboutMe ===== */
  article#aboutMini {
    display: flex;
    padding-top: 10rem;
    padding-bottom: 5rem;
    width: 100%;
  }
  #aboutMini .aboutMini_container {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }
  #aboutMini .aboutMini_right-txt h2 {
    margin-bottom: 10px;
  }
  #aboutMini .aboutMini_right-txt p {
    margin-bottom: 2rem;
  }
  #aboutMini .aboutMini_right-txt p.btn_underlineGradient-txt-p {
    margin-bottom: 0px;
  }
  #aboutMini .aboutMini_right-txt {
    margin-left: 8%;
    margin-right: 8%;
  }
  #aboutMini .aboutMini_right-txt p:first-child {
    margin-top: 5rem;
  }
  #aboutMini .aboutMini_right-txt {
    margin-top: 2rem;
  }



  /* ===== Tablet ===== */
  @media only screen and (min-width: 768px) {
    section.aboutMini {
      margin-bottom: 0rem;
      padding-top: 8rem;
    }

    /* ===== AboutMe ===== */
    #aboutMini .aboutMini_container {
      display: flex;
      gap: 2rem;
      flex-direction: row;
      padding-top: 1;
      padding-bottom: auto;
      align-items: flex-start;
      padding: 0 3rem 0 3rem;
    }
    #aboutMini .aboutMini_left {
      max-width: 400px;
    }
    #aboutMini .aboutMini_right-txt {
      text-align: left;
    }
    #aboutMini .aboutMini_right-txt h1 {
      text-align: left;
    }
    #aboutMini .aboutMini_right-txt {
      margin-left: 0;
      margin-right: 0;
      min-width: 50%;
      max-width: 60%;
    }
  }



  /* ===== Laptops ===== */
  @media only screen and (min-width: 1025px) {
    #aboutMini .aboutMini_left {
      max-width: 500px;
    }
  }
</style>

<script>

</script>