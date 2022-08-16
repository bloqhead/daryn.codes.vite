<template>
  <svg
    id="logo"
    itemprop="logo"
    aria-labelledby="logoTitle logoDesc"
    viewBox="0 0 312 283"
    preserveAspectRatio="xMinYMin meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="logoTitle">
      Daryn St. Pierre - Front-End Web Developer
    </title>
    <desc id="logoDesc">
      A logo that is comprised of code brackets wrapped around a skateboard.
    </desc>
    <g id="skateboard" transform="matrix(1, 0, 0, 1, -150, -160)">
      <path
        id="bracket_right"
        class="bracket path"
        d="M370.7 371.4l72-72-72-72"
      />
      <path
        id="bracket_left"
        class="bracket path"
        d="M238.7 227.4l-72 72 72 72"
      />
      <g id="complete">
        <path
          id="deck"
          class="path"
          d="M338.8 175.7l-.6 45.1-70.7 170-31.6 32.2"
        />
        <ellipse
          id="wheel_1"
          class="wheel"
          transform="rotate(-67.418 349.297 254.612)"
          cx="349.3"
          cy="254.6"
          rx="10.2"
          ry="10.2"
        />
        <ellipse
          id="wheel_2"
          class="wheel"
          transform="rotate(-67.418 296.09 382.571)"
          cx="296.1"
          cy="382.6"
          rx="10.2"
          ry="10.2"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#logo {
  .path {
    fill: none;
    stroke: #f54768;
    stroke-width: 14;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .wheel {
    fill: #f54768;
  }
}
</style>
