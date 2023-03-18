<template>
  <div class="separator"></div>

  <h1 class="text-center down">Other stuff</h1>

  <div class="tab--mobile">
    <div>
      <h2 class="up mt-[5rem]">My work at Vanier College</h2>
      <p class="up">I had the chance to study for a semester at CEGEP Vanier College in Montreal in their Multimedia Integration program. Click on the link to discover the work done there.</p>
      <div class="up"><img src="../../public/img/Vanier.png" alt="Logo Cegep College Vanier"></div>
      <a href="https://lilian39.micromediaweb.com/" target="_blank">
        <button class="down">
          <span>See more</span>
          <div class="BTN_liquid"></div>
        </button>
      </a>
    </div>
  </div>

  <a class="tab_link" href="https://lilian39.micromediaweb.com/" target="_blank">
    <div class="tab">
      <ul class="tab_container">
        <li class="tab_content tab_after">
          <div class="tab_img"><img src="../../public/img/Vanier.png" alt="Logo Cegep College Vanier"></div>
          <div class="tab_description">
            <h3>My work at Vanier College</h3>
            <p>I had the chance to study for a semester at CEGEP Vanier College in Montreal in their Multimedia Integration program. Click on the link to discover the work done there.</p>
            <a href="https://lilian39.micromediaweb.com/">- Lets go -</a>
          </div>
        </li>
      </ul>
    </div>
  </a>

  <div class="separator separator--down"></div>
</template>

<style>
  a.tab_link p {
    font-family: var(--txt);
    font-size: var(--s);
    font-weight: 400;
    text-transform: initial;
  }
  div.tab {
    display: none;
  }
  .separator {
    overflow: hidden;
    height: 20px;
    margin-top: 25rem;
    margin-bottom: 3rem;
  }
  .separator::after {
    content: '';
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px / 12px;
    box-shadow: 0 0 8px var(--light);
  }
  .separator--down {
    margin-top: 3rem;
    margin-bottom: 20rem;
  }
  .tab--mobile {
    margin: 0 3rem;
  }
  .tab--mobile p {
    margin: 3rem 0;
  }
  .tab--mobile button {
    margin: 3rem auto;
  }
  h1.ANIM_shine {
    font-family: var(--display);
    text-transform: lowercase;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: ANIM_shine 3s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
  @keyframes ANIM_shine {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }


  
  /* ===== Tablet ===== */
  @media only screen and (min-width: 768px) {
    div.tab {
      display: block;
    }
    .tab--mobile {
      display: none;
    }
    .tab {
      margin: auto;
      max-width: 1000px;
    }
    .tab_container {
      padding: 2em 0 2em 2.5em;
      margin: 0;
    }
    .tab_content {
      padding: 0.73em;
      background: linear-gradient(83deg,
          var(--light) 0 97%,
          #fff0 calc(97% + 1px) 100%);
      position: relative;
      list-style: none;
      display: inline-block;
      transform: scale(0.85);
      transition: all 0.4s ease 0s;
    }
    .tab_content:hover h3 {
      left: 250px;
    }
    .tab_content:hover:after {
      background-color: var(--accent);
      color: var(--light);
      text-transform: uppercase;
    }
    .tab_content:nth-of-type(even) {
      text-align: right;
      background: linear-gradient(-83deg,
          var(--light) 0 97%,
          #fff0 calc(97% + 1px) 100%);
    }
    .tab_img {
      height: 13vmin;
      float: left;
      margin-right: 1.25em;
      background: linear-gradient(-86deg,
          var(--dark) 0 70%,
          var(--light) 0% 100%);
      transform: rotate(-4deg);
      transition: all 0.4s ease 0s;
      border-radius: 0.25em;
      overflow: hidden;
      margin-left: -3em;
      padding: 0.5em;
    }
    .tab_content:nth-of-type(even) .tab_img {
      --deg: 86deg;
      float: right;
      margin-left: 2em;
      margin-right: -3em;
      transform: rotate(4deg);
    }
    .tab_img img {
      width: 100%;
      height: 100%;
      border-radius: 0.25em;
      filter: grayscale(1);
      background: var(--dark);
      padding: 1rem;
    }
    .tab_content:hover {
      transform: scale(1);
      transition: all 0.4s ease 0s;
      filter: drop-shadow(0px 20px 10px #0008);
    }
    .tab_content:hover .tab_img {
      padding: 0.1em;
      transition: all 0.4s ease 0s;
      transform: rotate(-1deg);
    }
    .tab_content:hover .tab_img img {
      filter: none;
      transition: all 0.4s ease 0s;
    }
    .tab_description {
      padding-top: 1vmin;
    }
    .tab_description p {
      padding: 0 2em;
      margin-bottom: 1em;
      color: var(--dark);
    }
    .tab_description h3 {
      font-family: var(--title);
      text-transform: uppercase;
      background: var(--light);
      display: inline;
      transform: rotate(-2deg);
      position: absolute;
      margin: 0;
      margin-top: -2.25em;
      left: 9vmin;
      padding: 0.5em 0.75em;
      color: var(--dark);
      border-radius: 0.25em;
      font-size: var(--m);
      transform-origin: left bottom;
    }
    .tab_description a {
      color: var(--dark);
      font-family: var(--btn);
      text-transform: uppercase;
      font-size: var(--m);
      letter-spacing: 0.2rem;
      font-weight: 900;
    }
    .tab_content:nth-of-type(even) h3 {
      left: inherit;
      right: 9vmin;
      transform: rotate(2deg);
      transform-origin: right bottom;
      background: linear-gradient(-182deg, #fff0 60%, var(--light) 0 100%);
    }
    .tab_content:hover h3 {
      transition: all 0.4s ease 0s;
      transform: rotate(0deg);
      background: var(--light);
    }
    .tab_content:hover a {
      border-bottom: 1px solid var(--dark);
    }
    .tab_after:after {
      content: "VANIER";
      font-size: 0.75em;
      position: absolute;
      top: -1.5em;
      background: var(--light);
      right: 4em;
      transform: rotate(3deg);
      padding: 0.35em 0.75em 0.5em;
      border-radius: 0.25em;
      color: var(--dark);
      font-family: var(--display);
      text-transform: lowercase;
      font-size: var(--m);
      font-weight: 900;
    }
    .tab_after:nth-of-type(even):after {
      right: inherit;
      left: 4em;
      transform: rotate(-3deg);
    }
    .tab_description p a {
      display: inline-block;
      margin: 0.5em 0 0 0;
      background: var(--light);
      color: var(--dark);
      padding: 0.1em 0.5em 0.35em;
      border-radius: 0.5em;
      text-decoration: none;
      transition: all 0.4s ease 0s;
    }
    .tab_description p a:hover {
      transition: all 0.4s ease 0s;
      color: var(--light);
      background: var(--dark);
      font-weight: bold;
    }
    .tab_description p a img {
      float: left;
      width: 22px;
      filter: invert(1);
      border-radius: 0.15em;
      padding: 2px;
      background: #fff;
      margin-right: 2px;
    }
  }
</style>

<script>

</script>