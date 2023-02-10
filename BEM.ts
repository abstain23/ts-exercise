type IsNever<T> = T extends never ? true : false
type IsUnion<U> = IsNever<U> extends true ? '' : U

type BEM<
  B extends string,
  E extends string[],
  M extends string[] = []
> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`

type ClassNames1 = BEM<'btn', ['price']>
type ClassNames2 = BEM<'btn', ['price'], ['warning', 'success']>
type ClassNames3 = BEM<'btn', [], ['small', 'medium', 'large']>

// type X = never extends never ? true : false
type M<T extends string[]> = IsNever<`__${T[number]}`>

type A = M<[]> // never

export {}
