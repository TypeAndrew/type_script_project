class Animal {
    say() {
        console.log("Nothing to say");
    }
}
class Cat extends Animal {
    say() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    say() {
        console.log("Woof");
    }
}
const cat = new Cat();
cat.say(); // Meow
const dog = new Dog();
dog.say(); // Woof
