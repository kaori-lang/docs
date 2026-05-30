# Maps

Maps are the primary data structure in Kaori — collections of key-value pairs.

## Creating Maps

Maps are created with the `#{ }` syntax:

```kaori
let cat = #{ name: "whiskers", age: 5 };
let point = #{ x: 10, y: 20 };
let empty = #{};
```

Keys can be any value:

```kaori
let map = #{ 1: "one", 2: "two", true: "yes" };
```

## Field Access

Access fields with `.`:

```kaori
let cat = #{ name: "whiskers", age: 5 };

print(cat.name); // whiskers
print(cat.age);  // 5
```

## Field Mutation

Fields can be mutated with assignment:

```kaori
let cat = #{ name: "whiskers", age: 5 };

cat.age = 6;
print(cat.age); // 6
```

## Nested Maps

Maps can be nested:

```kaori
let cat = #{
    name: "whiskers",
    address: #{
        city: "Springfield",
        street: "123 Main St"
    }
};

print(cat.address.city); // Springfield
```

## Shorthand Fields

When a field name and variable name are the same, you can use shorthand syntax:

```kaori
let name = "whiskers";
let age = 5;

let cat = #{ name, age };
// equivalent to: #{ name: name, age: age }
```

## Maps as Modules

Maps are used to group related functions together, similar to modules or objects in other languages:

```kaori
fun Cat(name, age) {
    #{ name, age }
}

fun speak(self) {
    "meow, I am " + self.name
}

let cat = Cat("whiskers", 5);

```

See [Object Oriented Programming](./oop.md) for more.
