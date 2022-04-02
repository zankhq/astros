<a href="https://astros.warps.it">
  <img src=".github/assets/astros.gif" />
</a>

# [Astros](https://astros.warps.it)

Astros is a showcase template for various components of the [Astro](https://astro.build) framework.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/warpsio/astros)

### [📘 Documentation →](https://astros.warps.it/documentation)

### [🧑‍🚀 Astro website →](https://astro.build/)

---

## 🧪 Test

On the folder run

`npm i` or `yarn`

`npm run dev` or `yarn dev`

(if it's not working report an [issue](https://github.com/warpsio/astros/issues))

## 🚀 Deploy

### Netlify (suggested)

You can either click on the button above to deploy to Netlify automatically, or you can fork this repository and deploy manually from https://app.netlify.com/start.

You can leave build settings as defaults.

### Others

You can check the deploy documentation at https://docs.astro.build/en/guides/deploy/

## 🧞 Dependencies

Astros depends on the following packages:

| Command                                                             | Action                                                   |
| :------------------------------------------------------------------ | :------------------------------------------------------- |
| [astro-sections](https://github.com/warpsio/astro-sections)         | Easily define structured sections (WIP)                  |
| [astro-headers](https://github.com/warpsio/astro-headers)           | Collection of configurable unstyled headers (WIP)        |
| [astro-footers](https://github.com/warpsio/astro-footers)           | Collection of configurable footers (WIP)                 |
| [astro-form](https://github.com/warpsio/astro-form)                 | Create form from json in astro (WIP)                     |
| [astro-image](https://github.com/warpsio/astro-image)               | Create animated images easily (WIP)                      |
| [astro-localization](https://github.com/warpsio/astro-localization) | Localize your website from a simple json structure (WIP) |
| [astro-theme](https://github.com/warpsio/astro-theme)               | Handle theming on your website (WIP)                     |
| [astro-utils](https://github.com/warpsio/astro-utils)               | Collection of useful utilities (WIP)                     |
| [astro-seo](https://github.com/jonasmerlin/astro-seo)               | SEO friendly meta tags                                   |
| [astro-icon](https://github.com/natemoo-re/astro-icon)              | A straight-forward Icon component for Astro              |

For documentation check https://astros.warps.it/documentation or individual components.

## FAQ

<details>
  <summary>Work with modules in relink</summary>
  This is helpful if you want to apply some changes to various modules while you are working on the website.

To do so you have to go into each module and run

```
npm link
```

then in the main website folder run

```
npm link astro-form astro-footers astro-image astro-localization astro-lottie astro-sections
```

</details>

<br/>

---

<p align="right"><a href="https://warps.it/" target="_blank">warps.it</p>
