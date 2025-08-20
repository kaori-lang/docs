import { createHighlightJsAdapter } from "@chakra-ui/react";
import hljs from "highlight.js/lib/core";

const highlightJsAdapter = createHighlightJsAdapter<typeof hljs>({
	async load() {
		const languages = {
			kaori: () => import("../highlights/kaori"),
		};
		await Promise.all(
			Object.entries(languages).map(async ([language, file]) => {
				const { default: langModule } = await file();
				hljs.registerLanguage(language, langModule);
			})
		);
		return hljs;
	},
});
