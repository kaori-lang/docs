# Control Flow

## If

`if` is an expression — it produces a value:

```kaori
let result = if x > 0 { "positive" } else { "non-positive" };
```

The `else` branch is optional. If omitted and the condition is false, the expression produces `nil`:

```kaori
if x > 0 {
    print("positive");
}
```

### Else If

```kaori
let sign = if x > 0 {
    "negative"
} else if x < 0 {
    "negative"
} else {
    "zero"
};
```

### If as a Statement

When used as a statement, the result is discarded:

```kaori
if x > 10 {
    print("big");
} else {
    print("small");
}
```

## While

`while` loops execute a block as long as the condition is true:

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

## Blocks

A block is a sequence of expressions enclosed in `{ }`. The value of a block is its last expression if it has no trailing semicolon, otherwise `nil`:

```kaori
let result = {
    let x = 5;
    let y = 10;
    x + y      // no semicolon — this is the block's value
};

print(result); // 15
```
