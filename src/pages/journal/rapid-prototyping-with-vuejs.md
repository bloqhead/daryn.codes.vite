<route lang="yaml">
meta:
  layout: post
  title: Rapid Prototyping With Vue CLI 3
  date: 2019-04-17
  excerpt: Learn to quickly prototype out standalone components using Vue.js 3
</route>

When you're like me (and a ton of other devs), you'll get an idea in your head that you want to start working on immediately. So you might clone a boilerplate you have stored in Github, spin up a new Pen (my usual plan of attack), serve an index file via Node, or one of a million other ways. Sometimes the effort to finally get to working on your idea can be a chore or perhaps you're lazy like myself. From my experience, those small ideas often evolve into projects that go into a Github repo and are comprised of multiple asset files.

This approach will help you get the other stuff out of the way and immediately get to work locally.

## Why I love Vue

The benefit of working in Vue components is that you can have your HTML, styles and JavaScript all in one place--saving you from having to jump around in multiple files for something you might not have completely fleshed out.

Vue components are one of my favorite parts of Vue because of how modular and portable they can be. They're great for building and perfecting repeatable patterns, without project-specific stuff getting in the way. As long as they aren't overly opinionated, you can drop them into any Vue project you have going at any time.

To preface things, I'm far from any sort of expert when it comes to Vue. I'm a former-designer-turned-front-end-developer that has been coding since around 2001. I've built a few things with it (including [my own site](https://daryn.codes)) and love every minute I'm working with it.

## Give me the goods!

I'm gonna give you the tl;dr for getting things started. I am making the assumption that you're comfortable with the command line:

1. Install Vue CLI:

- **NPM:** `npm install -g @vue/cli`
- **Yarn:** `yarn global add @vue/cli`
- **Confirm:** `vue --version` -- this should return `3.x`

2. `cd` into your desired working directory
3. Create your Vue component--let's call it `Cat.vue`

- **EasyMode:** `touch Cat.vue && code Cat.vue`

4. Open it in your favorite editor

## Start working

First off, you'll want to get your HTML structure in place:

```vue
<template>
  <div class="cat">
    <h1>🐈</h1>
  </div>
</template>
```

At this point you can technically run your app. **[Skip to that part](#run-it-6)**.

> But I want to use Pug! How do I do that?

First, you have to install the appropriate loader for it:

`npm i -D pug pug-plain-loader`

**Now you can do this:**

```vue
<template lang="pug">
  .cat
    h1 🐈
</template>
```

### Styling

To start working on something via Vue CLI, this is all you need. If you're simply prototyping your structure, this is fine, but most people will want to have some styles too:

**SCSS:**

You'll need the proper module to compile Sass/SCSS accordingly. For this tutorial, I'm only going to cover SCSS because it's what I use:

1. In the directory where your Vue component is, run: `npm i -D sass-loader node-sass`
2. Now you can do this:

```vue
<template lang="pug">
  .cat
    h1 🐈
</template>

<style lang="scss">
.cat {

  h1 {
    font-size: 5rem;
  }
}
</style>
```

There you go!

**Note:** `scss` is interchangeable with `less`, `sass`, `postcss`, etc.

### JavaScript

Now for the last part of our fancy cat Vue component: ✨JavaScript✨

So for this one, we're going to simply write some JS directly in the `mounted` lifecycle hook:

```vue
<script>
export default {
  mounted() {
    const el = this.$el // the main element within your Vue app
    const cat = el.querySelector('h1') // now you can target elements within your app
    cat.addEventListener('click', (ev) => {
      window.console.log(ev.target)
    })
  }
}
</script>
```

We are simply targeting the `h1` element inside of our main Vue element, and attaching a click event to it for testing purposes. This is the easiest way to run JS when prototyping because it allows your JavaScript to run as soon as the Vue instance is mounted to the DOM and ready to go.

If you want to get fancy and know your way around Vue, you can write functions as individual `methods`. This would keep things divided up for clarity and debugging purposes.

---

### Your finalized Vue component

```vue
<script>
export default {
  mounted() {
    const el = this.$el
    const cat = el.querySelector('h1')
    cat.addEventListener('click', (ev) => {
      window.console.log(ev.target)
    })
  }
}
</script>

<template lang="pug">
  .cat
    h1 🐈
</template>

<style lang="scss">
.cat {

  h1 {
    font-size: 5rem;
  }
}
</style>
```

## Run it!

Now that you've got your basic prototype built out, let's see it in action:

`vue serve Cat.vue`

You should be prompted in the console to open a `localhost` url. Do that and you should see your component running. Yay! As you make changes, the browser will automatically reload to reflect them.

## Have fun! 🎉

At this point the rest is up to you. You can build out everything you need within this 1 component and not have to go through the process of setting up a full-fledged project.

### Resources

- [Installation](https://cli.vuejs.org/guide/installation.html)
- [Vue CLI guide](https://cli.vuejs.org/guide/)
- [Instant Prototyping Basics](https://cli.vuejs.org/guide/prototyping.html)
