# Grammar

This page is a formal reference for the Kaori grammar.

```regex-grammar
program -> statement*

statement -> block
           | if
           | function
           | while
           | break
           | continue
           | return
           | variable
           | constant
           | ref
           | expression

block -> "{" (statement ";")* statement? "}"

if -> "if" expression block ("else" (block | if))?

while -> "while" expression block

function -> "fun" identifier "(" parameters ")" block

break -> "break"

continue -> "continue"

return -> "return" expression

variable -> "let" identifier "=" expression

constant -> "const" identifier "=" expression

ref -> "ref" identifier "=" expression

expression -> assignment

assignment -> logic_or ("=" | "+=" | "-=" | "*=" | "/=" | "%=") logic_or
            | logic_or

logic_or -> logic_and ("or" logic_and)*

logic_and -> equality ("and" equality)*

equality -> comparison (("==" | "!=") comparison)*

comparison -> term ((">" | ">=" | "<" | "<=") term)*

term -> factor (("+" | "-") factor)*

factor -> prefix (("*" | "/" | "%") prefix)*

prefix -> "not" expression
        | "-" prefix
        | "^" prefix
        | primary

primary -> number
         | string
         | "true"
         | "false"
         | "nil"
         | "(" expression ")"
         | block
         | if
         | lambda
         | map
         | identifier postfix*

lambda -> "|" parameters "|" (block | expression)

postfix -> call
         | member

call -> "(" arguments ")"

member -> "." identifier

arguments -> (expression ("," expression)*)?

parameters -> (identifier ("," identifier)*)?

map -> "#{" (map_field ("," map_field)* ","?)? "}"

map_field -> expression ":" expression
           | identifier
```
