/// <reference lib="es2022" />

import { Data, Page, PageData } from "lume/core.ts"

type Part = {
    part: string,
    url: string,
    partNumber: number,
    chapters: (Data | Page)[],
    nextPart?: Part,
    previousPart?: Part,
}

export default function* ({ search }: PageData) {
    let partnumber = 0;

    const chapters = search.pages("chapter!=undefined", "chapter");

    const parts: Part[] = [];
    
    for (const chapter of chapters) {
        if ("part" in chapter.data) {
            parts.push({
                part: chapter.data.part,
                partNumber: ++partnumber,
                chapters: [chapter],
                previousPart: parts.at(-1),
                url: "/book/" + chapter.data.part_url,
            });
            const last = parts.at(-2);
            last && (last.nextPart = parts.at(-1));
        } else {
            parts.at(-1)?.chapters.push(chapter);
        }
    }
    for (const part of parts) {
        yield {
            layout: "./part-layout.njk",
            tags: "part",
            ...part,
        }
    }
}
