class Dog {
    constructor(name: string) {
        this.name = name
    }

    public name: string
    static food: string = 'bones'
    private pri() {}
    run() {}
}

console.log(Dog.prototype)
let dog = new Dog('xiaownag')
console.log(dog)
console.log(Dog.food)

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
    }
}

console.log(Husky.food)
