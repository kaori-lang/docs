# Functions

A function is declared with the `fun` keyword, followed by its name, parameters, and an optional return type.

## Basic Functions

```kaori
fun square(n: number) -> number {
    return n * n;
}

fun main() {
    $result = square(5);
    print(result); // 25
}
```

## Recursive Functions

Functions can also call themselves recursively. Just remember to include a base case! :D

```kaori
fun foo(n: number) {
    print(n);

    if n > 0 {
        bar(n - 1);
    }
}

fun bar(n: number) {
    print(n);

    if n > 0 {
        foo(n - 1);
    }
}

fun main() {
    foo(10);
}
```
