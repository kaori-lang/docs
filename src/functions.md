# Functions

A function is declared with the `def` keyword, followed by its name, parameters, and an optional return type.

## Basic Functions

```kaori
def square(n: number) -> number {
    return n * n;
}

def main() {
    $result = square(5);
    print(result); // 25
}
```

## Recursive Functions

Functions can also call themselves recursively. Just remember to include a base case! :D

```kaori
def foo(n: number) {
    print(n);

    if n > 0 {
        bar(n - 1);
    }
}

def bar(n: number) {
    print(n);

    if n > 0 {
        foo(n - 1);
    }
}

def main() {
    foo(10);
}
```
