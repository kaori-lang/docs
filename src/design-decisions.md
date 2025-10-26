# Design Decisions

Kaori’s design is guided by simplicity, safety, and compiler transparency.  
Here are some of the questions that influenced its architecture:

## Why Static Types?

Static typing allows the compiler to catch many errors early, improving safety and enabling optimizations.

## How Is Mutual Recursion Handled Without Forward Declarations?

All function signatures are resolved before bodies are analyzed, allowing mutual recursion without explicit forward declarations.

## Why No Default-Initialized Variables?

Every variable must be explicitly initialized to avoid undefined behavior and uninitialized memory access.

## Why No Nested Functions?

Kaori avoids nested functions to keep scope rules simple and stack frames predictable.

## Why Only a Single Numeric Type?

Having a single `number` type simplifies both parsing and the virtual machine, without losing expressiveness for most programs.

## Why Braces Instead of Indentation?

Braces are explicit, unambiguous, and easier to parse.  
This makes Kaori’s grammar simpler and its compiler more robust.
