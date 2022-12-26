import prismHighlight from 'lume/plugins/prism.ts';
import Prism from 'lume/deps/prism.ts';
import prismHyperscript from 'npm:prism-hyperscript@1.1.1';
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
