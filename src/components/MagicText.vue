<template>
  <section class="magicContainer">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F5F5F5" fill-opacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F5F5F5" fill-opacity="1"
          d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,213.3C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
        </path>
      </svg>
    </div>
    <div id="container">
      <span id="text1"></span>
      <span id="text2"></span>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140" />
          </filter>
        </defs>
      </svg>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {
      const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
      };
      const texts = [
        "Graphic Design",
        "Web Development",
        "Communication",
        "Video / Audio Editing",
        "Webdesign",
        "Marketing",
        "and more ..."
      ];
      const morphTime = 1;
      const cooldownTime = 1;

      let textIndex = texts.length - 1;
      let time = new Date();
      let morph = 0;
      let cooldown = cooldownTime;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];

      function doMorph() {
        morph -= cooldown;
        cooldown = 0;
        let fraction = morph / morphTime;
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
        setMorph(fraction);
      }
      function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
      }

      function doCooldown() {
        morph = 0;
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
      }

      function animate() {
        requestAnimationFrame(animate);
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }

          doMorph();
        } else {
          doCooldown();
        }
      }

      animate();
    }
  }
</script>

<style>
  section.magicContainer {
    margin: 10rem 0rem;
    position: relative;
  }
  #container {
    position: absolute;
    margin: auto;
    width: 100vw;
    top: 47%;
    bottom: 0;
  }
  #text1, #text2 {
    position: absolute;
    width: 100%;
    font-family: var(--display);
    font-size: var(--m);
    font-weight: 400;
    text-align: center;
    color: var(--accent);
    user-select: none;
    text-transform: lowercase;
  }



  /* ===== Landscapes ===== */
  @media only screen and (min-width: 481px) {
    #text1, #text2 {
      font-size: var(--l);
    }
  }



  /* ===== Tablet ===== */
  @media only screen and (min-width: 768px) {
    #text1, #text2 {
      font-size: var(--xl);
    }
  }



  /* ===== Laptops ===== */
  @media only screen and (min-width: 1025px) {
    #text1,
    #text2 {
      font-size: var(--xxl);
    }
  }



  /* Media Query For Desktop */
  @media only screen and (min-width: 1281px) {
    #text1, #text2 {
      font-size: var(--d5);
    }
  }
</style>