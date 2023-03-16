<template>
  <div>
    <page-title title="Work" />

    <ul class="project-list">
      <li
        v-for="(item, idx) in work"
        :key="idx"
        class="project-list__item"
        itemscope
        itemtype="http://schema.org/CreativeWork"
      >
        <parallax-card>
          <a
            :href="item.url"
            rel="noindex nofollow"
            class="project-list__link browser-chrome"
            itemprop="url"
          >
            <img
              v-if="item.image"
              :src="`/images/work/${item.image}`"
              :alt="`A screenshot of the ${item.name} project`"
              class="project-list__item-image"
            >
            <!-- .project-list__item-image -->
            <div class="project-list__item-content">
              <h3 itemprop="headline" class="project-list__item-title angle-forward">
                <div class="angle-reverse">
                  {{ item.name }}
                </div>
              </h3>
              <div class="project-list__item-faux-link angle-reverse">
                <div class="angle-forward">
                  <span>
                    View
                  </span>
                  <fa :icon="['fa', 'arrow-right']" />
                </div>
              </div>
            </div>
            <!-- .project-list__item-content -->
          </a>
        </parallax-card>
        <div class="project-list__item-tasks">
          <p>
            {{ item.summary }}
          </p>
        </div>
        <!-- .project-list__item-summary -->
      </li>
      <!-- .project-list__item -->
    </ul>

    <h3>
      My Favorite Pens
    </h3>

    <ul class="pen-list">
      <li v-for="(item, idx2) in pens" :key="idx2">
        <a :href="item.url" class="pen-list__link">
          <header>
            <div class="pen-list__icon">
              <fa :icon="['fab', 'codepen']" />
            </div>
            <div>
              <h4>
                {{ item.name }}
              </h4>
            </div>
          </header>
          <ul class="pen-list__tech">
            <li v-for="(i, idx3) in item.tech" :key="idx3">
              <span class="pen-list__tech__icon">
                <fa :icon="['fa', 'tag']" />
              </span>
              <span>
                {{ i }}
              </span>
            </li>
          </ul>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { workStore } from '~/store/work'

// Pinia actions for fetching data
const work = workStore().getWork()
const pens = workStore().getPens()

const metaDescription = 'Selected projects that I\'ve worked on.'
const metaTitle = 'Select Projects'

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
@use '../../styles/variables' as v;

.project-list {
  list-style: none;
  padding: 0;
  margin: 4rem 0;
  max-width: 1320px;

  @apply
    xl:grid
    lg:grid-cols-2
    2xl:grid-cols-3
    gap-8;

  // link resets
  li:before {
    display: none !important;
  }

  a:after {
    display: none !important;
  }
}

.project-list__item {
  // perspective: 680px;

  &:not(:last-of-type) {
    margin: 0 0 6rem 0;
  }

  &:before {
  }
}

.project-list__link {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 3px 3px 0 0;

  &:after {
    position: absolute;
    bottom: -3rem;
    left: 0;
    z-index: 0;
    content: "";
    display: block;
    width: 100%;
    height: 45%;
    background: linear-gradient(to top, var(--color-teal) 50%, transparent 100%);
    transform: rotate(-5deg) scaleX(1.2);
  }

  @media #{v.$bp-medium} {
    transition: transform 300ms var(--base-easing);
    transform-origin: center;

    &:after {
      transition:
        height 300ms var(--base-easing),
        transform 300ms var(--base-easing) 100ms;
    }

    &:hover {
      // transform: rotateX(8deg);

      &:after {
        height: 70%;
        // transform: rotate(5deg) scaleX(1.2);
      }

      .project-list__item-faux-link {
        background-color: var(--color-yellow);
        color: var(--color-mid);
      }

      .project-list__item-title {
        background: var(--color-pink);
        color: var(--color-light);
      }
    }
  }
}

.project-list__item-faux-link {
  background-color: var(--color-pink);
  display: block;
  padding: 0.65rem 2rem;
  float: right;
  clear: both;
  transform: skewX(-10deg) translate(1rem, -1.2rem) !important;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-light);
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  transition: background 300ms ease-in-out, color 300ms ease-in-out;
}

.project-list__item-image {
  display: block;
  margin: 0;
  width: 100%;
  height: auto;

  img {
    aspect-ratio: 16 / 9;
  }
}

.project-list__item-tasks {
  font-size: 1.3rem;
  background: linear-gradient(to top, transparent 10%, var(--color-mid) 100%);
  margin: 1rem 0 0 0;
  padding: 1.3rem;
  border-radius: var(--radius);

  h4 {
    --i: 0 0 0.8rem 0;

    margin: var(--i);
    padding: var(--i);
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-lime);
    border-bottom: 1px solid var(--color-shade);

    &:after {
      display: none;
    }
  }

  p {
    &:first-of-type {
      margin-top: 0;
      padding-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  @media #{v.$bp-medium} {
    font-size: 1.4rem;
  }
}

.project-list__item-content {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 30px;
  display: block;
  width: calc(100% - 60px);
}

.project-list__item-content-inner {
  transform: skewX(10deg);
}

.project-list__item-title {
  padding: 1rem 2rem;
  margin: 0;
  background-color: var(--color-mid);
  font-size: 1.8rem;
  color: var(--color-teal);
  transition: background 300ms ease-in-out, color 300ms ease-in-out;

  &:after,
  &:before {
    display: none;
  }

  @media #{v.$bp-medium} {
    font-size: 2.4rem;
  }
}

.angle-forward {
  transform: skewX(10deg);
}

.angle-reverse {
  transform: skewX(-10deg);
}

//
// pens
//

.pen-list {

  li, a {

    &:before, &:after {
      display: none !important;
    }
  }

  > li {
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0;
    padding: 0;
    color: var(--color-lime);
    transition: color 150ms ease-in-out;
  }

  @media #{v.$bp-medium} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    > li {
      flex: 0 0 50%;
      flex-basis: 50%;
    }
  }
}
.pen-list__link {
  position: relative;
  display: block;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: linear-gradient(to bottom, var(--color-mid) 10%, transparent 50%);
  transition: all 150ms ease-in-out;
  box-shadow: 0 0 var(--color-mid);
  backdrop-filter: blur(2px);

  &:hover, &:focus {
    transform: translate(-0.5rem, -0.5rem);
    box-shadow: 0.5rem 0.5rem var(--color-lime);

    .pen-list__icon {
      color: var(--color-lime);
    }
  }

  header {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1.5rem 0;
    padding: 0;

    &:after {
      display: none;
    }

    > div:first-of-type {
      flex-grow: 0;
    }

    > div:last-of-type {
      flex: auto;
    }
  }

  h4 {
    font-size: 1.6rem;
    color: #fff;
    padding: 0;
    margin: 0;

    &:after {
      display: none;
    }
  }
}

.pen-list__icon {
  font-size: 2.5rem;
  line-height: 1.2;
  color: var(--color-shade);
  transition: color 150ms ease-in-out;
}

.pen-list__tech {
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    background: var(--color-mid);
    color: var(--color-lime);
    line-height: 1.3;
    padding: 0.5rem 0.8rem;
    border-radius: var(--radius);
  }
}

.pen-list__tech__icon {
  color: var(--color-shade);
  font-size: 1.2rem;
}
</style>
