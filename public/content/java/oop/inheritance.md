# Inheritance in Java

Inheritance is a key concept in object-oriented programming (OOP). It allows one class to inherit the properties and methods of another class.

## Key Concepts

### 1. Superclass and Subclass

A superclass is the parent class, and a subclass is the child class. The subclass inherits fields and methods from the superclass.

### 2. Method Overriding

When a subclass defines a method that is already present in its superclass, it's called method overriding.

### Example Code:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound(); // Output: Dog barks
    }
}
```
