type RequiredKeys<T extends Record<keyof any, any>> = {
  [K in keyof T]: T extends Record<K, T[K]> ? K : never
}[keyof T]

type Person = {
  name: string
  age?: number
  sex?: string
}

type P = RequiredKeys<Person> // name

type X = Person extends { name?: string } ? true : false // true
type Y = Person extends { age: number } ? true : false // false

export {}
