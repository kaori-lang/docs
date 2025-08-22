import type { HighlighterGeneric } from "shiki";
import { createShikiAdapter } from "@chakra-ui/react";
import kaoriLang from "../adapters/kaori.syntax.json";
import regexGrammar from "../adapters/regex-grammar.syntax.json";

export const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
	async load() {
		const { createHighlighter } = await import("shiki");
		return createHighlighter({
			langs: [kaoriLang, regexGrammar],
			themes: ["github-dark", "github-light"],
		});
	},
});
