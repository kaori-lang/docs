# Grammar

This page is a formal reference for the Kaori grammar.

```regex-grammar
program -> expression*

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
         | while
         | function
         | variable
         | ref
         | return
         | break
         | continue
         | map
         | identifier postfix*

postfix -> call
         | member

call -> "(" arguments ")"

member -> "." identifier

arguments -> (expression ("," expression)*)?

block -> "{" (expression ";")* expression? "}"

if -> "if" expression block ("else" (block | if))?

while -> "while" expression block

function -> "fun" identifier? "(" parameters ")" block

parameters -> (identifier ("," identifier)*)?

variable -> "let" identifier "=" expression

ref -> "ref" identifier "=" expression

return -> "return" expression

break -> "break"

continue -> "continue"

map -> "#{" (map_field ("," map_field)* ","?)? "}"

map_field -> expression ":" expression
           | identifier
```

## Notes

**Semicolons** are required after most expressions. Block expressions (`if`, `while`, `fun`, `{}`) do not need a trailing semicolon:

```kaori
let x = 5;          // semicolon required
if x > 0 { x }      // no semicolon needed
fun foo() { x }     // no semicolon needed
```

**Everything is an expression** — `if`, blocks, and function definitions all produce values. `while`, `return`, `break`, `continue`, `let`, and `ref` do not produce values and cannot be used in value position.
