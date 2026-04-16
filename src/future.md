# The Future

I believe we can now confidently call Kaori a **Turing-complete programming language**. Many core features have already been implemented, and the journey so far has been both fun and challenging.

## Performance

Here's how Kaori compares to other dynamic languages when computing Fibonacci numbers:

| Language  | Version | Iterative (ms) | Iterative ± | Recursive (ms) | Recursive ± |
| --------- | ------- | -------------- | ----------- | -------------- | ----------- |
| **Kaori** | 1.0.0   | **246.296**    | 1.40%       | **26.969**     | 0.86%       |
| Lua       | 5.5.0   | 201.600        | 5.01%       | 36.500         | 3.14%       |
| Python    | 3.14.4  | 3083.135       | 11.00%      | 102.384        | 2.50%       |
| PyPy      | 7.3.20  | 47.110         | 1.67%       | 21.881         | 3.56%       |

**Iterative**: `fib(30)` computed 10^6 times using an iterative algorithm  
**Recursive**: `fib(30)` computed once using a naive recursive algorithm (no memoization)

### Environment

-   **CPU**: AMD Ryzen 5 5600 (6-core, 12-thread, 3.5GHz base / 4.4GHz boost)
-   **RAM**: 16GB DDR4 3000MHz
-   **Motherboard**: ASUS A320M
-   **OS**: Windows 11

> **Note:** These benchmarks are based on a specific Fibonacci implementation and should not be taken as comprehensive performance claims. Kaori is still in early development, and performance characteristics may vary significantly across different workloads and use cases. Real-world performance depends on many factors beyond microbenchmarks. Benchmark results may also be slightly outdated at times as the language continues to evolve.

## Development roadmap

-   [x] Error reporting
-   [x] Code comments
-   [x] Arithmetic operators
-   [x] Comparison operators
-   [x] Logical operators
-   [x] Prefix unary operators
-   [x] Print statement
-   [x] Variable declaration
-   [x] Compound assignment operators
-   [x] If / else statement
-   [x] For loop
-   [x] While loop
-   [x] Functions
-   [x] Bytecode instructions
-   [x] Register virtual machine
-   [x] Optimizations
-   [x] Dictionaries
-   [ ] Vectors
-   [ ] Standard library
-   [ ] Garbage collector
-   [ ] Error handling mechanisms
-   [ ] Module system
