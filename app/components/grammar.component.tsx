import { FunctionComponent } from "react";
import { Text, Stack } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface GrammarComponentProps {}

let declarationRules = `
program                  -> (function_declaration)* "end of file"

variable_declaration     -> identifier ":" type "=" expression ";"

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
block_statement          -> "{" (expression_statement
                                 | print_statement
                                 | if_statement
                                 | while_statement
                                 | for_statement
                                 | block_statement
                                 | variable_declaration)* "}"

expression_statement     -> expression ";"

print_statement          -> "print" "(" expression ")"

if_statement             -> "if" expression block_statement ("else" (if_statement | block_statement))?

while_statement          -> "while" expression block_statement

for_statement            -> "for" variable_declaration ";" expression ";" expression block_statement
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
		<SectionContainerComponent title="Grammar">
			<Stack spaceY={4}>
				<Text>
					A programming language also has it's own grammar, in our
					english grammar classes we have learned the rules to build
					our first sentences formed with words, in programming we
					build our statements, expressions and declarations, with
					tokens that are formed by a sequence of 1 or more
					characters.
				</Text>

				<Text>
					We are going to enforce some set of rules and deal with the
					ambiguities that can appear in our written code, because
					ambiguities can also exist in the programming world, are you
					not sure what I mean by that? Take the following expression
					as an example:
				</Text>

				<Text>
					Here is the non EBNF grammar, created with regular
					expression, for you non compiler dev also be able to
					understand it without diving deep into EBNF, and custom
					highlight is also available to make it more readable!
				</Text>

				<CodeBlockComponent
					title="declarations"
					language="regex-grammar"
					code={declarationRules}
				/>

				<CodeBlockComponent
					title="statements"
					language="regex-grammar"
					code={statementRules}
				/>

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
