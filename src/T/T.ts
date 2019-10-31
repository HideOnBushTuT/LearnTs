// function log<T>(value: T): T {
//     console.log('T:', value )
//     return value
// }

// log<string[]>(['a', 'b'])
// log(['c', 'd'])


interface Log<T = string> {
    (value: T): T
}

let myLog: Log
myLog('1')


class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let log1 = new Log<Number>()
log1.run(1)

let log2 = new Log()
log2.run('b')


interface Length {
    length: number
}

function log<T extends Length>(value: T): T {
    console.log(value)
    return value
}

log([1])
log('112')
log({ length: 1 })


