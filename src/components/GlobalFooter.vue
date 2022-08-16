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
            <a rel="me" href="https://mstdn.social/@kryosleep">
              <fa :icon="['fab', 'mastodon']" />
              <span>Mastodon</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="page-footer__music mb-12 xl:mb-0">
        <h5 class="page-footer__title">
          Music Loves
          <small>
            <a
              class="music__profile-link"
              href="https://music.apple.com/profile/pizzatacos"
              target="_blank"
              title="@pizzatacos on Apple Music"
            >
              @pizzatacos
            </a>
          </small>
        </h5>
        <music />
      </div>

      <div class="page-footer__copyright">
        <p>&copy; {{ currentYear }} Daryn St. Pierre</p>
        <p>
          Built with <a href="https://github.com/antfu/vitesse">Vitesse</a>
        </p>
        <p>
          Hosted by <a href="https://vercel.com/">Vercel</a>
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
