# Functions

## Declaration

Named functions are declared with `fun`:

```kaori
fun add(a, b) {
    a + b
}

print(add(1, 2)); // 3
```

The return value is the last expression in the body with no trailing semicolon, so no `return` keyword is needed in the common case:

```kaori
fun max(a, b) {
    if a > b { a } else { b }
}
```

## Explicit Return

Use `return` to exit a function early:

```kaori
fun sign(x) {
    if x > 0 {
        return "positive";
    }

    if x < 0 {
        return "negative";
    }

    "zero"
}
```

## First-Class Functions

Functions are values and can be passed as arguments or returned from other functions:

```kaori
fun apply(f, x) {
    f(x)
}

fun double(x) {
    x * 2
}

print(apply(double, 5)); // 10
```

## Lambdas

For anonymous functions, use the lambda syntax `|params| body`:

```kaori
let add = |a, b| a + b;

print(add(1, 2)); // 3
```

The body can also be a block:

```kaori
let add = |a, b| {
    a + b
};
```

Lambdas are expressions, so they can appear anywhere a value is expected — as arguments, inside maps, or in assignments:

```kaori
let ops = #{
    add: |a, b| a + b,
    sub: |a, b| a - b,
};

print(ops.add(3, 2)); // 5
```

```kaori
fun apply(f, x) {
    f(x)
}

print(apply(|x| x * 2, 5)); // 10
```

## Recursion

Functions can call themselves recursively:

```kaori
fun fib(n) {
    if n < 2 {
        n
    } else {
        fib(n - 1) + fib(n - 2)
    }
}

print(fib(10)); // 55
```

## Closures

Both named functions and lambdas can capture variables from their enclosing scope. See [Closures](./closures.md) for details.
