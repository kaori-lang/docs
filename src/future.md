# The Future

I believe we can now confidently call Kaori a **Turing-complete programming language**. Many core features have already been implemented, and the journey so far has been both fun and challenging. Kaori is now more than 5x faster than its original Java implementation, since it is fully rewritten in Rust and no longer relies on a naive tree-walker interpreter.

## Performance

Kaori's performance is now competitive with established dynamic languages. We've surpassed Python significantly and are approaching Lua's performance levels. PyPy remains our benchmark goal—it's currently about 2x faster than us in iterative code and 3x faster in recursive scenarios. Our goal is to get as close as possible to PyPy JIT-level performance without a JIT. It sounds very unlikely, but at the same time it is going to be a very exciting journey, don't you think?

### Fibonacci Benchmark Results

Here's how Kaori compares to other dynamic languages when computing Fibonacci numbers:

| Language  | Iterative (s) | Recursive (s) |
| --------- | ------------- | ------------- |
| **Kaori** | **0.393906**  | **3.312068**  |
| Lua       | 0.286515      | 4.779067      |
| Python    | 3.011300      | 12.621375     |
| PyPy      | 0.182464      | 1.148566      |

As you can see, Kaori significantly outperforms CPython and is competitive with Lua, while PyPy still leads the pack with its sophisticated JIT compilation.

# Feature Status

-   [x] Error reporting
-   [x] Code comments
-   [x] Compound assign operators
-   [x] Logical operators
-   [x] Arithmetic operators
-   [x] Comparison operators
-   [x] Prefix unary operators
-   [x] Print statement
-   [x] Variable declaration
-   [x] Type system
-   [x] If / else statement
-   [x] For loop
-   [x] While loop
-   [x] Functions
-   [x] Bytecode instructions
-   [x] Register virtual machine
-   [x] Type inference
-   [ ] Structs and implementation blocks
-   [ ] Garbage collector
-   [ ] Error handling mechanisms
-   [ ] Module system
-   [ ] Standard library and native data structures

## What's Next?

The language foundation is solid, and we're now focused on expanding core features and optimization. The upcoming features listed above will bring Kaori closer to a complete, production-ready language with further bytecode optimizations and additional features based on community feedback.
