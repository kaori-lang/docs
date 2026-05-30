# Object Oriented Programming

Kaori has no built-in class system. Instead, object oriented programming is achieved through maps and functions, with `self` as a convention for the first argument.

## Constructors

A constructor is just a function that returns a map:

```kaori
fun Cat(name, age) {
    #{ name, age }
}

let cat = Cat("whiskers", 5);
print(cat.name); // whiskers
```

## Methods

Methods are plain functions that take the object as the first argument by convention called `self`:

```kaori
fun speak(self) {
    "meow, I am " + self.name
}

fun set_age(self, age) {
    self.age = age;
    self
}

let cat = Cat("whiskers", 5);
speak(cat);
set_age(cat, 6);
```

## Namespacing

To avoid name collisions, group related functions in a namespace map:

```kaori
let Cat = #{
    new: fun(name, age) { #{ name, age } },

    speak: fun(self) {
        "meow, I am " + self.name
    },

    set_age: fun(self, age) {
        self.age = age;
        self
    },
};

let cat = Cat.new("whiskers", 5);
Cat.speak(cat);
Cat.set_age(cat, 6);
```

## Shared State

Use ref cells when multiple closures need to share mutable state:

```kaori
fun make_counter() {
    ref count = 0;

    #{
        increment: fun() { ^count += 1; },
        decrement: fun() { ^count -= 1; },
        get: fun() { ^count },
    }
}

let c = make_counter();
c.increment();
c.increment();
print(c.get()); // 2
```
