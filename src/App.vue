<script>
  import { RouterLink, RouterView } from 'vue-router'

export default {
    components: {
      RouterLink, RouterView
    },
  mounted() {
      //Cursor
      const cursorz = document.getElementById("cursorz");
      const moveCursor = event => {
        const cursorWidth = cursorz.offsetWidth / 2;
        cursorz.style.left = event.pageX - cursorWidth + "px";
        cursorz.style.top = event.pageY - cursorWidth + "px";
      };
      document.addEventListener("mousemove", moveCursor);
      
      //Header et Menu
      const hamburger = document.querySelector('.header .header_container .header_nav .header_nav-hamburger');
      const mobile_menu = document.querySelector('.header .header_container .header_nav ul');
      const menu_item = document.querySelectorAll('.header .header_container .header_nav ul li a');
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      });
      menu_item.forEach((item) => {
        item.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          mobile_menu.classList.toggle('active');
        });
      });
    }
  }
</script>

<template>
  <div id="cursorz"></div>

  <header id="header" v-if="$route.name !== 'Page404'">
    <section class="header">
      <div class="header_container">
        <RouterLink class="header_container-homelink" to="/">
          <figure class="header_container-logo">
            <img class="header_container-img" height="30px" width="35px" src="../public/icons/monogram-Black.svg" alt="Monogram Lilian Chesneau">
            <figcaption>Lilian Chesneau</figcaption>
          </figure>
        </RouterLink>
        <div class="header_nav">
          <div class="header_nav-hamburger">
            <div class="header_nav-hamburger-bar"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/#project" data-after="Projects">Projects</a>
              </li>
              <li>
                <RouterLink to="/gallery" data-after="Gallery">Gallery</RouterLink>
              </li>
              <li>
                <RouterLink to="/about-me" data-after="About">About me</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </header>

  <main>
    <RouterView />
  </main>

  <div class="footersvg relative" v-if="$route.name !== 'Page404'">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#F5F5F5" fill-opacity="1"
        d="M0,96L60,106.7C120,117,240,139,360,165.3C480,192,600,224,720,229.3C840,235,960,213,1080,208C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
      </path>
    </svg>
  </div>

  <footer id="footer" class="relative" v-if="$route.name !== 'Page404'">
    <div class="footer">
      <div class="footer-title">
        <img src="/public/img/Signature.png" alt="Lilian Chesneau Signature">
      </div>
      <nav class="socials_container">
        <ul class="socials">
          <li>
            <a id="linkedin" href="https://www.linkedin.com/in/lilianchesneau/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a id="instagram" href="https://www.instagram.com/lilian._.ch/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a id="twitter" href="https://twitter.com/lc_lilianch" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a id="facebook" href="https://www.facebook.com/Reddy.Lc" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style>
  html {
    overflow-x: hidden;
    cursor: none;
    scroll-behavior: smooth;
  }

  /* ===== Cursor ===== */
  #cursorz {
    z-index:1000000;
    pointer-events: none;
    width: 3.5rem;
    height: 3.5rem;
    will-change: transform;
    background: var(--light);
    position: absolute;
    mix-blend-mode: difference;
    border-radius: 50%;

    animation: grow-shrink ease-in-out 4s infinite alternate;
  }
  img:hover ~ #cursorz{
    transform: scale(3.0);
  }
  @keyframes grow-shrink {
    0% {
      transform: scale(1.0);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  /* Not for smartphones */
  @media (hover: none) and (pointer: coarse) {
    #cursorz{
      display: none;
    }
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--accent);
  }
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 3px;
  }
  *::-webkit-scrollbar-track {
    background: var(--accent);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--dark);
    border-radius: 20px;
  }

  /* ===== Header ===== */
  .header_container-logo {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-transform: lowercase;
    font-family: var(--display);
    font-size: var(--m);
    color: var(--dark);
  }
  .header_container-homelink:hover .header_container-logo {
    text-transform: uppercase;
  }
  .header_container-logo figcaption {
    display: none;
  }
  #header {
    position: fixed;
    z-index: 1000;
    background-color: var(--light);
  }
  #header .header {
    transition: 0.3s ease background-color;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  #header .header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: var(--d0) var(--d0);
  }
  img.header_container-img {
    width: 35px;
    display: flex;
    align-items: center;
  }
  #header .header_nav ul {
    list-style: none;
    position: absolute;
    background-color: var(--light);
    width: 100vw;
    height: 100vh;
    left: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.5s ease left;
  }
  #header .header_nav ul.active {
    left: 0%;
  }
  #header .header_nav ul a {
    font-family: var(--display);
    font-size: var(--m);
    text-decoration: none;
    color: var(--dark);
    text-transform: lowercase;
    padding: var(--d0) var(--d0);
    letter-spacing: 0.2rem;
    font-weight: 900;
    display: block;
    background: linear-gradient(to right, var(--dark), var(--dark));
    background-size: 30% 3px;
    background-size: 0 3px, 100% 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }
  #header .header_nav ul a::after {
    content: attr(data-after);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: rgba(27, 28, 30, 0.2);
    font-size: 10rem;
    letter-spacing: 50px;
    z-index: -1;
    transition: 0.3s ease letter-spacing;
    text-shadow: none;
  }
  #header .header_nav ul li:hover a::after {
    transform: translate(-50%, -50%) scale(1);
    letter-spacing: initial;
  }
  #header .header_nav ul li:hover a {
    color: var(--light);
    background-size: 50% 3px;
    border-bottom: solid 1px var(--dark);
    color: transparent;
    font-weight: 100;
    transition: 0.2s ease;
    text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
  }

  /* ===== Hamburger Logo ===== */
  #header .header_nav-hamburger {
    height: 40px;
    width: 40px;
    display: inline-block;
    border: 1px solid var(--dark);
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    transform: scale(0.8);
  }
  #header .header_nav-hamburger:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid var(--accent);
    animation: hamburger_puls 1s ease infinite;
  }
  @keyframes hamburger_puls {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.4);
    }
  }
  #header .header_nav-hamburger .header_nav-hamburger-bar {
    height: 1px;
    width: 20px;
    position: relative;
    background-color: black;
    z-index: -1;
  }
  #header .header_nav-hamburger .header_nav-hamburger-bar::after,
  #header .header_nav-hamburger .header_nav-hamburger-bar::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: black;
    transition: 0.3s ease;
    transition-property: top, bottom;
  }
  #header .header_nav-hamburger .header_nav-hamburger-bar::after {
    top: 8px;
  }
  #header .header_nav-hamburger .header_nav-hamburger-bar::before {
    bottom: 8px;
  }
  #header .header_nav-hamburger.active .header_nav-hamburger-bar::before {
    bottom: 0;
  }
  #header .header_nav-hamburger.active .header_nav-hamburger-bar::after {
    top: 0;
  }

  /* ===== Footer ===== */
  div.footersvg {
    margin-top: 3rem;
    z-index: 1000;
  }
  div.footer-title img {
    padding: 0 3rem;
  }
  #footer {
    background-color: var(--light);
    color: var(--light);
    text-align: center;
    margin-top: -1rem;
    padding-bottom: 4rem;
    background-position: center;
    z-index: 1000;
  }
  #footer .footer-txt {
    margin: 0;
  }
  #footer .footer-txt1 {
    margin-bottom: 3%;
  }
  .links-a {
    margin-bottom: 5%;
    font-family: var(--fancy);
    font-size: var(--s);
    background-color: var(--accent);
    color: var(--light);
    padding: 3%;
  }
  .links-a:hover {
    color: var(--dark);
    background-color: var(--accent);
  }
  .hvr-underline-reveal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px var(--light);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-reveal:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--light);
    height: 4px;
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-reveal:hover:before,
  .hvr-underline-reveal:focus:before,
  .hvr-underline-reveal:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .socials_container{
    background-color: var(--dark);
    border-radius: 20px;
    margin: 0 1rem 0 1rem;
  }



  /* ===== Desktop ===== */
  @media only screen and (min-width: 1025px) {

    /* ===== Footer ===== */
    #footer {
      padding-bottom: 0%;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 5rem;
      padding-bottom: 3rem;
    }
    .links {
      padding-top: 2%;
    }
    div.footer-title img {
      max-width: 500px;
      padding: 0;
    }

    /* ===== Header ===== */
    #header .header_nav-hamburger {
      display: none;
    }
    #header .header_nav ul {
      position: initial;
      display: block;
      height: auto;
      width: fit-content;
      background-color: transparent;
    }
    #header .header_container {
      padding: 1rem 5rem;
    }
    #header .header_nav ul li {
      display: inline-block;
    }
    #header .header_nav ul a {
      padding: 0rem 2rem;
    }
    #header .header_nav ul a:after {
      display: none;
    }
    .header_container-logo figcaption {
      display: block;
    }
  }
</style>