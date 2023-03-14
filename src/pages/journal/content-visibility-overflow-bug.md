<route lang="yaml">
meta:
  layout: post
  title: content-visibility Overflow Bug
  date: 2021-01-26
  excerpt: While trying out content-visibility for a project, I discovered an a11y flaw.
</route>

If you keep up with the latest CSS spec and features, you've probably already heard about `content-visibility`, which shipped recently in Chrome v85. I'll allow [Una Kravets and Vladimir Levin](https://web.dev/content-visibility/) to explain it:

> The content-visibility property, launching in Chromium 85, might be one of the most impactful new CSS properties for improving page load performance. content-visibility enables the user agent to skip an element's rendering work, including layout and painting, until it is needed. Because rendering is skipped, if a large portion of your content is off-screen, leveraging the content-visibility property makes the initial user load much faster. It also allows for faster interactions with the on-screen content. Pretty neat.

Sounds awesome, right? In today's web world, everyone is trying to shave off those extra few milliseconds on load times. If your page is loaded to the brim with fancy features, chances are high that it's heavy in file size, which can have adverse effects in SEO ranking--among other things. CSS like this is something that any good front-end engineer would jump on to get an easy assist on improving load times.

## Putting it to use

While trying to use `content-visibility: auto` on a project, I encountered what I consider some strange anti-a11y behavior.

Let's say I have `.container` with `content-visibility: auto` set on it. Inside of that container, I have a link that has `:focus` styles applied to it--specifically an exaggerated `outline` for this demo. I've also placed an image inside of the link simply for presentation:

```html
<div class="container">
  <a href="#" class="link">
    <img src="[...]" alt="" />
  </a>
</div>
```

## The bug

When tabbing through my page, I found that my link inside of `.container` was not displaying its `outline` like I would expect. This was odd to me because I did not have `overflow: hidden` applied to `.container`, which would definitely obscure the `outline` focus style. I dug a little deeper and found that `content-visibility: auto` was the culprit. Upon commenting it out, my `outline` became visible again when tabbing through the page.

**[I've created a demo on CodePen](https://codepen.io/bloqhead/full/bGwPJLw) that helps recreate the aforementioned bug.** You'll need to be in the latest version of Chrome (85) or using a Chromium-based browser that is using the latest build (I tested and discovered this in Brave 88).

This is a brand new feature so it's not something I recommend applying to everything under the sun, so approach it with caution. I'm not sure if this is intended behavior, but it's definitely an accessibility concern that should be taken into consideration and reviewed.
