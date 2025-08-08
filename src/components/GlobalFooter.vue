<template>
  <footer class="page-footer">
    <div class="page-footer__content">
      <div class="page-footer__social mb-12 xl:mb-0">
        <h5 class="page-footer__title">
          Connect
        </h5>
        <ul>
          <li>
            <a rel="me" href="https://codepen.io/bloqhead">
              <fa :icon="['fab', 'codepen']" />
              <span>Codepen</span>
            </a>
          </li>
          <li>
            <a rel="me" href="https://github.com/bloqhead">
              <fa :icon="['fab', 'github']" />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a rel="me" href="https://www.linkedin.com/in/darynstpierre/">
              <fa :icon="['fab', 'linkedin']" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="page-footer__music mb-12 xl:mb-0">
        <h5 class="page-footer__title">
          Last.fm Likes
        </h5>
        <music />
      </div>

      <div class="page-footer__copyright">
        <p>&copy; {{ currentYear }} Daryn St. Pierre</p>
        <p>
          <a href="https://vitejs.dev/">Vite</a> + <a href="https://render.com/">Render</a>
        </p>
        <ul class="page-footer__links">
          <li>
            <router-link to="/uses/">
              Uses
            </router-link>
          </li>
          <li>
            <router-link to="/privacy/">
              Privacy
            </router-link>
          </li>
          <li>
            <router-link to="/terms/">
              Terms
            </router-link>
          </li>
          <li>
            <a href="https://resume.daryn.codes/">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <!-- .page-footer -->
</template>

<script setup lang="ts">
import Music from '~/components/Music.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
@use '../styles/variables' as v;

.page-footer {
  background-color: rgba(v.$mid, 0.85);
  font-family: var(--font-mono);
  font-size: 0.8em;
  color: var(--color-shade);
  margin: 0;

  a {
    text-decoration: underline;

    &.router-link-active {
      color: var(--color-light);
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
}

.page-footer__title {
  font-size: 1.25em;
  letter-spacing: 0;
  margin: 1em 0;
  color: var(--color-light);
}

.page-footer__content {
  padding: calc(var(--global-component-padding) * 2);
}

.page-footer__copyright {
  margin-top: 2em;
}

.page-footer__social {
  list-style: none;
  padding: 0;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0;
    margin: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;

    svg path {
      transition: fill 0.2s ease-in-out;
    }

    &:hover {

      svg path {
        fill: var(--color-light);
      }
    }
  }

  span {
    margin-left: 0.5em;
    letter-spacing: var(--char-spacing);
  }
}

.page-footer__links {
  display: flex;
  margin: 1rem -1rem;

  li {
    margin: 0 1rem;
  }

  a {
    display: block;
  }
}

.page-footer__secondary {
  padding: calc(var(--global-component-padding) * 2);
  background-color: var(--color-dark);
}

@media #{v.$bp-medium} {
  .page-footer {
    text-align: left;
  }

  .page-footer__copyright {
    margin-top: 0;
  }
}
</style>
