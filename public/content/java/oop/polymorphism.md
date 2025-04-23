# Polymorphism in Java

Polymorphism is one of the four fundamental principles of Object-Oriented Programming (OOP). It allows one interface to be used for a general class of actions, making it easier to scale and add functionalities without modifying much of the existing code.

## Key Concepts

### 1. What is Polymorphism?

The word "polymorphism" comes from the Greek words _poly_ meaning many, and _morph_ meaning forms.  
In programming, polymorphism means the ability of a variable, function, or object to take on multiple forms.  
In Java, polymorphism allows objects of different classes to be treated as objects of a common superclass.

### 2. Types of Polymorphism in Java

- **Compile-time Polymorphism (Static Polymorphism)**: This is achieved by method overloading or operator overloading. The method is resolved at compile-time.
- **Runtime Polymorphism (Dynamic Polymorphism)**: This is achieved by method overriding, where the method to be called is determined at runtime.

---

## 1. Compile-time Polymorphism (Method Overloading)

Method overloading occurs when a class has more than one method having the same name but different parameters (different number, type, or both).

```java
class Calculator {
    // Method to add two integers
    int add(int a, int b) {
        return a + b;
    }

    // Overloaded method to add three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3));        // Output: 5
        System.out.println(calc.add(2, 3, 4));     // Output: 9
    }
}
```

## 2. Runtime Polymorphism (Method Overriding)

In runtime polymorphism, a subclass can provide a specific implementation of a method that is already defined in its superclass. This is achieved by method overriding. The method is resolved at runtime based on the object's actual type, not the reference type.

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

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        myAnimal.sound();  // Output: Animal makes a sound

        Animal myDog = new Dog();
        myDog.sound();  // Output: Dog barks

        Animal myCat = new Cat();
        myCat.sound();  // Output: Cat meows
    }
}
```
