<script>

</script>

<template>
  <div class="mask"></div>

  <h1 class="shine mb-[5rem] text-center">Other stuff</h1>

  <div class="mobile-tab">
    <div>
      <h1>My work at Vanier College</h1>
      <p>I had the chance to study for a semester at CEGEP Vanier College in Montreal in their Multimedia Integration program. Click on the link to discover the work done there.</p>
      <div><img src="../../public/img/Vanier.png"></div>
      <a href="https://lilian39.micromediaweb.com/" target="_blank">
        <button>
          <span>See more</span>
          <div class="liquid"></div>
        </button>
      </a>
    </div>
  </div>

  <a class="tab_link" href="https://lilian39.micromediaweb.com/" target="_blank">
    <div class="tab">
      <ul class="tab_container">
        <li class="member co-funder">
          <div class="thumb"><img src="../../public/img/Vanier.png"></div>
          <div class="description">
            <h3>My work at Vanier College</h3>
            <p class="oui">I had the chance to study for a semester at CEGEP Vanier College in Montreal in their Multimedia Integration program. Click on the link to discover the work done there.</p>
            <a href="">- Lets go -</a>
          </div>
        </li>
      </ul>
    </div>
  </a>

  <div class="mask mask2"></div>
</template>

<style>
  a.tab_link p {
    font-family: var(--txt);
    font-size: var(--s);
    font-weight: 400;
    text-transform: initial;
  }
  div.tab {
    display: hidden;
    content-visibility: hidden;
  }
  .mask {
    overflow: hidden;
    height: 20px;
    margin-top: 25rem;
    margin-bottom: 3rem;
  }
  .mask::after {
    content: '';
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px / 12px;
    box-shadow: 0 0 8px var(--light);
  }
  .mask2 {
    margin-top: 3rem;
    margin-bottom: 20rem;
  }
  .mobile-tab {
    margin: 0 3rem;
  }
  .mobile-tab p {
    margin: 3rem 0;
  }
  .mobile-tab button {
    margin: 3rem auto;
  }
  h1.shine {
    font-family: var(--display);
    text-transform: lowercase;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: shine 3s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
  @keyframes shine {
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
      content-visibility: visible;
    }
    .mobile-tab {
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
    .member {
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
    .member:hover h3 {
      left: 250px;
    }
    .member:hover:after {
      background-color: var(--accent);
      color: var(--light);
      text-transform: uppercase;
    }
    .member:nth-of-type(even) {
      text-align: right;
      background: linear-gradient(-83deg,
          var(--light) 0 97%,
          #fff0 calc(97% + 1px) 100%);
    }
    .thumb {
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
    .member:nth-of-type(even) .thumb {
      --deg: 86deg;
      float: right;
      margin-left: 2em;
      margin-right: -3em;
      transform: rotate(4deg);
    }
    .thumb img {
      width: 100%;
      height: 100%;
      border-radius: 0.25em;
      filter: grayscale(1);
      background: var(--dark);
      padding: 1rem;
    }
    .member:hover {
      transform: scale(1);
      transition: all 0.4s ease 0s;
      filter: drop-shadow(0px 20px 10px #0008);
    }
    .member:hover .thumb {
      padding: 0.1em;
      transition: all 0.4s ease 0s;
      transform: rotate(-1deg);
    }
    .member:hover .thumb img {
      filter: none;
      transition: all 0.4s ease 0s;
    }
    .description {
      padding-top: 1vmin;
    }
    .description p {
      padding: 0 2em;
      margin-bottom: 1em;
      color: var(--dark);
    }
    .description h3 {
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
    .description a {
      color: var(--dark);
      font-family: var(--btn);
      text-transform: uppercase;
      font-size: var(--m);
      letter-spacing: 0.2rem;
      font-weight: 900;
    }
    .member:nth-of-type(even) h3 {
      left: inherit;
      right: 9vmin;
      transform: rotate(2deg);
      transform-origin: right bottom;
      background: linear-gradient(-182deg, #fff0 60%, var(--light) 0 100%);
    }
    .member:hover h3 {
      transition: all 0.4s ease 0s;
      transform: rotate(0deg);
      background: var(--light);
    }
    .member:hover a {
      border-bottom: 1px solid var(--dark);
    }
    .co-funder:after {
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
    .co-funder:nth-of-type(even):after {
      right: inherit;
      left: 4em;
      transform: rotate(-3deg);
    }
    .description p a {
      display: inline-block;
      margin: 0.5em 0 0 0;
      background: var(--light);
      color: var(--dark);
      padding: 0.1em 0.5em 0.35em;
      border-radius: 0.5em;
      text-decoration: none;
      transition: all 0.4s ease 0s;
    }
    .description p a:hover {
      transition: all 0.4s ease 0s;
      color: var(--light);
      background: var(--dark);
      font-weight: bold;
    }
    .description p a img {
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