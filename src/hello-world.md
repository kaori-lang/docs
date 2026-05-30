# Hello World

Create a file called `hello.kr`:

```kaori
print("hello, world!");
```

Run it:

```bash
kaori hello.kr
```

Output:

```
hello, world!
```

## A Slightly More Interesting Program

```kaori
fun greet(name) {
    "hello, " + name + "!"
}

print(greet("kaori"));
```

Output:

```
hello, kaori!
```
