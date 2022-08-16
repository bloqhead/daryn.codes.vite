<template>
  <div>
    <h1 class="brush title">
      Versatile
    </h1>

    <div
      itemscope
      itemtype="https://schema.org/Person"
      class="intro intro--has-image"
    >
      <div class="intro__image">
        <img
          itemprop="photo"
          src="/images/me.jpg"
          alt="A picture of Daryn with long hair"
        >
      </div>
      <p>
        My name is <span itemprop="givenName">Daryn</span> and I build
        <router-link to="/work/">
          websites
        </router-link>
        in sunny St. Petersburg Florida.
        I like to experiment on <a href="https://codepen.io/bloqhead">Codepen</a> and have been
        featured on the front page multiple times, as well as in
        <a href="https://codepen.io/spark/">Codepen Spark</a>.
      </p>
    </div>

    <div class="intro">
      <p>
        Design, code, UX / UI, accessibility, client relations; I do it all. I've been in the game
        since circa 2001 and refuse to stop learning.
      </p>
    </div>

    <div class="doomguy">
      <img
        itemprop="photo"
        src="/images/doomguy-walking.gif"
        alt="An animated gif of Doomguy walking"
      >
    </div>

    <h3>
      It all started as a kid&hellip;
    </h3>

    <p class="attn">
      I was heavily influenced by 80s and 90s culture, as well as my
      computer-savvy father. Before I was born, he was a contractor for NASA and
      worked on computer systems that were used in space capsules. With his
      guidance, I was eventually navigating
      <abbr title="Microsoft Disk Operating System">MS-DOS</abbr>
      like a pro.
    </p>

    <div class="doomguy">
      <img
        itemprop="photo"
        src="/images/doomguy.gif"
        alt="An animated gif of Doomguy's various facial expressions"
      >
    </div>

    <h3>
      I build things with&hellip;
    </h3>

    <brand-logos />
  </div>
</template>

<script setup lang="ts">
import BrandLogos from '~/components/BrandLogos.vue'
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style lang="scss" scoped>
.doomguy {
  --bg: #1c1c1c;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 1em auto;
  text-align: center;

  &:before,
  &:after {
    content: "";
    height: 5px;
    flex: 1 0 0;
    background-color: var(--bg);
    border-radius: 5px;
  }

  img {
    display: block;
    width: 80px;
    height: auto;
    background-color: var(--bg);
    border-radius: 10px;
  }
}
</style>
