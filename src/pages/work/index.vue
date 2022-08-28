<template>
  <div class="page-content">
    <h1 class="brush title">
      Work
    </h1>

    <div class="intro">
      <p>
        Select projects I've worked on that don't violate NDAs.
      </p>
    </div>

    <ul class="project-list xl:grid xl:grid-cols-2 gap-4">
      <li
        v-for="(item, idx) in work"
        :key="idx"
        class="project-list__item"
        itemscope
        itemtype="http://schema.org/CreativeWork"
      >
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

    <ul class="pen-list xl:flex xl:flex-cols-3 xl:flex-wrap">
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
            <li v-for="(i, idx) in item.tech" :key="idx">
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
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as v;

.project-list {
  list-style: none;
  padding: 0;
  margin: 4rem 0;
  max-width: 1320px;

  li:before {
    display: none !important;
  }

  a:after {
    display: none !important;
  }
}

.project-list__item {
  perspective: 680px;

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
      transform: rotateX(8deg);

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
  margin: 0;
  padding: 1.3rem;
  border-radius: 0 0 3px 3px;

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

  @media (var(--bp-medium)) {
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

  @media (var(--bp-medium)) {
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
  justify-content: stretch;
  align-items: stretch;
  flex-wrap: wrap;

  li, a {

    &:before, &:after {
      display: none !important;
    }
  }

  > li {
    align-self: stretch;
    justify-self: stretch;
    margin: 0;
    padding: 0 0.5rem;
  }

  h4 {
    margin: 0;
    padding: 0;
    color: var(--color-lime);
    transition: color 150ms ease-in-out;
  }

  @media (min-width: 1280px) {
    > li {
      flex-basis: 50%;
    }
  }
}

.pen-list__link {
  position: relative;
  display: block;
  padding: 2rem;
  border-radius: 5px;
  background: linear-gradient(to top, #000 10%, var(--color-mid) 100%);

  header {
    position: relative;
    width: 100%;
    display: flex;
    gap: 10px;
    margin: 0 0 1rem 0;
    padding: 0;

    &:after {
      display: none;
      // position: absolute;
      // bottom: 0;
      // left: 0;
      // display: block;
      // height: 1px;
      // width: 100%;
      // content: "";
      // background: var(--link-gradient);
      // margin: var(--x) 0 0 0;
    }

    > div:first-of-type {
      flex-grow: 0;
    }

    > div:last-of-type {
      flex: auto;
    }
  }

  h4 {
    --x: 1rem;
    --i: 0 0 var(--x) 0;

    font-size: 1.6rem;
    color: #fff;
    padding: var(--i);
    margin: 0;

    &:after {
      display: none;
    }
  }
}

.pen-list__icon {
  font-size: 1.6rem;
  line-height: 1.2;
  color: rgba(#fff, 0.35);
}

.pen-list__tech {
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  gap: 5px;

  li {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    background: #222;
    color: var(--color-lime);
    line-height: 1.3;
    padding: 0.5rem 0.75rem;
    border-radius: 3px;
  }
}
</style>
