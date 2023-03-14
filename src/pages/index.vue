<template>
  <div>
    <page-title title="Versatile" />

    <div
      itemscope
      itemtype="https://schema.org/Person"
      class="intro intro--has-image"
    >
      <div class="intro__image">
        <img
          itemprop="photo"
          src="/images/me-new.jpg"
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

    <doom-guy video="doomguy1" />

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

    <doom-guy video="doomguy2" />

    <h3>
      I build things with&hellip;
    </h3>

    <brand-logos />
  </div>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import BrandLogos from '~/components/BrandLogos.vue'
</script>

<style lang="scss" scoped></style>
