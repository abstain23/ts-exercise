type OptionalKeys<T extends Record<keyof any, any>> = {
  [K in keyof T]: {} extends Pick<T, K> ? K : never
}[keyof T]

type Person = {
  name: string
  age?: number
  sex?: string
}

type K = OptionalKeys<Person>

type X = {} extends Pick<Person, 'age'> ? true : false // true
type Y = {} extends Record<'name', string> ? true : false // false

export {}
