# Variables and Data Types

Variables in Kaori are declared with the `let` keyword and must always be initialized with a value. Since Kaori is dynamically typed, there are no type annotations — the type of a variable is determined at runtime by the value it holds.

`number` and `bool` are the most basic types:

```kaori
fun main() {
    let foo = 5;        // number
    let bar = 10;       // number
    let foo_bar = true; // bool
    let is_valid = false; // bool
}
```

## Dynamic Typing

Since Kaori is dynamically typed, variables are not bound to a specific type at compile time. The runtime tracks the type of each value and will raise an error if an operation is performed on an incompatible type:

```kaori
fun main() {
    let count = 42;     // holds a number at runtime
    let active = true;  // holds a bool at runtime
}
```
