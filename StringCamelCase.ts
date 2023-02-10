type StringCamelCase<S extends string> = S extends `${infer S1}-${infer S2}`
  ? S2 extends Capitalize<S2>
    ? `${S1}-${StringCamelCase<S2>}`
    : `${S1}${StringCamelCase<Capitalize<S2>>}`
  : S

type X = StringCamelCase<'foo-bar'>

export {}
