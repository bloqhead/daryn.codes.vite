<template>
  <div class="doomguy">
    <video
      preload="auto"
      autopictureinpicture="false"
      disablepictureinpicture
      playsinline
      autoplay
      loop
      muted
    >
      <source :src="video1" type="video/webm">
      <source :src="video2" type="video/mp4">
    </video>
  </div>
</template>

<script setup lang="ts">
const video1 = ref('')
const video2 = ref('')
const path = '/images/doomguy'

type Video = 'doomguy1' | 'doomguy2'

const props = defineProps({
  video: {
    type: String,
    required: true,
    validator: (prop: Video) => ['doomguy1', 'doomguy2'].includes(prop),
  },
})

if (props.video == 'doomguy1') {
  video1.value = `${path}/doomguy1.webm`
  video2.value = `${path}/doomguy1.mp4`
}

if (props.video == 'doomguy2') {
  video1.value = `${path}/doomguy2.webm`
  video2.value = `${path}/doomguy2.mp4`
}
</script>

<style lang="scss" scoped>
.doomguy {
  --bg: #1c1c1c;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 1em auto;
  text-align: center;

  &:before,
  &:after {
    content: "";
    height: 5px;
    flex: 1 0 0;
    background-color: var(--bg);
    border-radius: 5px;
  }

  img, video {
    display: block;
    width: 80px;
    height: auto;
    background-color: var(--bg);
    border-radius: 10px;
    padding: 5px;
  }
}
</style>