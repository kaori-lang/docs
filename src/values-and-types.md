# Values and Types

Kaori is dynamically typed — values carry their type at runtime.

## Number

All numbers in Kaori are 64-bit floating point:

```kaori
let x = 5;
let y = 3.14;
let z = -2.5;
```

## String

Strings are immutable sequences of characters, delimited by double quotes:

```kaori
let name = "kaori";
let greeting = "hello, world!";
```

Strings can be concatenated with `+`:

```kaori
let full = "hello, " + "world!";
```

## Boolean

```kaori
let yes = true;
let no = false;
```

## Nil

`nil` represents the absence of a value:

```kaori
let nothing = nil;
```

## Map

Maps are the primary data structure in Kaori — key-value pairs enclosed in `#{ }`:

```kaori
let cat = #{ name: "whiskers", age: 5 };
```

See [Maps](./maps.md) for more.

## Function

Functions are first-class values:

```kaori
let add = fun(a, b) { a + b };
```

See [Functions](./functions.md) for more.

## Ref Cell

A ref cell is a heap-allocated mutable container. Use `ref` to create one and `^` to read or write through it:

```kaori
ref count = 0;
^count += 1;
print(^count); // 1
```

See [Mutable State](./mutable-state.md) for more.

## Type Checking

Since Kaori is dynamically typed, type errors are caught at runtime:

```kaori
let x = 5 + "hello"; // runtime error: cannot add, both operands must be numbers
```
