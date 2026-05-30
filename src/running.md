# Running a File

Kaori programs are stored in `.kr` files and run with the `kaori` command:

```bash
kaori main.kr
```

## Entry Point

Kaori has no special entry point like `main()`. The top level of your file is executed directly from top to bottom:

```kaori
let x = 5;
let y = 10;

print(x + y);
```
