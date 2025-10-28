# The Future

I believe we can now confidently call Kaori a **Turing-complete programming language**. Many core features have already been implemented, and the journey so far has been both fun and challenging.

## Performance

Here's how Kaori compares to other dynamic languages when computing Fibonacci numbers:

| Language  | Version | Iterative (s) | Recursive (s) |
| --------- | ------- | ------------- | ------------- |
| **Kaori** | 1.0.0   | **0.393906**  | **3.312068**  |
| Lua       | 5.4.2   | 0.286515      | 4.779067      |
| Python    | 3.11.0  | 3.011300      | 12.621375     |
| PyPy      | 7.3.20  | 0.182464      | 1.148566      |

**Iterative**: `fib(40)` computed 10^6 times using an iterative algorithm  
**Recursive**: `fib(40)` computed once using a naive recursive algorithm (no memoization)

### Environment

-   **CPU**: AMD Ryzen 5 5600 (6-core, 12-thread, 3.5GHz base / 4.4GHz boost)
-   **RAM**: 16GB DDR4 3000MHz
-   **Motherboard**: ASUS A320M
-   **OS**: Windows 11

> **Note:** These benchmarks are based on a specific Fibonacci implementation and should not be taken as comprehensive performance claims. Kaori is still in early development, and performance characteristics may vary significantly across different workloads and use cases. Real-world performance depends on many factors beyond microbenchmarks.

## Development roadmap

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
