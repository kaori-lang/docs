# Control Flow

Control flow allows you to decide how the code executes: you can branch into different paths or repeat code with loops. Kaori provides several control flow mechanisms to help you write expressive and efficient code.

## If Statements

An `if` statement runs a block of code only if its condition is true. You can chain multiple conditions using `else if` and provide a fallback with `else`.

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

The condition must evaluate to a boolean value. You can use comparison operators (`>`, `<`, `>=`, `<=`, `==`, `!=`) and logical operators (`and`, `or`, `not`) to build complex conditions.

## While Loops

A `while` loop runs a block of code repeatedly as long as the condition remains true. The condition is checked before each iteration.

```kaori
def main() {
    $i = 0;

    while i < 3 {
        print(i);
        i += 1;
    }
}
```

## For Loops

A `for` loop is syntax sugar for the `while` loop and provides a more compact way to write loops with initialization, condition, and increment logic. It has a variable declaration, a condition, and an expression statement that modifies the loop variable.

```kaori
def main() {
    for $i = 0; i < 3; i += 1 {
        print(i);
    }
}
```

The variable declared in the `for` loop is scoped to the loop body and cannot be accessed outside of it.

## Nested Loops

Loops can be nested, which is useful for iterating over multiple dimensions or working with matrices and grids.

```kaori
def main() {
    for $x = 0; x < 2; x += 1 {
        for $y = 0; y < 2; y += 1 {
            print(x + y);
        }
    }
}
```

## Break Statement

The `break` statement immediately exits the innermost loop, skipping any remaining iterations. This is useful when you want to stop a loop early based on a condition.

```kaori
def main() {
    for $i = 0; i < 10; i += 1 {
        if i == 5 {
            break;  // Exit the loop when i equals 5
        }
        print(i);
    }
    print("Loop finished");
}
```

In nested loops, `break` only exits the innermost loop:

```kaori
def main() {
    for $x = 0; x < 3; x += 1 {
        for $y = 0; y < 3; y += 1 {
            if y == 2 {
                break;  // Only exits the inner loop
            }
            print(x + y);
        }
    }
}
```

## Continue Statement

The `continue` statement skips the rest of the current iteration and moves to the next iteration of the loop. This is useful when you want to skip specific cases without exiting the entire loop.

```kaori
def main() {
    for $i = 0; i < 5; i += 1 {
        if i == 2 {
            continue;  // Skip printing when i equals 2
        }
        print(i);
    }
}
```

You can use `continue` to filter out unwanted iterations:

```kaori
def main() {
    // Print only even numbers
    for $i = 0; i < 10; i += 1 {
        if i % 2 != 0 {
            continue;  // Skip odd numbers
        }
        print(i);
    }
}
```
