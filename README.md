<a href="https://astros.zank.studio">
  <img src=".github/images/astros.gif" />
</a>

# [Astros](https://astros.zank.studio)

<a href="https://astro.build/">![Astro](.github/images/astro-icon.png)</a>
<a href="https://tailwindcss.com/">![Tailwind](.github/images/tailwind-icon.png)</a>
<a href="https://alpinejs.dev/">![Alpine js](.github/images/alpine-icon.png)</a>

Astros is a template made with [Astro](https://astro.build), [Tailwind](https://tailwindcss.com/) and [AlpineJS](https://alpinejs.dev/).

This project is strongly inspired by [Astroship](https://github.com/surjithctly/astroship), [Flowbite](https://flowbite.com/blocks/) and [Tailwind UI](https://tailwindui.com/components) components, make sure to check them out as well!


[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zankhq/astros)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zankhq/astros)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zankhq/astros)


### [🧪 Site preview →](https://astros.zank.studio)

### [🧑‍🚀 Astro website →](https://astro.build/)

### [🕮 Astro docs →](https://docs.astro.build/en/getting-started/)

---

## Preview

![Alt text](.github/images/pagespeed-small.png)

![Astros Preview](.github/images/astros-preview.png)

## 🧪 Test

On the folder run

1. `npm i`  <small>(or `yarn` or `pnpm i`)</small>
2. `npm run dev`  <small>(or `yarn dev` or `pnpm dev`)</small>

(if it's not working report an [issue](https://github.com/zankhq/astros/issues))

## 🚀 Deploy

### Cloudflare pages (suggested)

You can either click on the button above to deploy to Cloudflare automatically, or you can fork this repository and deploy manually from cloudflare dashboard.

You can leave build settings as defaults.

<details>
<summary>Cloudflare configuration</summary>

![Alt text](.github/images/image.png)

</details>

### Netlify

`TODO`

### Vercel

`TODO`

### Others

You can check the deploy documentation at https://docs.astro.build/en/guides/deploy/

## ✅ Features

- [x] Localization (with astro-i18next)
- [x] Light/Dark mode (provided by tailwind)
- [x] Discussion on articles (thanks to giscus)
- [x] Blog
- [x] CMS for editing blog post (thanks to Sveltia CMS)
- [x] PWA (thanks to vite-pwa)
- [ ] AI to generate article posts

## ✍️ Admin dashboard

You can access the admin dashboard for editing blog post at `/admin` (https://astros.zank.studio/admin)

For more information follow Sveltia CMS documentation at [https://github.com/sveltia/sveltia-cms](https://github.com/sveltia/sveltia-cms)

## 🧞 Dependencies

Astros depends on the following packages:

| Dependency                                                                             | Version        |
| -------------------------------------------------------------------------------------- | -------------- |
| [@astrojs/mdx](https://www.npmjs.com/package/@astrojs/mdx)                             | ^0.19.7        |
| [@astrojs/rss](https://www.npmjs.com/package/@astrojs/rss)                             | ^2.4.3         |
| [@astrojs/sitemap](https://www.npmjs.com/package/@astrojs/sitemap)                     | ^1.3.3         |
| [@astrojs/tailwind](https://www.npmjs.com/package/@astrojs/tailwind)                   | ^3.1.3         |
| [@fontsource-variable/inter](https://www.npmjs.com/package/@fontsource-variable/inter) | ^5.0.2         |
| [astro](https://www.npmjs.com/package/astro)                                           | ^2.6.1         |
| [astro-i18next](https://www.npmjs.com/package/astro-i18next)                           | ^1.0.0-beta.21 |
| [astro-icon](https://www.npmjs.com/package/astro-icon)                                 | ^0.8.1         |
| [astro-seo](https://www.npmjs.com/package/astro-seo)                                   | ^0.7.4         |
| [bad-words](https://www.npmjs.com/package/bad-words)                                   | ^3.0.4         |
| [dotenv](https://www.npmjs.com/package/dotenv)                                         | ^16.1.4        |
| [openai](https://www.npmjs.com/package/openai)                                         | ^3.2.1         |
| [rehype-autolink-headings](https://www.npmjs.com/package/rehype-autolink-headings)     | ^6.1.1         |
| [rehype-slug](https://www.npmjs.com/package/rehype-slug)                               | ^5.1.0         |
| [rss-parser](https://www.npmjs.com/package/rss-parser)                                 | ^3.13.0        |
| [tailwindcss](https://www.npmjs.com/package/tailwindcss)                               | ^3.3.2         |

## Known issues

- Localization is not detected automatically

## FAQ

<br/>

<details>
  <summary>What is this?</summary>
<br/>
  This is a astro template that uses tailwindcss and alpinejs
</details>
<br/>

<details>
  <summary>Why alpinejs? Why don't just use js?</summary>
<br/>
  Alpine js is less than 17kb and it make javascript very fast to write, there are also various open source ready to use components like https://js.hyperui.dev, https://devdojo.com/pines, https://www.alpinetoolbox.com/examples, https://alpinejs.dev/components#components
</details>
<br/>

<details>
  <summary>But I don't need alpine js, can I remove it?</summary>
<br/>
  Of course, but some components use it and you'll have to edit these, more specifically you ll have to: <br/>
  <ul style="list-style: inside;">
    <li>First remove the package with the command <code>npm unistall @astrojs/alpinejs @types/alpinejs alpinejs</code></li>
    <li>Adjust all components that uses alpine js: <code>faq.astro</code>, <code>themeselector.astro</code>, <code>navbar.astro</code></li>
  </ul>
</details>
<br/>

<details>
  <summary>Can I remove also tailwidcss?</summary>
<br/>
  I mean, you can, but you'll have to basically rewrite all the template, so I don't recommend it
</details>
<br/>

<details>
  <summary>I don't need client routing, how can I remove it?</summary>
<br/>
  From astro 2.9 you can opt-in for client routing (https://astro.build/blog/astro-290) by activating the experimental flag viewTransitions <br/>
  You can remove client routing by removing <code>viewTransitions: true</code> from <code>astro.config.mjs</code> And the <code>ViewTransitions</code> component from Layout.astro
</details>
<br/>

<details>
  <summary>I don't need multiple language, how can I remove it?</summary>
<br/>
  One way is to simply keep one language and remove the selector from the footer but in order to fully remove the localization you have to: <br/>
  <ul style="list-style: inside;">
    <li>Remove the i18next pacakage <code>npm unistall astro-i18next</code></li>
    <li>Remove <code>astro-i18next.config.mjs</code> file</li>
    <li>Remove <code>locales</code> folder from public</li>
    <li>Remove <code>languageselector.astro</code> file and from footer</li>
    <li>Find all reference to <code>i18next</code> and <code>astro-i18next</code> and replace with your text</li>
  </ul>
</details>
<br/>

<details>
  <summary>I don't need dark mode, how can I remove it?</summary>
<br/>
  Dark mode is embedded into tailwindcss, so you can't remove it, but you can remove the switch from the navbar
</details>
<br/>


<details>
  <summary>How can I configure the Sveltia CMS authentication with cloudflare?</summary>
<br/>
  To configure Sveltia CMS with cloudflare follow this guide <a href="https://github.com/sveltia/sveltia-cms" target="_blank">https://github.com/sveltia/sveltia-cms</a>
</details>
<br/>


<details>
  <summary>How can I change the localization languages?</summary>
<br/>
  In order to change the languages you have to change the languages in the file <code>astro-i18next.config.mjs</code> and in the netlifyCMS configuration on the file <code>astro.config.mjs</code> <br/>
  Then change the locales files folders in <code>public/locales</code>
</details>
<br/>

<details>
  <summary>What are the files in the function folder used for?</summary>
<br/>
  These are cloudflare function that are used for the authentication to the decap CMS
</details>
<br/>

<details>
  <summary>The build on cloudflare keep failing, why?</summary>
<br/>
  One of the problem could be that the Build system version is setted to version 1, make sure that version 2 is selected
</details>
<br/>

<details>
  <summary>Work with modules in relink</summary>
<br/>
  This is helpful if you want to apply some changes to various modules while you are working on the website.
To do so you have to go into each module and run

```
npm link
```
</details>
<br/>

---

<p align="right"><a href="https://zank.studio/" target="_blank">zank.studio</p>
