type StringLength<S extends string, T extends any[] = []> = S extends `${infer S1}${infer S2}`
  ? StringLength<S2, [...T, S1]>
  : T['length']

type Len1 = StringLength<'abcd'> //4

type S = '' extends `${infer S1}${infer S2}` ? true : false // false
