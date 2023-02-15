type Get<T extends Record<string, any>, K extends string> = K extends `${infer S1}.${infer S2}`
  ? S1 extends keyof T
    ? Get<T[S1], S2>
    : never
  : K extends keyof T
  ? T[K]
  : never

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  hello: 'world'
}

type X = Get<Data, 'foo'>
type Y = Get<Data, 'foo.count'>
type Z = Get<Data, 'foo.bar.value'>

export {}
