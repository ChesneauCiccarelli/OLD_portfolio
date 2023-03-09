<template>
  <body>
    <div class='loader one two three'>
      <div>
        <h1>Loading</h1>
        <h2 class='loader-txt'>0%</h2>
      </div>
    </div>
    <main class='wrapper'>
      <header class='one two three test'>
        <div>
          <h1>Design Gallery</h1>
          <h2>Lilian Chesneau</h2>
        </div>
      </header>
      <section class='txt'>
        <div class='anim txt-content'>
          CREATING&nbsp;THE&nbsp;LIFE&nbsp;I&nbsp;WANT
        </div>
      </section>
      <section class='gallery'>
        <ul class='anim test'>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=98' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=54' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=113' width='1240'>
          </li>
        </ul>
      </section>
      <section class='gallery'>
        <ul class='anim test'>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=47' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=158' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=132' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=53' width='1240'>
          </li>
        </ul>
      </section>
      <section class='gallery'>
        <ul class='anim test'>
          <li>
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=83' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=97' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=6' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=139' width='1240'>
          </li>
        </ul>
      </section>
      <section class='gallery'>
        <ul class='anim test'>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=42' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=89' width='1240'>
          </li>
          <li class="test">
            <img class="test" height='874' src='https://source.unsplash.com/random/1240x874?sig=49' width='1240'>
          </li>
        </ul>
      </section>
      <section class='txt'>
        <div class='anim txt-content'>
          CREATING&nbsp;THE&nbsp;LIFE&nbsp;I&nbsp;WANT
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded"

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const images = gsap.utils.toArray('img');
    const loader = document.querySelector('.loader--text');
    const updateProgress = instance => loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), {
        autoAlpha: 0
      });
      gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {
          x
        }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5
          }
        });
      });
    };
    imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
  }
}
</script>

<style>
img.test {
  width: 100%;
  height: auto;
  background: #f0f0f0;
}

ul.test {
  padding-left: 1rem;
  list-style: none;
}

li.test {
  flex-shrink: 0;
  width: clamp(500px, 60vw, 800px);
  padding-right: 1rem;
}

header.test {
  height: 100vh;
}

.one {
  display: flex;
}

.two {
  align-items: center;
}

.three {
  justify-content: center;
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

.wrapper {
  overflow-x: hidden;
}

.anim {
  display: flex;
}

.gallery:not(.last) {
  padding-bottom: 1rem;
}

.txt .txt-content {
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
}</style>