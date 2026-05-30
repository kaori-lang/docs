# Kaori

Kaori is a dynamically typed scripting language implemented in Rust. It is designed to be simple and expressive

## Design Goals

- **Everything is an expression** — `if`, blocks, and functions all produce values
- **Simple and explicit** — no magic, no hidden behavior

## Examples

```kaori
fun fib(n) {
    if n < 2 {
        n
    } else {
        fib(n - 1) + fib(n - 2)
    }
}

fib(40);
```
