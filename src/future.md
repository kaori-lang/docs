# The Future

I believe we can now confidently call Kaori a **Turing-complete programming language**. Many core features have already been implemented, and the journey so far has been both fun and challenging.

## Performance

Here's how Kaori compares to other dynamic languages when computing Fibonacci numbers:

| Language  | Version | Iterative (ms) | Iterative ± | Recursive (ms) | Recursive ± |
| --------- | ------- | -------------- | ----------- | -------------- | ----------- |
| **Kaori** | 1.0.0   | **324.802**    | 1.95%       | **37.642**     | 1.24%       |
| Lua       | 5.4.2   | 214.700        | 1.60%       | 38.350         | 2.28%       |
| Python    | 3.11.0  | 2381.799       | 5.75%       | 102.565        | 1.41%       |
| PyPy      | 7.3.20  | 46.893         | 1.16%       | 21.390         | 0.86%       |

**Iterative**: `fib(30)` computed 10^6 times using an iterative algorithm  
**Recursive**: `fib(30)` computed once using a naive recursive algorithm (no memoization)

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
-   [x] Dynamic typing
-   [x] If / else statement
-   [x] For loop
-   [x] While loop
-   [x] Functions
-   [x] Bytecode instructions
-   [x] Register virtual machine
-   [ ] Structs and implementation blocks
-   [ ] Garbage collector
-   [ ] Error handling mechanisms
-   [ ] Module system
-   [ ] Standard library and native data structures
