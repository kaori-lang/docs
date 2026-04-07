# Kaori Programming Language

**Kaori** is a dynamically typed programming language designed to be **simple**, **expressive**, and **readable**.  
It draws inspiration from modern languages like **Python** and **Rust**, combining their clarity and robustness in a minimal design.

Here's a quick look at some syntax:

```kaori
fun main() {
    n := 5;
    print(fib(n));
}

fun fib(n) {
    if n < 2 {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
```
