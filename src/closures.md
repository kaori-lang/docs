# Closures

A closure is a function or lambda that captures variables from its enclosing scope.

## Capture by Value

All closures in Kaori capture variables by value at the time of creation. This applies to both named functions and lambdas:

```kaori
let x = 5;

let f = || x;

x = 10;        // reassign x after the closure was created
print(f());    // 5, f captured the original value
```

```kaori
let x = 5;

fun f() {
    x
}

x = 10;
print(f()); // 5, f captured the original value
```

For `const` and `let`, the closure receives a copy of the value itself.

## Capturing Ref Cells

For `ref` bindings, what gets captured by value is the ref cell. Since all copies of the cell refer to the same heap value, any write through `^` is visible to every closure that captured it:

```kaori
ref x = 5;

let f = || ^x;

^x = 10;
print(f()); // 10, all copies of the ref cell refer to the same heap value
```

This is the main reason `ref` exists — to let multiple closures share and mutate a single value.

## Shared State Between Closures

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

## Closures as Callbacks

Closures are commonly passed as arguments to other functions:

```kaori
fun repeat(n, f) {
    let i = 0;

    while i < n {
        f(i);
        i += 1;
    }
}

repeat(5, |i| {
    print(i);
});
```

## Returning Closures

Functions can return closures:

```kaori
fun make_adder(x) {
    |y| x + y
}

let add5 = make_adder(5);
let add10 = make_adder(10);

print(add5(3));  // 8
print(add10(3)); // 13
```
