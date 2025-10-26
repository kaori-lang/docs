# Control Flow

Control flow allows you to decide how the code executes: you can branch into different paths or repeat code with loops.

## If Statements

An `if` statement runs a block of code only if its condition is true.

```kaori
def main() {
    if 10 > 5 {
        print("10 is bigger");
    } else if 2 < 3 {
        print("2 is smaller");
    } else {
        print("all the other branches condition were false");
    }
}
```

## While Loops

A `while` loop runs a block of code repeatedly as long as the condition remains true.

```kaori
def main() {
    $i: number = 0;

    while i < 3 {
        print(i);
        i += 1;
    }
}
```

## For Loops

A `for` loop is just syntax sugar for the `while` loop and also runs a block of code as long as the condition remains true. It has a variable declaration, a condition, and an expression statement that increments the variable.

```kaori
def main() {
    for $i: number = 0; i < 3; i += 1 {
        print(i);
    }
}
```

## Nested Loops

Loops can be nested, which is useful for iterating over multiple dimensions.

```kaori
def main() {
    for $x: number = 0; x < 2; x += 1 {
        for $y: number = 0; y < 2; y += 1 {
            print(x + y);
        }
    }
}
```
