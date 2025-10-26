# Variables and Data Types

Variable declarations require type annotation, and must always be initialized with a value on the right-hand side.

`number` and `bool` are the most basic types:

```kaori
def main() {
    $foo: number = 5;
    $foo_bar: bool = true;
}
```

## Scope Rules

Notice that `foo` is now declared in the global scope and that is **not allowed**. All objects can only live in the local scope.

```kaori


def main() {
    $foo_bar: bool = true;  // ✓ Correct: variables must be in local scope
}
```

Variables must always be declared inside functions or other block statements.
