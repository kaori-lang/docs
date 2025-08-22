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

let parseWhileLoopCode = `
fn parse_while_loop_statement(&mut self) -> Result<Stmt, KaoriError> {
    let span = self.token_stream.span();

    self.token_stream.consume(TokenKind::While)?;

    let condition = self.parse_expression()?;
    let block = self.parse_block_statement()?;

    Ok(Stmt::while_loop(condition, block, span))
}
`;

let parsePrintCode = `
fn parse_print_statement(&mut self) -> Result<Stmt, KaoriError> {
    let span = self.token_stream.span();

    self.token_stream.consume(TokenKind::Print)?;
    self.token_stream.consume(TokenKind::LeftParen)?;
    let expression = self.parse_expression()?;
    self.token_stream.consume(TokenKind::RightParen)?;
    self.token_stream.consume(TokenKind::Semicolon)?;

    Ok(Stmt::print(expression, span))
}
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
					declarations, with tokens that are formed by a sequence of
					one or more characters.
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
						query={["Recursive Descent Parser", "while statement"]}
						styles={{
							fontWeight: "bold",
						}}
					>
						Our parser is written with a Recursive Descent Parser
						and the good thing of it is that it mirrors every single
						non terminal in our grammar. Take a look at the while
						statement non terminal and let's compare it with our
						Rust parser code for it:
					</Highlight>
				</Text>

				<CodeBlockComponent
					title="parser.rs"
					language="rust"
					code={parseWhileLoopCode}
				/>

				<Text>
					<Highlight
						query={[
							"while loop",
							"while",
							"expression",
							"condition",
							"block statement",
						]}
						styles={{
							fontWeight: "bold",
						}}
					>
						It consumes the while token, parses an expression, which
						is the condition for the while loop, then parses a block
						statement and that's it, this is the magic of it! Let's
						look at another example if you're still not convinced:
					</Highlight>
				</Text>

				<CodeBlockComponent
					title="parser.rs"
					language="rust"
					code={parsePrintCode}
				/>

				<Text>
					<Highlight
						query={[
							"print statement",
							"print",
							"left parentheses",
							"expression",
							"right parentheses",
							"semicolon",
						]}
						styles={{
							fontWeight: "bold",
						}}
					>
						For parsing a print statement according to our grammar,
						it is expected a print token, followed by a left
						parentheses, then an expression, then a right
						parentheses and finally a semicolon token. I bet you are
						now convinced about the magic of it, aren't you? 😀
					</Highlight>
				</Text>

				<Text>
					There are still unanswered questions about some ambiguities,
					look at the following example:
				</Text>

				<CodeBlockComponent
					title="main.kaori"
					language="kaori"
					code={"2 + 3 * 5;"}
				/>

				<Text>
					Mathematicians a long time ago created the order of
					operations convention, it is so we don't have to put as many
					parentheses in our expressions to express the real meaning
					of it, they killed two birds with one stone: the expression
					becomes way less verboose to read and the ambiguity is gone!
					So here is the question: what is the answer to that
					expression according to mathematicians?
				</Text>

				<Text>
					We first do the multiplication and only then we can do the
					sum, the result is obviously: 17. Our expression's grammar
					also follow the conventions, multiplication and division are
					part of the factor non terminal, addition and subtraction
					are part of the non terminal term. Let's take a deep look at
					term and factor:
				</Text>

				<CodeBlockComponent
					title="expressions"
					language="regex-grammar"
					code={`
                        term                     -> factor (("+" | "-") factor)*
factor                   -> prefix_unary (("*" | "/") prefix_unary)*
                    `}
				/>

				<Text>
					To be able to parse our addition or subtraction, we need to
					try parse a factor on the left and on the right side of it
					to ensure all the multiplications or divisions are done
					before, this is how the order of operations is enforced. The
					recursive calls will try to find an operator with a higher
					precedence than factor before it actually parses it, that
					operator might be a prefix unary operator, which is an
					operator that only takes one operand and comes before it.
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
