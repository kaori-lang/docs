const kaori = {
	$schema:
		"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
	name: "kaori",
	patterns: [
		{ include: "#comments" },
		{ include: "#keywords" },
		{ include: "#declarations" },
		{ include: "#functions" },
		{ include: "#constants" },
		{ include: "#numbers" },
		{ include: "#operators" },
		{ include: "#strings" },
		{ include: "#member_access" },
		{ include: "#dict_keys" },
		{ include: "#variables" },
		{ include: "#symbols" },
	],
	repository: {
		keywords: {
			patterns: [
				{
					name: "keyword.control.kaori",
					match: "\\b(if|else|while|for|return|break|continue|import)\\b",
				},
			],
		},

		declarations: {
			patterns: [
				{
					name: "keyword.declaration.const.kaori",
					match: "\\bconst\\b",
				},
				{
					name: "keyword.declaration.kaori",
					match: "\\b(let|ref|fun)\\b",
				},
			],
		},

		functions: {
			patterns: [
				{
					// named function definition: fun foo(...)
					match: "\\bfun\\s+([a-zA-Z_][a-zA-Z0-9_]*)",
					captures: {
						1: { name: "entity.name.function.kaori" },
					},
				},
				{
					// function call: foo(...)
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?=\\()",
					name: "entity.name.function.call.kaori",
				},
			],
		},

		variables: {
			patterns: [
				{
					name: "variable.other.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
				},
			],
		},

		dict_keys: {
			patterns: [
				{
					// map keys: #{ foo: value }
					name: "variable.other.property.kaori",
					match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*:)",
				},
			],
		},

		member_access: {
			patterns: [
				{
					// member access: foo.bar
					name: "variable.other.property.kaori",
					match: "(?<=\\.)\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
				},
			],
		},

		constants: {
			patterns: [
				{
					name: "constant.language.kaori",
					match: "\\b(true|false|nil)\\b",
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
					// lambda pipes: |params|
					name: "punctuation.definition.lambda.kaori",
					match: "\\|",
				},
				{
					// deref: ^x
					name: "keyword.operator.deref.kaori",
					match: "\\^",
				},
				{
					// map literal: #{
					name: "punctuation.definition.map.kaori",
					match: "#(?=\\{)",
				},
				{
					// arithmetic
					name: "keyword.operator.arithmetic.kaori",
					match: "[+\\-*/%]",
				},
				{
					// comparison
					name: "keyword.operator.comparison.kaori",
					match: "(==|!=|<=|>=|<|>)",
				},
				{
					// compound assignment
					name: "keyword.operator.assignment.compound.kaori",
					match: "(\\+=|-=|\\*=|/=|%=)",
				},
				{
					// plain assignment
					name: "keyword.operator.assignment.kaori",
					match: "(?<![=!<>+\\-*/%])=(?!=)",
				},
				{
					// logical keywords
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
				{
					name: "comment.line.double-slash.kaori",
					match: "//.*",
				},
				{
					name: "comment.block.kaori",
					begin: "/\\*",
					end: "\\*/",
				},
			],
		},

		symbols: {
			patterns: [
				{
					name: "punctuation.definition.kaori",
					match: "[{}()\\[\\];,.]",
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
		{ include: "#rule_definition" },
		{ include: "#terminals" },
		{ include: "#nonterminals" },
		{ include: "#operators" },
		{ include: "#comments" },
	],
	repository: {
		rule_definition: {
			patterns: [
				{
					match: "(\\b[a-zA-Z_][a-zA-Z0-9_]*\\b)(\\s*)(->)",
					captures: {
						1: { name: "entity.name.function.regex-grammar" },
						3: { name: "keyword.operator.regex-grammar" },
					},
				},
			],
		},
		terminals: {
			patterns: [
				{
					// quoted terminals: "fun", "if", etc
					name: "string.quoted.double.regex-grammar",
					match: '"[^"]*"',
				},
			],
		},
		nonterminals: {
			patterns: [
				{
					// non-terminals: identifiers that are not rule definitions
					name: "variable.other.regex-grammar",
					match: "\\b[a-zA-Z_][a-zA-Z0-9_]*\\b(?!\\s*->)",
				},
			],
		},
		operators: {
			patterns: [
				{
					name: "keyword.operator.regex-grammar",
					match: "->|\\||\\*|\\+|\\?|\\(|\\)",
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
