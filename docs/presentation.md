---
title: Micro Frontends
tags: CAG, micro frontends
---


# Micro Frontends

---

<!-- .slide: style="font-size: 16px;" -->
- 9.00 Vad är Micro Frontend? 
  - Definition
  - Vad är syftet?	
  - Olika tekniker
- 10.00 Micro Frontend i Single Page Application med Web Components (Custom Elements)
  - Hur funkar det
  - Kommunikation, autentisering, state, backend
  - Fika & Labb
- 12.00 Lunch

- 13.00 Skapa Web Component med React
  - Hur gör man
  - Labb
- 13.45 Skapa Web Component med Angular
  - Hur gör man
  - Labb
- 14:30 Fika
- 15.00 Labb: Micro Frontend-baserad app med komponenter blandning av barebone JS, React och Angular
- 16.00 AW

---

## Vad är Micro Frontend?

![](https://i.imgur.com/ME0k6H5.png =350x400)

---

## Vad är Micro Frontend?

- Dela upp applikationen i fullstackar
- Utvecklas av ett team
- Korsfunktionell
- Fullstack från UI till DB
- Hela sidor eller fragment

---

## Vad är Micro Frontend?

![](https://i.imgur.com/yjwSyGy.png)

---

## Vad är Micro Frontend?

![](https://i.imgur.com/x945XgU.png)

---

## Syfte - Snabba upp utveckling genom mindre koordingering

![](https://i.imgur.com/wLMFCIa.png)

---

## Syfte - Få bort frontend-monoliten

![](https://i.imgur.com/1tbim8p.png)

---

## Syfte - Kunna välja teknik oberoende av andra team

![](https://i.imgur.com/nliRqjM.png)

---

## Syfte - Frikoppla release-cykel från andra team

![](https://i.imgur.com/xQgLDiz.png)

---

## Syfte

- Grundidén är att kommunikation och koordinering mellan team är dyrt
MEN, DET HAR EN KOSTNAD!
- Redundans: kodmässigt, verktygsmässigt (byggserver, etc), felrättning, t.ex
  - Konsistens: t.ex om man replikerar data mellan appar
  - Heterogenitet: olika teknikstackar = svårt att utbyta kunskap och personal
  - Fortfarande måste vissa kontrakt göras upp mellan team

---

## Tekniker

- Separata sidor från separata sajter (uthopp)
- iframe
- Client-side composition med fragment och AJAX
- Server-side composition i reverse-proxy
- Web Components

---

## Web Components

Standardiserade API:er i browsers.

- Custom Element
- Shadow DOM
- HTML Template
- Custom Event

---


## Web Components - Custom Element

Javascript API:n som gör det möjligt att skapa egna HTML-element, samt definiera beteende.

---

## Web Components - Shadow DOM

Javascript API:n som gör det möjligt att lägga till ett dolt DOM-träd till ett element.

- renderas separat från huvuddokumentets DOM
- styling och beteende läcker inte ut och krockar med andra komponenter

---

## Web Components - HTML templates

`<template>`- och `<slot>`-element gör det möjligt att skapa mall-html.

---

## Micro Frontend - App Shell
- Själva huvudapplikation som drar in de övriga apparna.
![](https://i.imgur.com/Ib6NU26.png)


---

- Alternativ till eget app shell: [single-spa](https://single-spa.js.org/).
- Proprietär lösning

---

## Böcker

- [Micro Frontends in action](https://www.manning.com/books/micro-frontends-in-action?a_aid=mfia&a_bid=5f09fdeb) ![](https://i.imgur.com/YKex70g.png =108x135)
- [The Art of Micro Frontends](https://www.packtpub.com/product/the-art-of-micro-frontends/9781800563568) ![](https://i.imgur.com/6KI5dkE.png =108x135)


---

# LABB!

Koden finns på https://github.com/CAG-Contactor/Micro-frontends





