---
layout: layout.njk
url: /
templateEngine: njk,md
---

<style>
.coverimage {
    margin: auto;
    image-rendering: pixelated;
    inline-size: 100vw;
    height: 25vw;
    max-inline-size: none;
    min-inline-size: 100%;
    margin-block: -10vw;
    object-fit: cover;
}
</style>

![](/images/radialbugpattern-spine-black-realsize.png){.coverimage}

<header style="min-height: 40vh; display: grid; place-items: center">
<div>

# Hypermedia Systems {.italic .allcaps .text-align:center style="font-size: calc(.142 * var(--eff-line-length)); line-height: 1em"}

 - Carson&nbsp;Gross
 - Adam&nbsp;Stepinski
 - Deniz&nbsp;Akşimşek
{role=list .f-row .flex-wrap:wrap .justify-content:center .airy}

</div>
</header>

<main>

This is a book about building software systems using hypermedia, or, as we call them, Hypermedia-Driven Applications (HDAs).

The book covers the following topics:

* An introduction (or re-introduction) to hypermedia: what it is, what makes it special & terminology surrounding hypermedia (e.g. REST)
* How to build a simple "web 1.0" style web application using [flask](https://flask.palletsprojects.com/)
* How to make that simple web 1.0 application more interactive without abandoning Hypermedia, using [htmx](https://htmx.org)
* How to use non-Hypermedia technology (e.g. scripting) effectively within an Hypermedia-Driven Application
* How to use HyperView to build mobile Hypermedia-Driven Applications

<p class="f-row flex-wrap:wrap justify-content:center" style="column-gap: calc(.5 * var(--gap))">
<strong><a href="/book/contents" class="<button>">Read online for free</a></strong>
<strong><a href="#" class="<button>">Get PDF</a></strong>
</p>

</main>
