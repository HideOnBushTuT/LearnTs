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