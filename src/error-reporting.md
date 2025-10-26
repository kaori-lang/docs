# Error Reporting

Error reporting is one of the core features. A programming language without clear diagnostics misses one of the most important pillars of usability. In the current implementation, it provides detailed error messages, showing both the line and the column where the error occurred and pointing exactly to the problematic code. This makes debugging much easier and helps developers understand what went wrong.

## Example: Syntax Error

```kaori
def main() {
    print(2 +);
}
```

What do we expect to happen in the code above? Can you guess? It's a **syntax error**—an addition operation expects to have a left and a right operand, but a right parenthesis is not a valid operand.

Kaori's error reporting will pinpoint exactly where the problem is, showing you the line, column, and the specific token that caused the issue, making it clear what needs to be fixed.
