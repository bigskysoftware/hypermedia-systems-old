import { Document, Element, Text } from "lume/deps/dom.ts";
import { Site } from "lume/core.ts";

export default () => {
    return (site: Site) => {
        site.process([".adoc"], (page) => {
            const document = page.document;
            if (!document) return;

            $$(document, ".sect0").forEach((el) => {
                const [num, ...title] = el.innerHTML.split(":");
                el.innerHTML = `<sub-title>Part ${num}<v-h>:</v-h></sub-title> ${title.join(":")}`
            });

            $$(document, ".dfn").forEach((el) => el.tagName = "dfn");
            $$(document, ".cite").forEach((el) => el.tagName = "cite");

            $$(document, ".listingblock, .imageblock").forEach((el) => {
                el.tagName = "figure";
                // el.classList.add("contents"); // Don't draw box around images and code listings
                const title = el.querySelector(".title");
                if (title) title.tagName = "figcaption";
            })

            $$(document, ".sidebarblock").forEach(el => {
                el.tagName = "aside";
                const title = el.querySelector(".title")
                title?.classList.add("bold");
                title?.classList.add("secondary-font");
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
                    el.classList.contains("important")
                    ? "info"
                    : el.classList.contains("warning")
                    ? "warn"
                    : "plain";

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

            $$(document, ".language-asciiart").forEach(el => {
                const wrapper = el.parentElement!;
                el.tagName = "pre";
                wrapper.tagName = "div";

                wrapper.setAttribute("role", "img");
                el.setAttribute("aria-hidden", "true");
                el.classList.add("asciiart");
            })

            $$(document, "li>p:only-child").forEach(el => {
                el.replaceWith(...el.childNodes);
            })

            $$(document, "#footnotes").forEach(fns => {
                fns.classList.add("<small>");
                fns.firstElementChild!.remove(); // remove hr
                fns.tagName = "ol";
                [...fns.children].forEach(fn => {
                    fn.tagName = "li";
                    const backlink = fn.firstElementChild!;
                    backlink.textContent = "↵";
                    fn.append(backlink);
                    const tn = fn.childNodes[1] as Text;
                    tn.data = tn.data.slice(2); // remove dot
                });
            })
<<<<<<< HEAD
=======

            $$(document, ".html-note").forEach(htmlNote => {
                htmlNote.classList.add("info");
                htmlNote.tagName = "aside";
            })
>>>>>>> 1746a4b (html notes markup update)
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
