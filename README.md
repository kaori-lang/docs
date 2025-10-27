# Kaori Programming Language Documentation

### Prerequisites

Install mdBook:

```bash
cargo install --git https://github.com/rust-lang/mdBook.git mdbook
```

### Clone the Repository

First, clone the documentation repository:

```bash
git clone https://github.com/kaori-lang/docs.git
cd kaori-docs
```

### Build, Serve and Open

```bash
mdbook serve --open
```

The documentation will be available at `http://localhost:3000`.

### Build Only

If you just want to build without serving:

```bash
mdbook build
```
