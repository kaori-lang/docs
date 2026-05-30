# Closures

A closure is a function that captures variables from its enclosing scope.

## Capture by Value

Kaori captures `let` variables **by value** — the closure gets a copy of the variable's value at the time of creation:

```kaori
let x = 5;

let f = fun() { x };

x = 10;       // mutate x after closure creation
print(f());   // 5 — closure captured the original value
```

## Capturing Ref Cells

To share mutable state between closures, capture a `ref` cell. The cell pointer is copied by value, but all closures that capture it point to the same heap-allocated cell:

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

## Closures as Callbacks

Closures are commonly passed as arguments:

```kaori
fun repeat(n, f) {
    let i = 0;

    while i < n {
        f(i);
        i += 1;
    }
}

repeat(5, fun(i) {
    print(i);
});
```

## Returning Closures

Functions can return closures:

```kaori
fun make_adder(x) {
    fun(y) { x + y }
}

let add5 = make_adder(5);
let add10 = make_adder(10);

print(add5(3));  // 8
print(add10(3)); // 13
```
