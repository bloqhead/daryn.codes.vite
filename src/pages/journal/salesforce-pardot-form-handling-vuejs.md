<route lang="yaml">
meta:
  layout: post
  title: SalesForce Pardot Form Handling With Vue.js
  date: 2020-01-25
  excerpt: An easy and sane approach to form handling with Vue.js and SalesForce Pardot
  ttr: 4
</route>

I am writing this short piece to save some poor souls out there from the heartache and hours of pure, unadulterated rage I faced when I came to the realization that SalesForce's Pardot form handlers do not accept your basic AJAX POST functions like every other sane piece of software out in the world does. This is a quick rundown on how to handle things in a sane manner.

### The problem

If you are a sane developer like myself, posting to forms from within frameworks like React and Vue.js is handled easily via `fetch` or `axios`. You post the data to your endpoint and then handle the app state changes based on the `response`. Success? Do this. Error? Do this instead. Simple... until you meet Pardot by SalesForce and come to the conclusion that you have to throw logic out the window.

### Preparing your Pardot form handler

First things first, let's make sure your handler is ready to go. I'm going to assume that:

1. You are already familiar with Pardot form handlers
2. You have already created a handler

In your Pardot handler, make sure to set both a success and error URL redirect:

![Pardot Form Redirects](/images/journal/sf-pardot-redirect-urls.png)

The goal is to make your Vue app react to the queries in your redirect URLs supplied here. In your Vue component, add a `formStatus` data attribute:

```vue
<script>
export default {
  data() {
    return {
      formStatus: null,
    }
  }
}
</script>
```

This is what we are going to use to trigger the appropriate UI. Let's created a new method to handle this behavior:

```vue
<script>
methods: {
  formBehaviorHandler() {
    const query = this.$route.query.form_success
    const status = query ? JSON.parse(query) : null

    this.formStatus = status

    if (status === false || status === true) {
      window.scrollTo({
        top: this.formDistanceFromTop,
        behavior: 'auto',
      })
    }
  }
}
</script>
```

What this is doing is:

1. Getting our route query via `$route.query.form_success`
2. Setting our `formStatus` data attribute accordingly based on the value of the `form_success` query (this is what will trigger the appropriate UI to be shown -- we will go over this next)
3. And then scrolling the user to the form's location on the page so that the UX is a bit smoother and shows them the form they just submitted to

Where and when do we use this method? Let's trigger it once our Vue app is mounted:

```js
mounted() {
  this.formBehaviorHandler()
}
```

This will check for the `form_success` URL parameter when our app is mounted, and react to it accordingly. If the URL query is not present, we do nothing.

Now we are going to handle the UI for whether or not our Pardot form returned an error or a successful submission:

```vue
<div v-if="formStatus === true">
  <p>Thank you!</p>
  <p>Your submission has been received.</p>
</div>

<div v-if="formStatus === false">
  <p>Whoops!</p>
  <p>Something went wrong! Please try again later.</p>
</div>
```

The above assumes that you are already familiar with [Conditional Rendering](https://vuejs.org/v2/guide/conditional.html "Conditional Rendering in Vue.js") in Vue.js. If `formStatus` is set to `false` based on the `/?form_success` route query, the error message is displayed. If it's set to `true`, the success message is displayed. Since `formStatus` is set to `null` by default, neither of these messages is displayed since they are not yet needed.

**Side note:** For form validation on the front end, I familiarizing yourself with [vee-validate](https://logaretm.github.io/vee-validate/ "VeeValidate - Template Based Form Validation Framework for Vue.js ").

All of this is great and good! Works wonders... **Except there is a gotcha that you will most likely not catch...**

### The Pardot redirect gotcha

After I completed all of the above and deployed to Netlify staging for testing, when I submitted the form and was redirected back to the success url on my site (`https://yourwebsite.com/?form_success=true`), I was welcomed with my Vue app's 404 page.

Why the hell is this happening? That route exists and there is handling in place for it. There is NO reason for it to 404.

The thing that FINALLY solved my problem? Untick this setting on your Pardot handler:

![Pardot Form Handler Data Forwarding](/images/journal/sf-pardot-data-forwarding.png)

My interpretation is that when Pardot was doing its redirect, it was attaching a payload that both my Vue app and Netlify could not process properly. So Vue's response was to go to a 404 page. Upon unticking this option, the redirect is simplified and our form submission and redirects magically started working.

### In conclusion

I hope that someone out there is able to benefit from this and it helps you avoid the hours upon hours that I wasted digging through SalesForce documentation (which is absolutely _abysmal_). Stack Overflow posts, and other obscure searches. It's amazing to me that in the year 2020, SalesForce doesn't support AJAX for Pardot form submissions, but based on how terrible their documentation is and how dated the Pardot interface is, I guess I shouldn't be _that_ surprised.

Good luck, friends. Pardot sucks.
