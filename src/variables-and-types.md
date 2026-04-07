# Kaori Programming Language Documentation

# Introduction

Kaori is a dynamically typed, simple programming language inspired by Python. It features:

-   Minimal variable declarations using `:=`
-   Simple function syntax with `fun`
-   Dictionaries for structured data (used as simple objects)
-   C-style `for` loops with inline variable declarations
-   No classes or complex OOP features — objects are just dictionaries

# Variables and Data Types

Variables in Kaori are declared using the `:=` operator. A variable is automatically created and initialized when you first assign to it. Since Kaori is dynamically typed, the type of a variable is determined at runtime by the value it holds.

The most basic types are `number`, `bool`, and `string`:

```kaori
fun main() {
    foo := 5;        // number
    bar := 10;       // number
    foo_bar := true; // bool
    is_valid := false; // bool
    name := "Alice";   // string
}
```

## Dynamic Typing

Variables are not bound to a specific type at compile time. The runtime tracks the type of each value and will raise an error if an operation is performed on an incompatible type:

```kaori
fun main() {
    count := 42;     // holds a number at runtime
    active := true;  // holds a bool at runtime
}
```

## Dictionaries

Kaori uses simple key-value dictionaries for structured data, keys can be any hashable expression.

```kaori
fun main() {
    dict := {a: 5, b: 7, 2 * 3: "some value", "c": 8, true: "true"};
}
```

You can access values using dot notation if the key is a string:

```kaori
fun main() {
    person := {name: "Alice", age: 30};
    print(person.name);  // "Alice"
}
```
