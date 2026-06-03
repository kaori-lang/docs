# Control Flow

## If

`if` is an expression, so it produces a value. It is also a block-like construct, so it does not need a trailing semicolon:

```kaori
let result = if x > 0 { "positive" } else { "non-positive" };
```

The `else` branch is optional when `if` is used as a statement. When used as an expression in value position, the `else` branch is required:

```kaori
if x > 0 {
    print("positive");
}
```

### Else If

```kaori
let sign = if x > 0 {
    "positive"
} else if x < 0 {
    "negative"
} else {
    "zero"
};
```

### If as a Statement

When used as a statement, the result is simply discarded:

```kaori
if x > 10 {
    print("big");
} else {
    print("small");
}
```

## While

`while` loops execute a block as long as the condition is true. Like `if`, no trailing semicolon is needed:

```kaori
let i = 0;

while i < 10 {
    print(i);
    i += 1;
}
```

### Break and Continue

Use `break` to exit a loop early and `continue` to skip to the next iteration:

```kaori
let i = 0;

while i < 10 {
    if i == 5 {
        break;
    }

    print(i);
    i += 1;
}
```

```kaori
let i = 0;

while i < 10 {
    i += 1;

    if i % 2 == 0 {
        continue;
    }

    print(i); // only prints odd numbers
}
```
