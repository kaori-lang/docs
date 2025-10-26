const kaori = {
	$schema:
		"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
	name: "kaori",
	patterns: [
		{ include: "#comments" },
		{ include: "#keywords" },
		{ include: "#types" },
		{ include: "#functions" },
		{ include: "#constants" },
		{ include: "#numbers" },
		{ include: "#operators" },
		{ include: "#strings" },
		{ include: "#variables" },
		{ include: "#symbols" },
	],
	repository: {
		keywords: {
			patterns: [
				{
					name: "keyword.control.kaori",
					match: "\\b(def|if|else|for|while|return|break|continue)\\b",
				},
			],
		},
		types: {
			patterns: [
				{
					name: "entity.name.type.kaori",
					match: "\\b([A-Z][A-Za-z0-9_]*|number|bool)\\b",
				},
			],
		},
		functions: {
			patterns: [
				{
					name: "entity.name.function.definition.kaori",
					match: "\\bdef\\s+([a-zA-Z_][a-zA-Z0-9_]*)",
				},
				{
					name: "entity.name.function.call.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?=\\()",
				},
			],
		},
		variables: {
			patterns: [
				{
					name: "variable.other.declaration.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*:?)",
				},
				{
					name: "entity.name.type.kaori",
					match: "(\\s*[A-Z][A-Za-z0-9_]*)\\b",
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
					match: "(?<![=!<>])=(?!=)",
				},
				{
					name: "keyword.operator.logical.kaori",
					match: "(not|or|and)",
				},
			],
		},
		strings: {
			name: "string.quoted.double.kaori",
			begin: '"',
			end: '"',
			patterns: [
				{ name: "constant.character.escape.kaori", match: "\\\\." },
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
				{ name: "keyword.operator.regex-grammar", match: "\\$" },
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
		{ include: "#nonterminals" },
		{ include: "#terminals" },
		{ include: "#symbols" },
		{ include: "#comments" },
	],
	repository: {
		nonterminals: {
			patterns: [
				{
					name: "entity.name.rule.regex-grammar",
					match: "\\b[a-zA-Z_][a-zA-Z0-9_]*\\b(?=\\s*->)",
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
					match: "->|\\||\\(|\\)|\\{|\\}|\\*|\\+|\\?|;",
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
