import type { HighlighterGeneric } from "shiki";
import { createShikiAdapter } from "@chakra-ui/react";

export const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
	async load() {
		const { createHighlighter } = await import("shiki");
		return createHighlighter({
			langs: ["tsx", "json"],
			themes: ["github-dark", "github-light"],
		});
	},
});
