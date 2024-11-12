<template>
  <div
    ref="target"
    class="page-header"
    itemscope
    itemtype="http://schema.org/Organization"
  >
    <router-link
      to="/"
      exact
      class="logo-link"
      itemprop="url"
      tabindex="0"
      @click="restingState"
    >
      <logo />
    </router-link>

    <button
      id="hamburger"
      type="button"
      aria-label="Menu"
      aria-controls="menu"
      :aria-expanded="isExpanded ? 'true' : 'false'"
      class="hamburger hamburger--collapse"
      :class="{ 'is-active': isActive }"
      @click="toggleState"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner" />
      </span>
      <span class="sr-only">Menu</span>
    </button>
    <!-- .hamburger -->

    <nav
      id="menu"
      class="menu menu--main"
      role="navigation"
      aria-labelledby="hamburger"
      :class="{
        'is-active': isActive,
        'in-view': navIsVisible,
      }"
    >
      <ul>
        <li>
          <router-link
            to="/"
            exact
            tabindex="1"
            class="menu__link"
            @click="restingState"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/work/"
            tabindex="2"
            class="menu__link"
            @click="restingState"
          >
            Work
          </router-link>
        </li>
        <li>
          <router-link
            to="/journal/"
            tabindex="3"
            class="menu__link"
            @click="restingState"
          >
            Journal
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact/"
            tabindex="4"
            class="menu__link"
            @click="restingState"
          >
            Hello
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- .page-header -->
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import Logo from '~/components/Logo.vue'

const isActive = ref<Boolean>(false)
const isExpanded = ref<Boolean>(false)

const target = ref(null)
const navIsVisible = useElementVisibility(target)

const toggleState = () => {
  isActive.value = !isActive.value
  isExpanded.value = !isExpanded.value
}

const restingState = () => {
  isActive.value = false
  isExpanded.value = false
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as v;
@use '../styles/mixins' as m;

#logo {
  width: 100%;
  height: auto;
}

.logo-link {
  display: block;
  text-align: center;
  outline: none;
}

.page-header {
  padding: var(--global-component-padding) calc(var(--global-component-padding) * 2);
}

@media (max-width: 799px) {
  .logo-link {
    max-width: 30%;
    min-width: 80px;
    margin: 0 auto;
  }
}

@media #{v.$bp-medium} {
  .page-header {
    display: grid;
    grid-template-columns: repeat(3, 1fr 2fr);
    grid-template-areas: "logo menu menu menu menu menu";
  }

  .logo-link {
    grid-area: logo;
    max-width: 22rem;
  }

  .menu--main {
    grid-area: menu;
  }
}

.menu {
  @include m.cleartext;

  display: flex;
  justify-content: center;
  margin-left: auto;
  font: 700 2rem/2 var(--font-mono);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: var(--char-spacing);

  ul {
    @include m.list-reset;
    transition: all 150ms ease-in-out;
  }

  li,
  a {
    display: block;
  }

  li {
    @for $i from 1 through length(v.$colors-site) {
      $c: #{nth(v.$colors-site, $i)};

      &:nth-of-type(#{$i}) a:not(:hover) {
        color: $c;
      }

      @media #{v.$bp-medium} {
        &:nth-of-type(#{$i}) a:after {
          background-color: $c;
        }
      }
    }
  }

  .menu__link {
    padding: 0.25rem 2rem;
    text-decoration: none;
    outline: none;
    transition: all 250ms ease-in-out;

    &:hover {
      color: #fff;

      @media #{v.$bp-medium} {
        &:after {
          transform: scaleX(0.5) scaleY(1);
        }
      }
    }

    @media #{v.$bp-medium} {
      &:after {
        display: block;
        content: "";
        height: 3px;
        transform: scaleX(0) scaleY(1);
        transition:
          transform 250ms var(--base-easing),
          background 250ms var(--base-easing);
      }

      &.router-link-active:after {
        transform: scaleX(0.5) scaleY(1);
      }
    }
  }

  @media (max-width: 799px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(v.$mid, 0.96);
    font-size: 4rem;
    opacity: 0;
    visibility: hidden;
    transition:
      visibility 300ms var(--base-easing),
      transform 300ms var(--base-easing),
      opacity 300ms var(--base-easing);
    transform-origin: center;
    transform: scale(0.85) translateY(2rem);

    li {
      transition:
        opacity 300ms var(--base-easing),
        transform 300ms var(--base-easing);
      opacity: 0;
      transform: translateY(-2rem);

      @for $i from 1 through 4 {
        &:nth-of-type(#{$i}) {
          transition-delay: #{$i * 150}ms;
        }
      }
    }

    &.is-active {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateX(0);

      li {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media #{v.$bp-medium} {
    position: fixed;
    z-index: 999;
    top: 2rem;
    right: 2rem;
    overflow: hidden;
    justify-content: flex-end;
    transition: all 150ms ease-in-out;
    transform-origin: center;

    ul {
      display: flex;

      >li {
        flex: 0 0 1;
      }
    }

    &:not(.in-view) {
      // right: 50%;
      // transform: translateX(50%);
      justify-content: center;
      background-color: rgba(v.$mid, 0.75);
      backdrop-filter: blur(10px);
      border-radius: 1.5rem;
      font-size: 1.5rem;

      .menu__link {
        padding: 0.5em 1.5em;
      }
    }
  }
}

// Hamburger

#hamburger {
  display: none;
}

@media (max-width: 799px) {
  #hamburger {
    display: block;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1001;

    &.is-active {

      .hamburger-inner,
      .hamburger-inner:before,
      .hamburger-inner:after {
        background-color: var(--color-yellow);
      }
    }
  }
}
</style>
