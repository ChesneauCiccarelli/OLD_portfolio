<template>
  <nav>
    <ul class="socials size">
      <li><a id="linkedin" href="https://www.linkedin.com/in/lilianchesneau/" target="_blank"><i
            class="fa-brands fa-linkedin"></i></a></li>
      <li><a id="instagram" href="https://www.instagram.com/lilian._.ch/" target="_blank"><i
            class="fa-brands fa-instagram"></i></a></li>
      <li><a id="twitter" href="https://twitter.com/lc_lilianch" target="_blank"><i class="fa fa-twitter"></i></a></li>
      <li><a id="facebook" href="https://www.facebook.com/Reddy.Lc" target="_blank"><i
            class="fa-brands fa-facebook"></i></a></li>
    </ul>
  </nav>
</template>

<style>
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
}

#instagram,
#twitter,
#linkedin,
#facebook {
  font-size: var(--s);
  background-color: var(--dark);
  color: var(--light);
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
    2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080;
  border-radius: 29px;
  padding: 11px 19px;
  margin: 0 .5rem;
  animation: animate 3s linear infinite;
  text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
  z-index: 1;
}

#instagram:hover,
#twitter:hover,
#linkedin:hover,
#facebook:hover {
  background-color: var(--light);
  color: var(--dark);
}

#instagram {
  animation-delay: 0.3s;
}

#twitter {
  animation-delay: 0.7s;
}

#facebook {
  animation-delay: 0.1s;
}

@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
}

#instagram:active,
#twitter:active,
#linkedin:active,
#facebook:active {
  transform: translateX(6px);
  transform: translateY(6px);
}

@media only screen and (min-width: 768px) {

  #instagram,
  #twitter,
  #linkedin,
  #facebook {
    font-size: var(--xl);
    margin: 0 3rem;
  }
}

@media only screen and (min-width: 1281px) {

  #instagram,
  #twitter,
  #linkedin,
  #facebook {
    font-size: var(--xl);
    margin: 0 1rem;
  }

}</style>