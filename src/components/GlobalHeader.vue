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
