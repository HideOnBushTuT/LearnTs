abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}



class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }

    public name: string
    static food: string = 'bones'
    private pri() {}
    run() {}

    sleep() {
        console.log('dog sleep')
    }
}

console.log(Dog.prototype)
let dog = new Dog('xiaownag')
console.log(dog)
console.log(Dog.food)
dog.eat()

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
    }

    sleep() {
        console.log('Husky sleep')
    }
}

console.log(Husky.food)

class Cat extends Animal {
    sleep() {
        console.log('cat sleep')
    }
}

let cat = new Cat()

let animals: Animal[] = [dog, cat]

animals.forEach(animal => {
    animal.sleep()
})

class WorkFlow {
    step1() {
        return this
    }

    step2() {
        return this
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    public next() {
        return this
    }
}

new MyFlow().next().step1().step2().next().step1().step2()



