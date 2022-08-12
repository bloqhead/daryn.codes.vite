<template>
  <div class="page-header" itemscope itemtype="http://schema.org/Organization">
    <router-link to="/" exact class="logo-link" itemprop="url" tabindex="0">
      <logo />
    </router-link>

    <button
      type="button"
      aria-label="Menu"
      aria-controls="menu"
      :aria-expanded="isExpanded.toString()"
      id="hamburger"
      class="hamburger hamburger--collapse"
      :class="{ 'is-active': isActive }"
      @click="toggleState"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
      <span class="sr-only">Menu</span>
    </button>
    <!-- .hamburger -->

    <nav
      id="menu"
      class="menu menu--main"
      role="navigation"
      aria-labelledby="hamburger"
      :class="{ 'is-active': isActive }"
    >
      <ul>
        <li>
          <router-link
            @click.native="restingState"
            to="/"
            exact
            tabindex="1"
            class="menu__link"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            @click.native="restingState"
            to="/work/"
            tabindex="2"
            class="menu__link"
            >Work</router-link
          >
        </li>
        <li>
          <router-link
            @click.native="restingState"
            to="/journal/"
            tabindex="3"
            class="menu__link"
            >Journal</router-link
          >
        </li>
        <li>
          <router-link
            @click.native="restingState"
            to="/contact/"
            tabindex="4"
            class="menu__link"
            >Hello</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- .page-header -->
</template>

<script setup lang="ts">
import anime from 'animejs';
import Logo from '~/components/Logo.vue';

const isActive = ref(false)
const isExpanded = ref(false)

const toggleState = () => {
  isActive.value = !isActive.value;
  isExpanded.value = !isExpanded.value;
}

const restingState = () => {
  isActive.value = false;
  isExpanded.value = false;
}

const animate = () => {
  const tl = anime.timeline({
    easing: "cubicBezier(.57,.19,.3,.95)",
    duration: 550
  });

  tl.add({
    targets: "#logo",
    opacity: 1,
    scale: 1
  });

  tl.add(
    {
      targets: "svg g#skateboard path",
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: anime.stagger(250)
    },
    "+=250"
  );
}

onMounted(() => {
  animate();
})
</script>
