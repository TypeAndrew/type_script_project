class Animal {
    public say() {
      console.log("Nothing to say"); 
    }
  }
    
  class Cat extends Animal {
    public say() { 
      console.log("Meow");
    }
  }
    
  class Dog extends Animal {
    public say() {
      console.log("Woof");
    }
  }
  
  const cat = new Cat();
  cat.say(); // Meow
  
  const dog = new Dog();
  dog.say(); // Woof

  