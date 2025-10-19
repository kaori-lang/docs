import { FunctionComponent } from "react";
import { Text, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface GrammarComponentProps {}

const declarationRules = `
program -> declaration* "EOF"

declaration -> variable_declaration ";" | function_declaration | struct_declaration

variable_declaration -> "$" identifier ":" type "=" expression 

parameter -> identifier ":" type
parameters -> (parameter ("," parameter)*)?
function_body -> "{" (statement | declaration)* "}"
function_declaration -> "def" identifier "(" parameters ")" ("->" type)? function_body

field -> identifier ":" type
fields -> (field ("," field)*)?
struct_declaration -> "struct" identifier "{" fields "}"
`;

const expressionRules = `
expression -> assignment | logic_or

assignment -> logic_or ("=" | "+=" | "-=" | "*=" | "/=" | "%=") logic_or

logic_or -> logic_and ("||" logic_and)*

logic_and -> equality ("&&" equality)*

equality -> comparison (("!=" | "==") comparison)*

comparison -> term ((">" | ">=" | "<" | "<=") term)*

term -> factor (("+" | "-") factor)*

factor -> prefix_unary (("*" | "/") prefix_unary)*

prefix_unary -> ("!" | "-") prefix_unary | primary

primary -> number_literal
         | string_literal
         | boolean_literal
         | postfix_unary
         | "(" expression ")"

postfix_unary -> function_call | struct_literal

struct_literal -> to do

arguments -> (expression ("," expression)*)?
function_call -> identifier ("(" arguments ")")* 
`;

const statementRules = `
statement -> block_statement 
			| expression_statement ";"
			| print_statement ";"
			| if_statement 
			| while_statement 
			| for_statement

block_statement -> "{" (declaration | statement)* "}"

expression_statement -> expression 

print_statement -> "print" "(" expression ")" 

if_statement -> "if" expression block_statement ("else" (if_statement | block_statement))?

while_statement -> "while" expression block_statement

for_statement -> "for" variable_declaration ";" expression ";" expression_statement block_statement
`;

const typeRules = `
type -> primitive_type | identifier_type

identifier_type -> identifier

primitive_type -> "bool" | "number"

arguments -> (type ("," type)*)?
function_type -> "(" arguments ")" "->" type
`;

const parseWhileLoopCode = `
fn parse_while_loop_statement(&mut self) -> Result<Stmt, KaoriError> {
    let span = self.token_stream.span();

    self.token_stream.consume(TokenKind::While)?;

    let condition = self.parse_expression()?;
    let block = self.parse_block_statement()?;

    Ok(Stmt::while_loop(condition, block, span))
}
`;

const parsePrintCode = `
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
			<Text>
				A programming language also has its own grammar. In English
				grammar classes, we learned the rules to build our first
				sentences formed with words, in the compilers world statements,
				expressions and declarations are built with tokens that are
				formed by a sequence of one or more characters.
			</Text>

			<Text>
				We are going to enforce a set of rules known as grammar, this is
				a very important step to develop a compiler, going from a
				sequence of tokens to an Abstract Syntax Tree that can represent
				a program in a more meaningful way.
			</Text>

			<Text>
				Here is a non EBNF grammar with custom syntax highlight, created
				with regular expression, so that non-compiler developers can
				also understand it without having to dive into EBNF syntax:
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
						"declaration",
						"syntax error",
						"type",
					]}
					styles={{
						fontWeight: "bold",
					}}
				>
					What does any of this even mean? Take a look at the variable
					declaration rule, it expects an identifier, then a colon,
					then it tries to parse a type, then it expects an assign
					operator token and then finally it tries to parse an
					expression, after all those steps it builds the declaration
					node for the variable.
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
					An example where our rule is not followed: what happens if
					the next token to be consumed after parsing the type
					annotation is not an assign operator? Then that would be
					what is known as a syntax error! If we are trying to parse a
					variable declaration, according to the rules an assign
					operator is always expected after a type annotation, so make
					sure to not miss it in your code.
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
					The parser is written with a Recursive Descent Parser and
					the good thing of it is that it mirrors every single non
					terminal in the grammar. Take a look at the while statement
					non terminal and let's compare it with the Rust parser code
					for it:
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
					It consumes the while token, parses an expression, which is
					the condition for the loop, then parses a block statement
					and that's it, this is the magic of it! Let's look at
					another example if you're still not convinced:
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
					For parsing a print statement according to the grammar, it
					is expected a print token, followed by a left parentheses,
					then an expression, then a right parentheses and finally a
					semicolon token.
				</Highlight>
			</Text>

			<Text>
				There are still unanswered questions about our parsing, look at
				the following example:
			</Text>

			<CodeBlockComponent
				title="main.kaori"
				language="kaori"
				code={"2 + 3 * 5;"}
			/>

			<Text>
				Mathematicians, a long time ago, created the order of operations
				convention, it is so we don't have to put as many parentheses in
				an expression to be able to express it in a way others would
				understand it with no ambiguity issues, they killed two birds
				with one stone: the expression becomes way less verbose to read
				and the ambiguity is gone! So here is the question: what is the
				answer to that expression according to them?
			</Text>

			<Text>
				The multiplication is done before the addition and the result is
				obviously: 17. Multiplication and division are both part of the
				factor rule because they share the same precedence level,
				addition and subtraction are part of the term rule.
			</Text>

			<CodeBlockComponent
				title="expressions"
				language="regex-grammar"
				code={`term -> factor (("+" | "-") factor)*
factor -> prefix_unary (("*" | "/") prefix_unary)*
                    `}
			/>

			<Text>
				To be able to parse an addition or a subtraction, the parser
				tries to parse a factor on the left and on the right side of it
				to ensure all the multiplications or divisions or operators with
				higher precedence are parsed before, this is how the order of
				operations are enforced by the grammar.
			</Text>

			<CodeBlockComponent
				title="expressions"
				language="regex-grammar"
				code={expressionRules}
			/>

			<Text>
				The last, but not the least important, the parsing rules for
				types, because types can also be represented by recursive trees.
			</Text>

			<CodeBlockComponent
				title="types"
				language="regex-grammar"
				code={typeRules}
			/>
		</SectionContainerComponent>
	);
};
