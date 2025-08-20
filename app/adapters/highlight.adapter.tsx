import type { HighlighterGeneric } from "shiki";
import { createShikiAdapter } from "@chakra-ui/react";
import { readFileSync } from "fs";

import kaoriLang from "../adapters/kaori.syntax.json";

export const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
	async load() {
		const { createHighlighter } = await import("shiki");
		return createHighlighter({
			langs: [kaoriLang],
			themes: ["github-dark", "github-light"],
		});
	},
});
