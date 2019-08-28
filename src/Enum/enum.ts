enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest,
}


// string enum
enum message {
    success = 'success',
    fail = 'fail',
}

//
enum Answer {
    N, 
    Y = 'Yes',
}

//
enum Char {
    a,
    b = Char.a,
    c = 1 + 3,
    d = Math.random(),
    e = '123'.length,
}

// const
const enum Month {
    Jan,
    Fab,
    Mar,
}

enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3

let e1: E.a = 1
let e2: E.b

let e3: E.a = 1

let g1: G = G.a
let g2: G.a = G.a