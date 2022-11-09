import { Site, Engine, Data } from "lume/core.ts";
import textLoader from "lume/core/loaders/text.ts";
import Asciidoctor from "npm:@asciidoctor/core";

// @ts-ignore incorrect typings of asciidoctor
const asciidoctor: typeof Asciidoctor.Asciidoctor = Asciidoctor;

const ilog = <T>(...args: [..._: unknown[], last: T]): T => (console.log(...args), args.at(-1) as T);

export default () => {
    return (site: Site) => {
        site.loadPages([".adoc"], textLoader, new AsciidocEngine(site));
    }
}

class AsciidocEngine implements Engine {
    asciidoc = new asciidoctor();

    constructor(
        public site: Site,
    ) {}

    deleteCache(): void {}

    render(content: unknown, _data?: Data, filename?: string): string {
        ilog(filename);
        const ast = this.asciidoc.load(content, {
            standalone: false,
            parse: true,
            base_dir: this.site.src(),
            safe: "UNSAFE",
            attributes: {
                docfile: filename,
            }
        })

        return ast.convert({ });
    }

    renderSync(content: unknown, data?: Data, filename?: string): string {
        return this.render(content, data, filename)
    }

    addHelper() {}
}
