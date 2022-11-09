import lume from "lume/mod.ts";
import liquid from "lume/plugins/liquid.ts";
import asciidoc from "./_plugins/asciidoc.ts";
import postprocessAsciidoc from "./_plugins/postprocess-asciidoc.ts";

const site = lume({
    src: "..",
    includes: "www/_includes",
});

site.use(liquid());
site.use(asciidoc());
site.use(postprocessAsciidoc());

site.copy("images");
site.copy("fonts");

site.ignore("dist", "bin");

export default site;
