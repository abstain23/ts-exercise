type Result = Exclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type MyExclude<T, U> = T extends U ? never : T
