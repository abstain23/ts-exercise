type GreaterThan<
  T extends number,
  U extends number,
  R extends number[] = []
> = T extends R['length']
  ? false
  : U extends R['length']
  ? true
  : GreaterThan<T, U, [...R, 1]>

type C = GreaterThan<1, 2>
type D = GreaterThan<2, 1>

type newArr<T extends number, A extends any[] = []> = A['length'] extends T
  ? A
  : newArr<T, [...A, '']>

type A = newArr<5>

// type F = newArr<4> extends newArr<5> ? true : false

type GreaterArr<T extends any[], U extends any[]> = U extends [...T, ...any]
  ? false
  : true
type F = GreaterArr<newArr<4>, newArr<4>>

// type G = [1, 2] extends [1, ...any] ? true : false
// type G = [1, 2, 3] extends [1, ...any] ? true : false

type GreaterThan2<T extends number, U extends number> = GreaterArr<
  newArr<T>,
  newArr<U>
>

type C1 = GreaterThan2<1, 2>
type D1 = GreaterThan2<2, 1>
