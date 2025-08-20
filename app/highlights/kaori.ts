import hljs from "highlight.js/lib/core";

type HljjsType = typeof hljs;

const kaori = (hljs: HljjsType) => {
	return {
		name: "Kaori",
		keywords: "def if else while for return true false",
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			hljs.QUOTE_STRING_MODE,
			hljs.NUMBER_MODE,
		],
	};
};

export default kaori;
