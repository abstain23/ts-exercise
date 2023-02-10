type StringToUnion<S extends string> = S extends `${infer S1}${infer S2}` ? S1 | StringToUnion<S2> : never

type X = StringToUnion<'abc'> // a | b | c

export {}
