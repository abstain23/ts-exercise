// 首字母大写
type CapitalizeString<S extends string> = S extends `${infer S1}${infer S2}` ? `${Uppercase<S1>}${S2}` : S

type Y = Lowercase<'Ff'> // ff

type X = CapitalizeString<'cd'> // Cd

export {}
