# Why are Type Guards Necessary? Understanding Type Guards in TypeScript

I bet you have found yourself in situations where you have to handle different types of data and you are unsure how to handle them as per best coding standards. Javascript doesn't mind for any type at all, but when you start learning TypeScript, it kind of minds if you don't put a type at all. And there you go, there is the necessity for you to understand type guards in detail and know their use cases to fit in the complexities. In this blog post, we will explore their importance and look into various examples.

## What are Type Guards?

If you want to get an understanding of the type guards from the real life, the best possible example would be one band show, where you can only enter if you have a valid ticket. So the guards check if you have the right (type) of ticket ( regular, vip or whatever classification may suit - values ) and you are about to enjoy a great band show. So to answer with theory, Type Guards are exactly what helps you narrow down the type of a value within a certain block of code.

## Why Do We Need Type Guards?

Imagine you have a function that can either get a string or a number. Now you should perform actions based on different types. That's exactly where Type Guards come in handy

1. Write safer code by avoiding runtime errors
2. Get better autocomplete and IntelliSense in your IDE
3. Make your code more readable and self-documenting

## Types of Type Guards

Now, without wasting our times, let's just visit the type guards and learn then quick, so that we can dive into applying them in our codes right away.

### 1. typeof Type Guard

You can easily check primitive data types with the typeof Type Guard, here's an example

```typescript
function printLength(input: string | number) {
  if (typeof input === "string") {
    console.log(input.length); // TypeScript knows input is a string here
  } else {
    console.log(input.toFixed(2)); // TypeScript knows input is a number here
  }
}
```

This is pretty good example to understand the power of this Type Guard. We are still bound to count the lengths with this function, but what if we receive string, or even number, that is pretty much handled here with this easy to go check.

### 2. instanceof Type Guard

`instanceof` is perfect for checking if something is an instance of a class.

for example,

```typescript
class Dog {
  bark() { console.log("I am a dog, so I should Woof!"); }
}

class Cat {
  meow() { console.log("I am a cat, so I should Meow!"); }
}

function makeSoundDependingOnTheAnimal(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```
So in this example, you saw the power of instanceof, which helped us define two important actions that differs based on what type of animal they are.

### 2. in operator type guard

This in operator helps us to know if any particular property is available in an object.

```typescript
interface Bird { fly: () => void; }
interface Fish { swim: () => void; }

function move(pet: Bird | Fish) {
  if ("fly" in pet) {
    pet.fly(); 
  } else {
    pet.swim(); 
  }
}
```

for example, pet is common here, but depending on what pet it is, there might be different behaviors, like fly or swim. With the help of in operator, that is much easier to check and validate.