# Operators

## Arithmetic

```kaori
let a = 10 + 5;  // 15 — addition
let b = 10 - 5;  // 5  — subtraction
let c = 10 * 5;  // 50 — multiplication
let d = 10 / 5;  // 2  — division
let e = 10 % 3;  // 1  — modulo
```

## Comparison

Comparison operators return a boolean:

```kaori
let a = 5 == 5;  // true  — equal
let b = 5 != 4;  // true  — not equal
let c = 5 > 4;   // true  — greater than
let d = 5 >= 5;  // true  — greater than or equal
let e = 4 < 5;   // true  — less than
let f = 5 <= 5;  // true  — less than or equal
```

## Logical

```kaori
let a = true and false;  // false
let b = true or false;   // true
let c = not true;        // false
```

`and` and `or` are short-circuit evaluated — the right side is only evaluated if necessary:

```kaori
let x = false and expensive_call(); // expensive_call() is never called
let y = true or expensive_call();   // expensive_call() is never called
```

## Compound Assignment

Compound assignment operators reassign a variable with the result:

```kaori
let x = 10;

x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 4;  // x = x % 4 = 2
```

When used with a ref cell, use `^` to dereference:

```kaori
ref x = 10;
^x += 5;
```

## Negation

```kaori
let x = -5;
let y = -(3 + 2); // -5
```
