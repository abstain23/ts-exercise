type StringToArray<S extends string, T extends any[] = []> = S extends `${infer S1}${infer S2}`
  ? StringToArray<S2, [...T, S1]>
  : T

type Sa = StringToArray<'abcd'> // ["a", "b", "c", "d"]
