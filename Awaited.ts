type ExampleType = Promise<Promise<string>>

type Result = MyAwaited<ExampleType> // string

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : never

export {}
