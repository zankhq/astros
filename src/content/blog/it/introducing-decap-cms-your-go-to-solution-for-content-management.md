---
title: "Presentazione di Decap CMS La Tua Soluzione Ideale per la Gestione dei Contenuti"
draft: false
author: Jon Doe
tags:
  - decapcms
image:
  src: /images/decapcms.png
  alt: Decap CMS
snippet: Decap CMS, precedentemente noto come Netlify CMS, è un sistema di
  gestione dei contenuti open source che offre agli sviluppatori un modo
  semplice per gestire contenuti per i generatori di siti statici.
publishDate: 2023-07-01 23:14
category: Tutorials
---

Decap CMS, precedentemente noto come Netlify CMS, è un sistema di gestione dei contenuti open source che offre agli sviluppatori un modo semplice per gestire contenuti per i generatori di siti statici.

## Cos'è Decap CMS?

Decap CMS è un CMS basato su Git che permette agli sviluppatori e ai creatori di contenuti di aggiungere, aggiornare e eliminare contenuti direttamente dal repository git del sito. Questo offre i benefici dei contenuti con controllo di versione, permettendo rollback facili, ramificazioni e altre operazioni Git.

## Caratteristiche Chiave di Decap CMS

### Open Source

Essere open-source significa che hai accesso al codice sorgente e puoi modificarlo e personalizzarlo secondo i requisiti del tuo progetto. Questo permette una grande flessibilità nell'adattare il CMS alle tue specifiche esigenze.

### Basato su Git

Decap CMS utilizza i workflow Git per la gestione dei contenuti. Ogni modifica diventa un commit, ogni serie di modifiche diventa una pull request, e ogni bozza salvata è solo un ramo.

### Facile da Usare

Decap CMS fornisce un'interfaccia editoriale user-friendly per i creatori di contenuti, liberandoli dalla necessità di capire Git o il codice.

## Come Iniziare con Decap CMS

Iniziare con Decap CMS è facile come aggiungere due file al tuo progetto: `admin/index.html` e `admin/config.yml`.

```html
<!-- admin/index.html -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gestore di Contenuti</title>
</head>
<body>
  <!-- Includi lo script che costruisce la pagina e alimenta Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

```yaml
# admin/config.yml
backend:
  name: github
  repo: owner/repo
media_folder: "img/uploads"
public_folder: "/img/uploads"
collections:
  - name: "post"
    label: "Post"
    folder: "_posts"
    create: true
    fields:
      - {label: "Titolo", name: "title", widget: "string"}
      - {label: "Corpo", name: "body", widget: "markdown"}
```

Nell'era della Jamstack, Decap CMS sta aprendo la strada per la moderna gestione dei contenuti basata su Git. Con la sua semplicità e flessibilità, è un'ottima scelta per sviluppatori e creatori di contenuti.
