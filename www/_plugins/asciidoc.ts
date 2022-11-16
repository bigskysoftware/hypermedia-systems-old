import { Site, Engine, Data, Loader } from "lume/core.ts";
import Asciidoctor from "npm:@asciidoctor/core";

// @ts-ignore incorrect typings of asciidoctor
const asciidoctor: typeof Asciidoctor.Asciidoctor = Asciidoctor;
const asciidoc = new asciidoctor();

export default ({ asciidoc: asciidocOpts }: { asciidoc?: Record<string, unknown> } = {}) => {
    return (site: Site) => {
        const asciidocLoader: Loader = (path) => {
            const doc = asciidoc.loadFile(path, {
                standalone: false,
                parse: true,
                base_dir: site.src(),
                safe: "UNSAFE",
                ...asciidocOpts,
            });
            return {
                ...doc.getAttributes(),
                asciidoc: doc,
                content: doc,
                title: doc.getTitle(),
            };
        }

        site.loadPages([".adoc"], asciidocLoader, new AsciidocEngine());
    }
}

class AsciidocEngine implements Engine {
    deleteCache(): void {}

    render(content: unknown, _data?: Data, filename?: string): string {
        return (content as Asciidoctor.Asciidoctor.Document).convert({ });
    }

    renderSync(content: unknown, data?: Data, filename?: string): string {
        return this.render(content, data, filename)
    }

    addHelper() {}
}
