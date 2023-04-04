<template>
  <div>
    <page-title title="Versatile" />

    <div class="new-intro">
      <div class="new-intro__photo">
        <picture>
          <img
            itemprop="photo"
            src="/images/me-new.jpg"
            alt="A picture of Daryn with long hair"
          >
        </picture>
      </div>
      <div class="new-intro__content">
        <div class="gw-wrapper">
          <div class="gw-wrapper__content">
            <p>
              <glitched-writer
                :text="gwText"
                :queue="gwQueue"
                :options="gwOptions"
                :letterize="true"
                preset="neo"
              />
              <span class="gw-cursor">_</span>
            </p>
          </div>
        </div>
        <p>
          My name is <span itemprop="givenName">Daryn</span> and I
          <router-link to="/work/">
            build things
          </router-link>.
        </p>
        <p>
          I'm often experimenting on <a href="https://codepen.io/bloqhead">Codepen</a>
          and have been featured on the front page multiple times, as well as in
          <a href="https://codepen.io/spark/">Codepen Spark</a>.
        </p>
      </div>
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
import { ref } from 'vue'
import GlitchedWriter from 'vue-glitched-writer'
import PageTitle from '~/components/PageTitle.vue'
import BrandLogos from '~/components/BrandLogos.vue'

// GW text array
const gwText = ref([
  'Hello',
  'Hallo',
  'Përshëndetje',
  'Iwi selami newi',
  'Marhaba',
  'Barev',
  'Kamisaki',
  'Salam',
  'Kaixo',
  'Vitaju',
  'Hyālō',
  'Zdravo',
  'Здравейте',
  'Haallo',
  'Nǐ hǎo',
  'Hola',
  'Kamusta',
  'Moni',
  'Bonghjornu',
  'Tere',
  'Salām',
])

// GW animation settings
const gwQueue = ref({
  interval: 2400, // [ms]
  loop: true,
})

// GW options
const gwOptions = ref({
  letterize: true,
  fillSpace: true,
})

const metaDescription = 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
const metaTitle = 'Daryn St. Pierre, Front-End Web Developer'

useHead({
  title: metaTitle,
  meta: [
    { name: 'description', content: metaDescription },
    { name: 'og:title', content: metaTitle },
    { name: 'og:description', content: metaDescription },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
  ],
})
</script>

<style lang="scss" scoped>
@use '../styles/variables' as v;
@use '../styles/mixins' as m;

.new-intro {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  &__content {
    position: relative;
    @include m.textPanel;
    margin: 0 0 3rem 0;
  }

  &__photo {
    position: relative;
    background-color: rgba(v.$mid, 0.85);
    padding: 1rem;
    border-radius: 2rem;
    max-width: 32rem;

    &:before, &:after {
      --i: 5px;
      position: absolute;
      display: block;
      content: "";
      height: var(--i);
      width: 6rem;
      border-radius: calc(var(--i) / 2);
      background: var(--link-gradient);
      transform-origin: left center;
    }

    &:before {
      bottom: 10px;
      left: -10px;
      transform: rotate(-90deg);
    }

    &:after {
      bottom: 10px;
      left: -12px;
    }

    picture {
      display: block;
      overflow: hidden;
      border-radius: inherit;

      img {
        display: block;
        object-fit: contain;
        width: 100%;
        height: auto;
      }
    }
  }

  @media #{v.$bp-medium-large} {
    flex-direction: row;
    align-items: flex-start;

    &__photo {
      z-index: 1;
      width: 40%;
      transform: translateX(5%) translateY(5rem);
      box-shadow: 0.5rem 0.5rem 1rem 0 rgba(#000, 0.5);
    }

    &__content {
      width: 60%;
    }

    .gw-wrapper {
      position: relative;
      z-index: 2;
      transform: translateX(-15%) translateY(-2rem);
      box-shadow:
        0.5rem 0.5rem 1rem 0 rgba(#000, 0.5),
        inset 0 0 0 2px rgba(#fff, 0.15);
      user-select: none;
    }
  }
}

.gw-wrapper {
  --size: 10px;
  --height: 40px;
  --bar-bg: transparent;
  --radius: 10px;
  --color-1: var(--color-pink);
  --color-2: var(--color-yellow);
  --color-3: var(--color-lime);
  --x: 20px;
  --y: calc(var(--height) / 2);

  margin: 0 0 0.5rem 0;
  font-size: 1.6rem;
  font-family: var(--font-mono);
  background-color: #000;
  border-radius: var(--radius);
  will-change: contents;
  transition: all 250ms ease-in-out;
  box-shadow: inset 0 0 0 2px rgba(#fff, 0.2);

  &:before {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    content: "user@matrix > hello";
    height: var(--height);
    border-radius: var(--radius) var(--radius) 0 0;
    background-color: var(--bar-bg);
    background-image: radial-gradient(
        var(--size) circle at var(--x) var(--y),
        var(--color-1) 50%,
        transparent 51%
      ),
      radial-gradient(
        var(--size) circle at calc(var(--x) * 2) var(--y),
        var(--color-2) 50%,
        transparent 51%
      ),
      radial-gradient(
        var(--size) circle at calc(var(--x) * 3) var(--y),
        var(--color-3) 50%,
        transparent 51%
      );
    text-align: center;
    color: var(--color-shade);
    font-size: 1.2rem;
    font-weight: 700;
    font-family: var(--font-mono);
  }

  p {
    margin: 0;
    padding: 0;
  }

  &__content {
    --p: 1.4rem;
    padding: 0 var(--p) var(--p) var(--p);
  }

  .glitched-writer {
    display: inline-block;
    transition: all 250ms ease-in-out;
    transform-origin: center;
    will-change: contents;

    &.gw-writing {
      color: var(--color-shade);
      opacity: 0.8;
    }
  }

  .gw-cursor {
    display: inline-block;
    will-change: opacity;
    font: inherit;
    animation: cursor-blink 1.5s steps(2) infinite;
  }

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
}
</style>
