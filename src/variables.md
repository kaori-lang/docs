# Variables

Kaori has two kinds of variable declarations — `let` bindings and `ref` cells.

## Let Bindings

Use `let` to declare a variable. The value lives on the stack and can be reassigned:

```kaori
let x = 5;
let name = "kaori";

x = 10;       // reassignment is fine
name = "new"; // fine too
```

## Ref Cells

Use `ref` to declare a mutable cell. Unlike `let`, the value is heap allocated, which allows it to be shared and mutated across closures:

```kaori
ref count = 0;

^count = 1;
^count += 1;

print(^count); // 2
```

## The Difference

The key difference between `let` and `ref` is not mutability — both can be mutated. The difference is **where the value lives**:

- `let` — value lives on the stack. Fast, but cannot be shared across closures.
- `ref` — value lives on the heap. Slightly more overhead, but can be captured and mutated across multiple closures.

```kaori
let x = 5;

let f = fun() {
    x = 10; // error: cannot mutate a captured let binding
};
```

```kaori
ref x = 5;

let f = fun() {
    ^x = 10; // fine — ref cell lives on the heap, closure captures the pointer
};

f();
print(^x); // 10
```

## Scope

Variables are scoped to the block they are declared in:

```kaori
let x = 5;

{
    let y = 10;
    print(x + y); // 15 — x is accessible here
}

print(y); // error: y is not declared
```

## Shadowing

A variable can be shadowed by declaring a new variable with the same name in an inner scope:

```kaori
let x = 5;

{
    let x = 10; // shadows outer x
    print(x);   // 10
}

print(x); // 5 — outer x is unchanged
```
