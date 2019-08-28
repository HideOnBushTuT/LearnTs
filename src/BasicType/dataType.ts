//原始类型
let bool: Boolean = true
let num: number = 19
let str: string = 'aaa'

//arr
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2 , 4, '5']

//tuple
let tuple: [string, number] = ['1', 1]

//func
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

//object
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3



//symbol
let s1: symbol = Symbol()
let s2 = Symbol()

//undefined, null
let un: undefined
let nu: null

//void
let noReturn = () => {}

//any
let x 
x = 1
x = []

//never
let error = () => {
    throw new Error('error')
}

let endless = () => {
    while(true) {}
}
