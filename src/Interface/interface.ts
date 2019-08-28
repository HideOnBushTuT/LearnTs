import { type } from "os";

interface List {
    readonly id: number,
    name: string,
    age?: number
    // [x: string]: any,
}

interface Result {
    data: List[],
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}

let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 18 }
    ]
}

// render({
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B', age: 18 }
//     ]
// } as Result)

render(<Result>{
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 18 }
    ]
})


interface StirngArray {
    [index: number]: string
}

let chars: StirngArray = ['A', 'B']

interface Names {
    [x: string]: any,
    [z: number]: number,
}


/**** interface to function */

let add2: (x: number, y: number) => number

interface Add3 {
    (x: number, y: number): number
}

type add4 = (x: number, y: number) => number

let add5: add4 = (a, b) => a + b

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}


function getLib() {
    let lib: Lib = (() => {}) as Lib
    lib.version = '2.0'
    lib.doSomething = () => {}
    return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()