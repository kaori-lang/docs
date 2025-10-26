# Functions

A function is declared with the `def` keyword, followed by its name, parameters, and an optional return type.

## Basic Functions

```kaori
def square(n: number) -> number {
    return n * n;
}

def main() {
    $result: number = square(5);
    print(result); // 25
}
```

## Recursive Functions

Functions can also call themselves recursively. Just remember to include a base case! :D

```kaori
def fib(n: number) -> number {
    if n == 0 {
        return 0;
    }
    if n == 1 {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

def main() {
    print(fib(6));
}
```
