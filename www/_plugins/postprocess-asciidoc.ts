import { Site, Engine, Data } from "lume/core.ts";

export default () => {
    return (site: Site) => {
        site.process([".adoc"], (page) => {
            const document = page.document;
            if (!document) return;

            document.querySelectorAll(".listingblock, .imageblock, .sidebarblock").forEach((el) => {
                el.tagName = "figure";
                const title = el.querySelector(".title");
                if (title) title.tagName = "figcaption";
            })

            document.querySelectorAll(".sidebarblock").forEach(el => {
                el.querySelector(".title")?.classList.add("titlebar");
            })

            document.querySelectorAll(".attribution").forEach(el => {
                el.classList.add("margin-inline-start");
            })

            document.querySelectorAll(".colist").forEach(el => {
                previousElementSibling(el)?.append(el);
            })

            document.querySelectorAll(".admonitionblock").forEach(el => {
                const type =
                    el.classList.contains("important") ? "info" : "plain";

                const content = el.querySelector(".content");
                const title = content.querySelector(".title");

                title.classList.add("titlebar");

                const rv = document.createElement("div");
                rv.classList.add("box");
                rv.classList.add(type);
                rv.appendChild(title);
                rv.appendChild(content);

                el._replaceWith(rv);
            })

            document.querySelectorAll(".sect1, .sect2, .sect3, .sect4, .sect5, .sect6").forEach(el => {
                el.tagName = "section";
            })
        })
    }
}

function previousElementSibling(el) {
    do { el = el.previousSibling } while (el && el.nodeType !== el.ELEMENT_NODE);
    return el;
}
