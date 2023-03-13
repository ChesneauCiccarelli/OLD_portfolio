<template>
  <div class="loader flex items-center justify-center z-50">
    <div>
      <h1>Loading</h1>
      <h2 class="loader_progress">0%</h2>
    </div>
  </div>
  
  <div class="gallery_wrapper">
    <header class="flex items-center justify-center TAG_galley text-center">
      <div>
        <h1>Design Gallery</h1>
        <h2>Lilian Chesneau</h2>
      </div>
    </header>

    <section class="ANIM_galleryTXT toANIM">
      <div class="anim_img ANIM_galleryTXT-txt">
        CREATING&nbsp;THE&nbsp;LIFE&nbsp;I&nbsp;WANT
      </div>
    </section>
    <section class="ANIM_gallery toANIM">
      <ul class="anim_img TAG_galley">
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/Monogram.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/Exodia(RGB)-LilianChesneau.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/wildestdreams.jpg">
        </li>
      </ul>
    </section>

    <section class="ANIM_gallery toANIM">
      <ul class="anim_img TAG_galley">
          <li class="TAG_galley">
            <img class="TAG_galley" src="../../public/img/gallery/montreal.jpg">
          </li>
          <li class="TAG_galley">
            <img class="TAG_galley" src="../../public/img/gallery/BeerFountain.jpg">
          </li>
          <li class="TAG_galley">
            <img class="TAG_galley" src="../../public/img/gallery/LastParty(Negative).jpg">
          </li>
          <li class="TAG_galley">
            <img class="TAG_galley" src="../../public/img/gallery/wildestdreams.jpg">
          </li>
      </ul>
    </section>

    <section class="ANIM_gallery toANIM">
      <ul class="anim_img TAG_galley">
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/montreal.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/Bridge.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/iwd4u.jpg">
        </li>
         <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/LastParty.jpg">
        </li>
      </ul>
    </section>

    <section class="ANIM_gallery toANIM">
      <ul class="anim_img TAG_galley">
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/sagradafamilia.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/isole.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/lmeuep.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/LastParty(Negative).jpg">
        </li>
      </ul>
    </section>

    <section class="ANIM_gallery toANIM">
      <ul class="anim_img TAG_galley">
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/sagradafamilia.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/lowup.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/park.jpg">
        </li>
        <li class="TAG_galley">
          <img class="TAG_galley" src="../../public/img/gallery/redd.jpg">
        </li>
      </ul>
    </section>

    <section class="ANIM_gallery toANIM">
    <ul class="anim_img TAG_galley">
      <li class="TAG_galley">
        <img class="TAG_galley" src="../../public/img/gallery/sami.jpg">
      </li>
      <li class="TAG_galley">
        <img class="TAG_galley" src="../../public/img/gallery/Wonderland.jpg">
      </li>
      <li class="TAG_galley">
        <img class="TAG_galley" src="../../public/img/gallery/redd.jpg">
      </li>
    </ul>
  </section>


    <section class="ANIM_galleryTXT toANIM">
      <div class="anim_img ANIM_galleryTXT-txt">
        CREATING&nbsp;THE&nbsp;LIFE&nbsp;I&nbsp;WANT
      </div>
    </section>
  </div>

  <section class="glasmorphism_container">
    <div class="glasmorphism_content text-[#F5F5F5]">
      <h1>More?</h1>
      <p>Want to see more of my design work and stay updated on my latest projects? Follow me on social media!</p>
      <socials class="mt-[3rem]"/>
    </div>
  </section>
</template>

<script>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import imagesLoaded from "imagesloaded"
  import socials from '../components/Socials.vue'

export default {
    components: {
      socials,
    },   
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      const images = gsap.utils.toArray("img");
      const loader = document.querySelector(".loader_progress");
      const updateProgress = (instance) =>
      (loader.textContent = `${Math.round(
        (instance.progressedCount * 100) / images.length
      )}%`);
      const showDemo = () => {
        document.body.style.overflow = "auto";
        document.scrollingElement.scrollTo(0, 0);
        gsap.to(document.querySelector(".loader"), {
          autoAlpha: 0
        });
        gsap.utils.toArray("section.toANIM").forEach((section, index) => {
          const w = section.querySelector(".anim_img");
          const [x, xEnd] =
            index % 2
              ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
              : [w.scrollWidth * -1, 0];
          gsap.fromTo(
            w,
            {
              x
            },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.5
              }
            }
          );
        });
      };
      imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
    },
  }
</script>

<style>
  img.TAG_galley {
    width: 100%;
    height: auto;
    background: #f0f0f0;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
  ul.TAG_galley {
    padding-left: 1rem;
    list-style: none;
  }
  li.TAG_galley {
    flex-shrink: 0;
    width: clamp(400px, 40vw, 600px);
    padding-right: 1rem;
  }
  header.TAG_galley {
    height: 100vh;
  }
  .gallery_wrapper {
    overflow-x: hidden;
  }
  .anim_img {
    display: flex;
  }
  .ANIM_gallery:not(.last) {
    padding-bottom: 1rem;
  }
  .ANIM_galleryTXT .ANIM_galleryTXT-txt {
    font-size: clamp(8rem, 15vw, 16rem);
    line-height: 1;
    font-weight: 400;
    font-family: var(--display);
  }

  .loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    color: white;
  }
</style>