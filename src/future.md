# The Future

I believe we can now confidently call Kaori a **Turing-complete programming language**. Many core features have already been implemented, and the journey so far has been both fun and challenging.

## Performance

Here's how Kaori compares to other dynamic languages when computing Fibonacci numbers:

| Language  | Iterative (s) | Recursive (s) |
| --------- | ------------- | ------------- |
| **Kaori** | **0.393906**  | **3.312068**  |
| Lua       | 0.286515      | 4.779067      |
| Python    | 3.011300      | 12.621375     |
| PyPy      | 0.182464      | 1.148566      |

As you can see, Kaori significantly outperforms CPython and is competitive with Lua, while PyPy still leads the pack with its sophisticated JIT compilation.

> **Note:** This benchmark is based on a simple Fibonacci implementation and should not be taken as comprehensive performance claims. Kaori is still in early development, and performance characteristics may vary significantly across different workloads and use cases. Real-world performance depends on many factors beyond microbenchmarks.

## Features

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
