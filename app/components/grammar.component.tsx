import { FunctionComponent } from "react";
import { Text, Stack, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface GrammarComponentProps {}

let declarationRules = `
program                  -> (function_declaration)* "end of file"

variable_declaration     -> identifier ":" type "=" expression 

parameter                -> identifier ":" type
function_declaration     -> "def" identifier "(" (parameter ("," parameter)*)? ")" ("->" type)? block_statement
`;

let expressionRules = `
expression               -> assignment | logic_or

assignment               -> identifier "=" expression

logic_or                 -> logic_and ("||" logic_and)*

logic_and                -> equality ("&&" equality)*

equality                 -> comparison (("!=" | "==") comparison)*

comparison               -> term ((">" | ">=" | "<" | "<=") term)*

term                     -> factor (("+" | "-") factor)*

factor                   -> prefix_unary (("*" | "/") prefix_unary)*

prefix_unary             -> ("!" | "-") unary | primary

primary                  -> number_literal
                         | string_literal
                         | boolean_literal
                         | postfix_unary
                         | "(" expression ")"

postfix_unary            -> identifier ("++" | "--")? | function_call

function_call            -> callee "(" (expression ("," expression)*)? ")"
`;

let statementRules = `
block_statement          -> "{" ( expression_statement ";"
                                 | print_statement ";"
                                 | if_statement
                                 | while_statement
                                 | for_statement
                                 | block_statement
                                 | variable_declaration ";")* "}"

expression_statement     -> expression 

print_statement          -> "print" "(" expression ")"

if_statement             -> "if" expression block_statement ("else" (if_statement | block_statement))?

while_statement          -> "while" expression block_statement

for_statement            -> "for" variable_declaration ";" expression ";" expression_statement block_statement
`;

let typeRules = `
type                     -> (function_type | primitive_type)
primitive_type           -> "bool" | "number" | "String"
function_type            -> "(" (type ("," type)*)? ")" "->" type
`;

export const GrammarComponent: FunctionComponent<
	GrammarComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Grammar and the parsing">
			<Stack spaceY={4}>
				<Text>
					A programming language also has it's own grammar, in our
					English grammar classes we have learned the rules to build
					our first sentences formed with words, in the computer
					science world we build our statements, expressions and
					declarations, with tokens that are formed by a sequence of 1
					or more characters.
				</Text>

				<Text>
					We are going to enforce a set of rules known as grammar,
					this is a very important step to develop our compiler, we
					are going from a sequence of tokens to an Abstract Syntax
					Tree that can represent our program in a more meaningful way
				</Text>

				<Text>
					Here is our non EBNF grammar with custom syntax highlight,
					created with regular expression, for you non compiler dev
					also be able to understand it without diving deep into EBNF:
				</Text>

				<CodeBlockComponent
					title="declarations"
					language="regex-grammar"
					code={declarationRules}
				/>

				<Text>
					<Highlight
						query={[
							"identifier",
							"colon",
							"assign operator",
							"expression",
							"declaration node",
							"syntax error",
							"type",
						]}
						styles={{
							fontWeight: "bold",
						}}
					>
						What any of this even mean? Take a look at the variable
						declaration rule, it takes a sequence of the
						respectively tokens: an identifier, then a colon, then
						it tries to parse a type and generate a type ast node
						for it, then an assign operator token and then finally
						it tries to parse an expression, after all those steps
						it builds the declaration node for our variable.
					</Highlight>
				</Text>

				<Text>
					<Highlight
						query={[
							"type annotation",
							"assign operator",
							"syntax error",
							"type",
						]}
						styles={{
							fontWeight: "bold",
						}}
					>
						But what if it didn't, for example, find an assign
						operator after the parsing of type? Then that would be
						what is known as syntax error! If we are trying to parse
						a variable declaration, according to our rules an assign
						operator is always expected after a type annotation, so
						make sure to not miss it.
					</Highlight>
				</Text>
				<CodeBlockComponent
					title="statements"
					language="regex-grammar"
					code={statementRules}
				/>

				<Text>
					<Highlight
						query={[
							"type annotation",
							"assign operator",
							"syntax error",
							"type",
						]}
						styles={{
							fontWeight: "bold",
						}}
					>
						During the parsing of some specific non terminal or
						rule, we've discussed that we need to consume a set of
						tokens accordingly to the grammar, but there are still
						unanswered questions about the commmon ambiguities that
						often appear in our sequence of tokens
					</Highlight>
				</Text>

				<CodeBlockComponent
					title="expressions"
					language="regex-grammar"
					code={expressionRules}
				/>

				<CodeBlockComponent
					title="types"
					language="regex-grammar"
					code={typeRules}
				/>
			</Stack>
		</SectionContainerComponent>
	);
};
