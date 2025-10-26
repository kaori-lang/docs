# Variables and Data Types

Variable declarations in Kaori can include type annotations, but they are **optional**. When a type annotation is not provided, the compiler automatically infers the type from the initial value. All variables must be initialized with a value on the right-hand side.

`number` and `bool` are the most basic types:

```kaori
def main() {
    $foo: number = 5;        // Explicit type annotation
    $bar = 10;               // Type inferred as number
    $foo_bar: bool = true;   // Explicit type annotation
    $is_valid = false;       // Type inferred as bool
}
```

## Type Inference

The Kaori compiler uses **automatic type inference** for variables without explicit type annotations. The type is determined from the initialization value:

```kaori
def main() {
    $count = 42;           // Inferred as number
    $active = true;        // Inferred as bool
}
```

You can still provide explicit type annotations when you want to be more explicit about types or when it improves code clarity:

```kaori
def main() {
    $temperature: number = 98.6;  // Explicit
    $humidity = 65;                // Inferred
}
```
