const kaori = {
	$schema:
		"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
	name: "kaori",
	patterns: [
		{ include: "#comments" },
		{ include: "#keywords" },
		{ include: "#functions" },
		{ include: "#constants" },
		{ include: "#numbers" },
		{ include: "#operators" },
		{ include: "#strings" },
		{ include: "#variables" },
		{ include: "#member_access" },
		{ include: "#dict_keys" },
		{ include: "#symbols" },
	],
	repository: {
		keywords: {
			patterns: [
				{
					name: "keyword.control.kaori",
					match: "\\b(fun|if|else|for|while|return|break|continue)\\b",
				},
			],
		},

		functions: {
			patterns: [
				{
					name: "entity.name.function.definition.kaori",
					match: "\\bfun\\s+([a-zA-Z_][a-zA-Z0-9_]*)",
					captures: {
						1: { name: "entity.name.function.kaori" },
					},
				},
				{
					name: "entity.name.function.call.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?=\\()",
				},
			],
		},

		// 🔥 Variables (no more `let`)
		variables: {
			patterns: [
				{
					name: "variable.other.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
				},
			],
		},

		// 🔥 Dict keys: {a: 5}
		dict_keys: {
			patterns: [
				{
					name: "variable.other.property.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*:)",
				},
			],
		},

		// 🔥 Member access: cat.name
		member_access: {
			patterns: [
				{
					name: "variable.other.property.kaori",
					match: "(?<=\\.)\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
				},
			],
		},

		constants: {
			patterns: [
				{
					name: "constant.language.kaori",
					match: "\\b(true|false)\\b",
				},
			],
		},

		numbers: {
			patterns: [
				{
					name: "constant.numeric.kaori",
					match: "\\b\\d+(\\.\\d+)?\\b",
				},
			],
		},

		operators: {
			patterns: [
				{
					name: "keyword.operator.arithmetic.kaori",
					match: "[+\\-*/%]",
				},
				{
					name: "keyword.operator.comparison.kaori",
					match: "(==|!=|<=|>=|<|>)",
				},
				{
					name: "keyword.operator.assignment.kaori",
					match: ":=|(?<![=!<>])=(?!=)",
				},
				{
					name: "keyword.operator.assignment.compound.kaori",
					match: "(\\+=|-=|\\*=|/=|%=)",
				},
				{
					name: "keyword.operator.logical.kaori",
					match: "\\b(not|or|and)\\b",
				},
			],
		},

		strings: {
			name: "string.quoted.double.kaori",
			begin: '"',
			end: '"',
			patterns: [
				{
					name: "constant.character.escape.kaori",
					match: "\\\\.",
				},
			],
		},

		comments: {
			patterns: [
				{ name: "comment.line.double-slash.kaori", match: "//.*" },
				{
					name: "comment.block.kaori",
					begin: "/\\*",
					end: "\\*/",
					patterns: [
						{
							name: "comment.block.documentation.kaori",
							match: "\\*\\s.*",
						},
					],
				},
			],
		},

		symbols: {
			patterns: [
				{
					name: "punctuation.definition.kaori",
					match: "[{}()\\[\\];,.:]",
				},
			],
		},
	},
	scopeName: "source.kaori",
};

const regexGrammar = {
	$schema:
		"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
	name: "regex-grammar",
	scopeName: "source.regex-grammar",
	patterns: [
		{ include: "#rule-definition" },
		{ include: "#nonterminals" },
		{ include: "#terminals" },
		{ include: "#symbols" },
		{ include: "#comments" },
	],
	repository: {
		"rule-definition": {
			patterns: [
				{
					match: "(\\b[a-zA-Z_][a-zA-Z0-9_]*\\b)(\\s*)(->)",
					captures: {
						1: { name: "entity.name.function.regex-grammar" },
						2: { name: "text" },
						3: { name: "keyword.operator.regex-grammar" },
					},
				},
			],
		},
		nonterminals: {
			patterns: [
				{
					name: "variable.other.regex-grammar",
					match: "\\b[a-zA-Z_][a-zA-Z0-9_]*\\b(?!\\s*->)",
				},
			],
		},
		terminals: {
			patterns: [
				{
					name: "string.quoted.double.regex-grammar",
					match: '"[^"]*"',
				},
			],
		},
		symbols: {
			patterns: [
				{
					name: "keyword.operator.regex-grammar",
					match: "->|\\||\\{|\\}|\\*|\\+|\\?|\\(|\\)|,",
				},
			],
		},
		comments: {
			patterns: [
				{
					name: "comment.line.double-slash.regex-grammar",
					match: "//.*$",
				},
			],
		},
	},
};
let highlighter;

window.hljs = {
	configure() {
		shikiModule = import("https://esm.sh/shiki@3.4.0");
	},
	/** @param {HTMLElement} block */
	async highlightBlock(block) {
		const lang = [...block.classList.values()]
			.map((name) => name.match(/^language-(.+)$/)?.[1])
			.filter(Boolean)[0];

		if (!lang) {
			return;
		}

		if (!highlighter) {
			const { createHighlighter } = await shikiModule;

			highlighter = await createHighlighter({
				langs: ["rust", kaori, regexGrammar],
				themes: ["aurora-x"],
			});
		}

		const html = await highlighter.codeToHtml(block.innerText, {
			lang,
			theme: "aurora-x",
		});

		// Keep the <pre> element and its scroll
		block.innerHTML = html.replace(/^<pre[^>]*>|<\/pre>$/g, "");
		block.classList.add("shiki");
	},
};
