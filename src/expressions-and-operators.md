# Expressions and Operators

Operators are the building blocks of expressions, and each operator has a fixed precedence, which determines the order in which expressions are evaluated when multiple operators appear together.

## Arithmetic Operators

Kaori supports the standard arithmetic operators for mathematical calculations:

-   `+` Addition
-   `-` Subtraction
-   `*` Multiplication
-   `/` Division
-   `%` Modulo (remainder)

Multiplication, division, and modulo have higher precedence than addition and subtraction:

```kaori
3 + 4 * 5;   // 23
(3 + 4) * 5; // 35
10 % 3;      // 1
```

## Comparison Operators

Comparison operators like `>`, `<`, `>=`, `<=`, `==`, and `!=` always evaluate to a boolean value:

```kaori
12 > 7;    // true
7 == 12;   // false
95 >= 95;  // true
10 != 5;   // true
```

## Logical Operators

Logical operators such as `and`, `or`, and `not` allow combining boolean expressions:

```kaori
true and false; // false
true or false;  // true
not 5 == 6;     // true
```

## Assignment Operators

The assignment operator (`=`) has the lowest precedence, ensuring that the expression on the right-hand side is fully evaluated before being assigned to the variable on the left:

```kaori
$a = 3 + 4 * 2; // a = 11
```

### Compound Assignment Operators

Kaori provides compound assignment operators that combine an arithmetic operation with assignment. These operators are shorthand for performing an operation and then assigning the result back to the variable:

-   `+=` Add and assign
-   `-=` Subtract and assign
-   `*=` Multiply and assign
-   `/=` Divide and assign
-   `%=` Modulo and assign

```kaori
fun main() {
    $x = 10;

    x += 5;  // Equivalent to: x = x + 5  (x is now 15)
    x -= 3;  // Equivalent to: x = x - 3  (x is now 12)
    x *= 2;  // Equivalent to: x = x * 2  (x is now 24)
    x /= 4;  // Equivalent to: x = x / 4  (x is now 6)
    x %= 4;  // Equivalent to: x = x % 4  (x is now 2)
}
```

Compound assignment operators are particularly useful in loops and when updating values incrementally:

```kaori
fun main() {
    $sum = 0;

    for $i = 1; i <= 5; i += 1 {
        sum += i;  // Add each number to the sum
    }

    print(sum);  // 15
}
```

The right-hand side of a compound assignment can be any valid expression:

```kaori
fun main() {
    $total = 100;
    $multiplier = 3;

    total *= multiplier + 2;  // total = total * (3 + 2) = 500
}
```

## Parentheses and Precedence

Parentheses can always be used to make evaluation order explicit. If parentheses are omitted, then the parsing follows operator precedence.
