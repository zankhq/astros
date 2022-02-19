<a href="https://astro.build">
  <img src="https://raw.githubusercontent.com/withastro/astro/main/assets/social/banner.svg" />
</a>

# [Astros](https://astros.warps.io)

Astros is a showcase template for various components of the [Astro](https://astro.build) framework.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/warpsio/astros)

### [📘 Documentation →](https://astros.warps.io/documentation)

### [🧑‍🚀 Astro website →](https://astro.build/)

---

## 🧪 Test

On the folder run

`npm i`

`npm run dev`

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
| [asstro-footers](https://github.com/warpsio/astro-footers)          | Collection of configurable footers (WIP)                 |
| [astro-form](https://github.com/warpsio/astro-form)                 | Create form from json in astro (WIP)                     |
| [astro-image](https://github.com/warpsio/astro-image)               | Create animated images easyli (WIP)                      |
| [astro-localization](https://github.com/warpsio/astro-localization) | Localize your website from a simple json structure (WIP) |
| [astro-theme](https://github.com/warpsio/astro-theme)               | Handle theming on your website (WIP)                     |
| [astro-utils](https://github.com/warpsio/astro-utils)               | Collection of useful utilities (WIP)                     |
| [astro-seo](https://github.com/jonasmerlin/astro-seo)               | SEO friendly meta tags                                   |

For documentation check https://astros.warps.io/documentation or individual components.

## FAQ

<details>
  <summary>Work with modules in relink</summary>
  This is helful if you want to apply some changes to various modules while you are working on the website.

To do so you have to go into each module and run

```
npm link
```

then in the main website folder run

```
npm link astro-blog astro-form astro-footers astro-headers astro-image astro-localization astro-lottie astro-sections astro-theme astro-utils
```

</details>
