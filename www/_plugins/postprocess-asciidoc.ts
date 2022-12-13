import { Document, Element } from "lume/deps/dom.ts";
import { Site } from "lume/core.ts";

export default () => {
    return (site: Site) => {
        site.process([".adoc"], (page) => {
            const document = page.document;
            if (!document) return;

            $$(document, ".listingblock, .imageblock, .sidebarblock").forEach((el) => {
                el.tagName = "figure";
                const title = el.querySelector(".title");
                if (title) title.tagName = "figcaption";
            })

            $$(document, ".sidebarblock").forEach(el => {
                el.querySelector(".title")?.classList.add("titlebar");
            })

            $$(document, ".attribution").forEach(el => {
                el.classList.add("margin-inline-start");
                const em = el.querySelector("em")
                if (em) em.tagName = "cite";
                const br = el.querySelector("br")
                if (br) br.replaceWith(", ");
            })

            $$(document, ".colist").forEach(el => {
                previousElementSibling(el)?.append(el);
            })

            $$(document, ".admonitionblock").forEach(el => {
                const type =
                    el.classList.contains("important") ? "info" : "plain";

                const content = el.querySelector(".content");
                if (!content) return;
                const title = content.querySelector(".title");
                
                
                const rv = document.createElement("div");
                rv.classList.add("box");
                rv.classList.add(type);
                if (title) {
                    title.classList.add("titlebar");
                    rv.appendChild(title);
                }
                rv.appendChild(content);

                el._replaceWith(rv);
            })

            $$(document, ".sect1, .sect2, .sect3, .sect4, .sect5, .sect6").forEach(el => {
                el.tagName = "section";
            })

            $$(document, "img").forEach(el => {
                el.setAttribute("loading", "lazy");
            })

            $$(document, ".cite").forEach(el => {
                const cite = document.createElement("cite");
                cite.append(...el.childNodes);
                el.append(cite);
            })
        })
    }
}

function previousElementSibling(el: Element): Element | null {
    do { el = el.previousSibling as Element } while (el && !(el instanceof Element));
    return el;
}

function $$(element: Element | Document, selector: string) {
    return element.querySelectorAll(selector) as unknown as Element[];
}
