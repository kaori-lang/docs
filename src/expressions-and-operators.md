# Expressions and Operators

Operators are the building blocks of expressions, and each operator has a fixed precedence, which determines the order in which expressions are evaluated when multiple operators appear together.

## Arithmetic Operators

For example, multiplication and division have higher precedence than addition and subtraction:

```kaori
3 + 4 * 5;   // 23
(3 + 4) * 5; // 35
```

## Comparison Operators

Comparison operators like `>`, `<=`, or `==` always evaluate to a boolean value:

```kaori
12 > 7;    // true
7 == 12;   // false
95 >= 95;  // true
```

## Logical Operators

Logical operators such as `&&` and `||` allow combining boolean expressions:

```kaori
true && false; // false
true || false; // true
!(5 == 6);     // true
```

## Assignment Operator

The assignment operator has the lowest precedence, ensuring that the expression on the right-hand side is fully evaluated before being assigned to the variable on the left:

```kaori
a = 3 + 4 * 2; // a = 11
```

## Parentheses and Precedence

Parentheses can always be used to make evaluation order explicit. If parentheses are omitted, then the parsing follows operator precedence.
