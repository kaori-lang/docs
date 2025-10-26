# Kaori Programming Language

**Kaori** is a statically typed programming language designed to be **simple**, **expressive**, and **readable**.  
It draws inspiration from modern languages like **Python** and **Rust**, combining their clarity and robustness in a minimal design.

Here’s a quick look at some syntax:

```kaori
def main() {
    $n = 5;
    print(fib(n));
}

def fib(n: number) -> number {
    if n == 0 {
        return 0;
    }
    if n == 1 {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
```
