import { FunctionComponent } from "react";
import { Text, Code, Stack, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface GrammarComponentProps {}

let GrammarCode = `
program                  -> (function_declaration)* "EOF"

type                     -> (function_type | primitive_type)
primitive_type           -> "bool" | "num" | "str"
function_type            -> "(" (type ("," type)*)? ")" "->" type

variable_declaration     -> identifier ":" type "=" expression ";"

parameter                -> identifier ":" type
function_declaration     -> "def" identifier "(" (parameter ("," parameter)*)? ")" ("->" type)? block_statement

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

export const GrammarComponent: FunctionComponent<
	GrammarComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Grammar">
			<Stack spaceY={4}>
				<Text>
					<Highlight
						query={["hello world"]}
						styles={{ bgColor: "gray.900" }}
					>
						A programming language also has it's own grammar, in our
						english grammar classes we have learned the rules to
						build our first sentences formed with words, in
						programming we build our statements, expressions and
						declarations with tokens, which are formed by a sequence
						of 1 or more characters. We need to have some set of
						rules and the programmer must follow them to be able to
						communicate with the compiler and have some form of
						answer, aka output.
					</Highlight>
				</Text>

				<CodeBlockComponent code={GrammarCode} />
			</Stack>
		</SectionContainerComponent>
	);
};
