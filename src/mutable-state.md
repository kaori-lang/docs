# Mutable State

Kaori has two ways to declare variables — `let` for stack-allocated bindings and `ref` for heap-allocated cells. Both are mutable, but they differ in how they interact with closures.

## Let Bindings

`let` variables live on the stack and can be freely reassigned:

```kaori
let x = 5;
x = 10;
x += 1;
print(x); // 11
```

## Ref Cells

`ref` variables are heap-allocated cells. Use `^` to read and write through them:

```kaori
ref count = 0;

^count = 1;
^count += 1;

print(^count); // 2
```

## Reading a Cell

Use `^` to read the value inside a cell:

```kaori
ref x = 5;
print(^x); // 5
```

## Writing to a Cell

Use `^` on the left side of an assignment to write to a cell:

```kaori
ref x = 5;
^x = 10;
print(^x); // 10
```

## Compound Assignment

Compound assignment operators work with cells:

```kaori
ref x = 0;
^x += 1;
^x += 1;
print(^x); // 2
```

## Why Ref Exists

The reason `ref` exists is closure capture. `let` bindings are stack values — when a closure captures one, it gets a copy of the value at capture time. Mutating the original doesn't affect the closure's copy:

```kaori
let x = 5;
let f = fun() { x };

x = 10;       // mutate x
print(f());   // still 5 — f captured a copy of the original value
```

`ref` cells solve this by putting the value on the heap. The closure captures the pointer to the cell, so both the closure and the outer scope see the same value:

```kaori
ref x = 5;

let f = fun() { ^x };

^x = 10;
print(f()); // 10 — f captured the cell pointer, sees the new value
```

## Shared Mutable State Across Closures

This is the main use case for `ref` — multiple closures sharing the same mutable value:

```kaori
fun make_counter() {
    ref count = 0;

    let increment = fun() {
        ^count += 1;
    };

    let get = fun() {
        ^count
    };

    #{ increment, get }
}

let counter = make_counter();
counter.increment();
counter.increment();
print(counter.get()); // 2
```

## When to Use Let vs Ref

Use `let` by default — it is faster since there is no heap allocation or pointer indirection. Only reach for `ref` when you need a value to be mutated and shared across multiple closures.

```kaori
// prefer let for simple loop counters
let i = 0;
while i < 10 {
    print(i);
    i += 1;
}

// use ref when closures need to share mutable state
ref shared = 0;
let a = fun() { ^shared += 1; };
let b = fun() { ^shared += 1; };
a(); b();
print(^shared); // 2
```
