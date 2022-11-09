import { Site, Engine, Data } from "lume/core.ts";

export default () => {
    return (site: Site) => {
        site.process([".adoc"], (page) => {
            const document = page.document;
            if (!document) return;

            document.querySelectorAll(".listingblock, .imageblock").forEach((el) => {
                el.tagName = "figure";
                const title = el.querySelector(".title");
                if (title) title.tagName = "figcaption";
            })

            document.querySelectorAll(".highlight .conum").forEach(el => {
                el.classList.add("chip");
            })
        })
    }
}
