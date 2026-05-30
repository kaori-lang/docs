# Expressions

In Kaori, everything is an expression — every construct produces a value.

## Block Expressions

A block produces the value of its last expression if it has no trailing semicolon:

```kaori
let x = {
    let a = 5;
    let b = 10;
    a + b   // no semicolon — value of the block
};

print(x); // 15
```

If the last expression has a semicolon, the block produces `nil`:

```kaori
let x = {
    let a = 5;
    print(a);   // semicolon — result discarded
};

print(x); // nil
```

## If Expressions

`if` produces a value:

```kaori
let label = if score > 90 { "A" } else { "B" };
```

Both branches must exist if you want to use the value. An `if` without `else` produces `nil` when the condition is false:

```kaori
let result = if true { 42 }; // result = 42
let result = if false { 42 }; // result = nil
```

## Function Expressions

Functions are expressions — they can appear anywhere a value is expected:

```kaori
let ops = #{
    add: fun(a, b) { a + b },
    sub: fun(a, b) { a - b },
};

print(ops.add(1, 2)); // 3
```

## Expressions as Statements

Any expression can be used as a statement by adding a semicolon. The value is discarded:

```kaori
print("hello");    // function call as statement
1 + 2;             // arithmetic as statement — value discarded
```

## Statement Blocks

`while` loops and other statement-only constructs do not produce a value. Only block expressions can produce values:

```kaori
// error: expected `;` after expression, only block expressions can produce values
let x = while true { break; };
```
