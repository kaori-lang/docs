# Functions

## Declaration

Named functions are declared with `fun`:

```kaori
fun add(a, b) {
    a + b
}

print(add(1, 2)); // 3
```

The return value is the last expression in the function body. No `return` keyword needed:

```kaori
fun max(a, b) {
    if a > b { a } else { b }
}
```

## Explicit Return

Use `return` to exit a function early:

```kaori
fun find(value, list) {
    let i = 0;

    while i < list.len {
        if list[i] == value {
            return i;
        }
        i += 1;
    }

    nil
}
```

## Anonymous Functions

Functions without a name are anonymous:

```kaori
let add = fun(a, b) { a + b };

print(add(1, 2)); // 3
```

## First Class Functions

Functions are values — they can be passed as arguments and returned from other functions:

```kaori
fun apply(f, x) {
    f(x)
}

fun double(x) {
    x * 2
}

print(apply(double, 5)); // 10
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

Functions capture variables from their enclosing scope by value:

```kaori
fun make_adder(x) {
    fun(y) { x + y }
}

let add5 = make_adder(5);
print(add5(3)); // 8
```

See [Closures](./closures.md) for more details.
