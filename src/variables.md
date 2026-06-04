# Variables

Kaori has three kinds of variable declarations: `const`, `let`, and `ref`. They differ in whether the binding can be reassigned and where the value lives.

## Const

`const` declares a constant binding that cannot be reassigned:

```kaori
const pi = 3.14159;
const name = "kaori";
```

## Let

`let` declares a variable that can be freely reassigned:

```kaori
let x = 5;
x = 10;
x += 1;
print(x); // 11
```

## Ref

`ref` declares a ref cell whose value lives on the heap. The binding itself cannot be reassigned, but the value it holds can be read and written through the `^` operator:

```kaori
ref count = 0;

^count = 1;
^count += 1;

print(^count); // 2
```

Attempting to reassign the binding directly is an error:

```kaori
ref x = 5;
x = 10; // error: cannot reassign a ref binding
```

## Why Ref Exists

All closures in Kaori capture variables by value at the time of creation. For a `let` binding, the closure gets a copy of the value, so any later mutations to the original are not visible inside the closure:

```kaori
let x = 5;
let f = || x;

x = 10;
print(f()); // 5 — f captured a copy of x's value
```

With a `ref`, the closure captures a copy of the ref cell. Since both copies of the cell refer to the same heap value, any write through `^` is visible to every closure that captured it:

```kaori
ref x = 5;

let f = || ^x;

^x = 10;
print(f()); // 10 — both the original and the closure's copy refer to the same heap value
```

This is the primary reason to reach for `ref` — when you need multiple closures to share and mutate a single value:

```kaori
fun make_counter() {
    ref count = 0;

    let increment = || { ^count += 1; };
    let get = || ^count;

    #{ increment, get }
}

let counter = make_counter();
counter.increment();
counter.increment();
print(counter.get()); // 2
```

## Scope

Variables are scoped to the block they are declared in:

```kaori
let x = 5;

{
    let y = 10;
    print(x + y); // 15
}

print(y); // error: y is not in scope
```

## Shadowing

A variable can be shadowed by declaring a new one with the same name. This is allowed both in inner scopes and within the same block:

```kaori
let x = 5;
let x = 10; // shadows the previous x
print(x);   // 10
```

```kaori
let x = 5;

{
    let x = 10; // shadows outer x
    print(x);   // 10
}

print(x); // 5
```
