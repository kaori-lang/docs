# Expressions

Kaori has both statements and expressions. Expressions produce a value directly. Statements can also act as expressions when they appear as the tail of a block, in which case the block yields whatever that statement yields.

## Block Expressions

A block is a sequence of statements enclosed in `{ }`. Its value is determined by the last statement:

- If the last statement has no trailing semicolon, the block yields its value
- If the last statement has a trailing semicolon, the block yields `nil`

```kaori
let x = {
    let a = 5;
    let b = 10;
    a + b   // no semicolon, block yields 15
};

print(x); // 15
```

```kaori
let x = {
    let a = 5;
    let b = 10;
    a + b;  // semicolon, block yields nil
};

print(x); // nil
```

Some statements always yield `nil` regardless, so placing them as the tail will always make the block yield `nil`:

```kaori
let x = {
    let a = 5 // let always yields nil
};

print(x); // nil
```

Blocks can be used anywhere a value is expected:

```kaori
let label = {
    let abs = if x < 0 { -x } else { x };
    if abs > 100 { "big" } else { "small" }
};
```

## If Expressions

`if` is an expression and produces a value. Both branches of an `if`/`else` can yield different values:

```kaori
let label = if score > 90 { "A" } else { "B" };
```

The `else` branch is optional, but without it the expression produces `nil` when the condition is false:

```kaori
let a = if true { 42 };  // a = 42
let b = if false { 42 }; // b = nil
```

`if` chains work the same way, the value comes from whichever branch is taken:

```kaori
let sign = if x > 0 {
    "positive"
} else if x < 0 {
    "negative"
} else {
    "zero"
};
```

## Lambda Expressions

Lambdas are expressions and can appear anywhere a value is expected, in assignments, map fields, or as arguments:

```kaori
let double = |x| x * 2;

let ops = #{
    add: |a, b| a + b,
    sub: |a, b| a - b,
};

print(ops.add(1, 2)); // 3
```

The body of a lambda can be a single expression or a block:

```kaori
let add = |a, b| a + b;

let add = |a, b| {
    let result = a + b;
    result
};
```

## Expressions as Statements

Any expression can be used as a statement by adding a semicolon. The value is discarded:

```kaori
print("hello");
1 + 2; // value discarded
```

## Nil-Yielding Statements

`while`, `fun`, `return`, `break`, `continue`, `let`, `const`, and `ref` always yield `nil`. They are normally used as statements, but when used as the tail of a block they act as expressions and the block yields `nil`:

```kaori
let x = {
    let a = 5;
    while a > 0 {
        a -= 1;
    } // while acts as expression here, yields nil
};

print(x); // nil
```
