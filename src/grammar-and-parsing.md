# Grammar and the Parsing

A programming language also has its own grammar. In English grammar classes, we learned the rules to build our first sentences formed with words. In the compilers world, statements, expressions and declarations are built with tokens that are formed by a sequence of one or more characters.

We are going to enforce a set of rules known as grammar. This is a very important step to develop a compiler, going from a sequence of tokens to an Abstract Syntax Tree that can represent a program in a more meaningful way.

Here is a non-EBNF grammar with custom syntax highlight, created with regular expression, so that non-compiler developers can also understand it without having to dive into EBNF syntax:

## Declarations

```regex-grammar
program -> declaration* "EOF"

declaration -> function_declaration

parameters -> (identifier ("," identifier)*)?
function_body -> "{" statement* "}"
function_declaration -> "fun" identifier "(" parameters ")" function_body
```

## Statements

```regex-grammar
statement -> block_statement
           | expression_statement ";"
           | return_statement ";"
           | if_statement
           | while_statement
           | for_statement

block_statement -> "{" statement* "}"

expression_statement -> expression

return_statement -> "return" (expression)?

if_statement -> "if" expression block_statement ("else" (if_statement | block_statement))?

while_statement -> "while" expression block_statement

for_statement -> "for" expression ";" expression ";" expression_statement block_statement
```

## Operator Precedence

There are still unanswered questions about our parsing. Look at the following example:

```kaori
2 + 3 * 5;
```

Mathematicians, a long time ago, created the order of operations convention. It ensures we don't have to put as many parentheses in an expression to be able to express it in a way others would understand with no ambiguity issues. They killed two birds with one stone: the expression becomes way less verbose to read and the ambiguity is gone! So here is the question: what is the answer to that expression according to them?

The multiplication is done before the addition and the result is obviously: **17**. Multiplication and division are both part of the `factor` rule because they share the same precedence level. Addition and subtraction are part of the `term` rule.

```regex-grammar
term -> factor (("+" | "-") factor)*
factor -> prefix_unary (("*" | "/") prefix_unary)*
```

To be able to parse an addition or a subtraction, the parser tries to parse a factor on the left and on the right side of it to ensure all the multiplications or divisions or operators with higher precedence are parsed before. This is how the order of operations are enforced by the grammar.

## Expressions

```regex-grammar
expression -> declare_assign | compound_assign | logic_or

declare_assign -> logic_or ":=" logic_or

compound_assign -> logic_or ("+=" | "-=" | "*=" | "/=" | "%=") logic_or

logic_or -> logic_and ("or" logic_and)*

logic_and -> equality ("and" equality)*

equality -> comparison (("!=" | "==") comparison)*

comparison -> term ((">" | ">=" | "<" | "<=") term)*

term -> factor (("+" | "-") factor)*

factor -> power (("*" | "/" | "%") power)*

power -> prefix_unary ("**" power)?

prefix_unary -> "-" prefix_unary | "not" logic_or

arguments -> (expression ("," expression)*)?

primary -> number_literal
         | string_literal
         | boolean_literal
         | dict_literal
         | identifier (postfix_unary)*
         | "(" expression ")"

postfix_unary -> function_call | member_access

function_call -> "(" arguments ")"

member_access -> "." identifier

dict_field -> expression (":" expression)?
dict_literal -> "{" (dict_field ("," dict_field)* ","?)? "}"
```
