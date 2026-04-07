# Object-Oriented Programming

Kaori does not have classes or traditional object-oriented features. Instead, it uses dictionaries to represent objects. This keeps the language simple and flexible.

```kaori
fun Cat(name, age, color) {
    return {
        name,
        age,
        color,
    };
}
```

You can create object-like structures by returning dictionaries from functions.

## Creating and Using Objects

```kaori
fun Cat(name, age, color) {
    return {
        name,
        age,
        color,
    };
}

fun main() {
    cat := Cat("meow", 5, "black");

    print(cat.name);  // "meow"
    print(cat.age);   // 5
}
```

## Updating fields

Fields can be modified directly:

```kaori
fun Cat(name, age, color) {
    return {
        name,
        age,
        color,
    };
}

fun main() {
    cat := Cat("meow", 5, "black");
    cat.age += 1;

    print(cat.age); // 6
}
```

## Functions as Methods

Functions can operate on objects by receiving them as arguments:

```kaori
fun Cat(name, age, color) {
    return {
        name,
        age,
        color,
    };
}

fun greet(self) {
    print(self.name);
}

fun main() {
    cat := Cat("meow", 5, "black");
    greet(cat);
}
```

This approach provides a simple and flexible way to structure data and behavior without introducing complex class systems.
