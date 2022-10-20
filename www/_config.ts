import lume from "lume/mod.ts";
import liquid from "lume/plugins/liquid.ts";

const site = lume();

site.use(liquid());

site.copy("book");

export default site;
