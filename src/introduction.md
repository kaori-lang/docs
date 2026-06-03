# Kaori

Kaori is a dynamically typed scripting language implemented in Rust. It takes inspiration from Rust and Lua, and is designed to be simple, explicit, and expressive.

## Example

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
