import prismHighlight from 'lume/plugins/prism.ts';
import Prism from 'lume/deps/prism.ts';
import prismHyperscript from 'https://esm.sh/prism-hyperscript';
import type { Site } from 'lume/core.ts';

/**
 * Highlight code, including _hyperscript, with Prism.
 */
export default () => {
	return (site: Site) => {
		site.use(prismHighlight({
			languages: ["http", "html", "js", "python", "md", "css", "json", "xml", "bash", "sh"]
		}));
		prismHyperscript(Prism);
	};
};
