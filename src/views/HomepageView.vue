<script>
  import colors from "../components/Colors.vue"
  import about from "../components/AboutMe.vue"
  import socials from "../components/Socials.vue"
  import magicText from "../components/MagicText.vue"
  import tab from "../components/Tab.vue"
  import project from "../components/Projets.vue"
  

  export default {
    components: {
      about, colors, socials, magicText, project, tab,
    },
  }
</script>

<template>
  <colors />



  <about />

  <socials class="down" />

  <magicText />

  <project />

  <tab />
</template>

<style>
  /* ===== Hero ===== */
  #hero {
    z-index: 2;
  }
  .hero {
    position: absolute;
    top: 70%;
    left: 0;
    width: 100%;
  }
  #hero .hero {
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  #hero::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    z-index: -1;
  }
  #hero h1.hero_txt {
    display: block;
    text-align: left;
    position: relative;
    color: transparent;
    font-weight: 200;
    font-family: var(--display);
    animation: text_reveal 0.5s ease forwards;
    animation-delay: 1s;
    font-size: var(--l);
    text-transform: lowercase;
  }
  #hero h1.hero_txt:nth-child(1) {
    animation-delay: 1s;
    text-align: left;
  }
  #hero h1.hero_txt:nth-child(2) {
    animation-delay: 2s;
    text-align: left;
    font-size: var(--s);
    text-align: right;
  }
  #hero h1.hero_txt span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    animation: text_reveal_box 1s ease;
    animation-delay: 0.5s;
  }
  #hero h1.hero_txt:nth-child(1) span {
    animation-delay: 0.5s;
  }
  #hero h1.hero_txt:nth-child(2) span {
    animation-delay: 1.5s;
  }
  #hero h1.hero_txt:hover {
    background-size: 50% 3px;
    text-transform: uppercase;
    color: var(--dark);
  }
  @keyframes text_reveal_box {
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
  @keyframes text_reveal {
    100% {
      color: var(--dark);
    }
  }



  /* ===== Landscape ===== */
  @media only screen and (min-width: 481px) {
    /* ===== Hero ===== */
    #hero h1.hero_txt {
      font-size: 2.1rem;
    }
    #hero h1.hero_txt:nth-child(2) {
      font-size: 1.05rem;
    }
    #hero .hero {
      padding: 0 3rem;
    }
  }



  /* ===== Tablet ===== */
  @media only screen and (min-width: 768px) {
    /* ===== Hero===== */
    #hero h1.hero_txt {
      font-size: 3.7rem;
    }
    #hero h1.hero_txt:nth-child(2) {
      font-size: 1.85rem;
    }
  }

  /* ===== Laptops ===== */
  @media only screen and (min-width: 1025px) {
    #hero h1.hero_txt {
      font-size: 4.8rem;
    }
    #hero h1.hero_txt:nth-child(2) {
      font-size: 2.4rem;
    }
  }
</style>