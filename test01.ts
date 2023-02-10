type Test =
  | {
      aaa: 'desc' | 'asc'
      bbb: false
      ccc: false
      ddd: false
    }
  | {
      aaa: false
      bbb: 'desc' | 'asc'
      ccc: false
      ddd: false
    }
  | {
      aaa: false
      bbb: false
      ccc: 'desc' | 'asc'
      ddd: false
    }
  | {
      aaa: false
      bbb: false
      ccc: false
      ddd: 'desc' | 'asc'
    }

type GenerateType<T extends keyof any> = {
  [K in T]: {
    [K2 in K]: 'desc' | 'asc'
  } & {
    [K3 in Exclude<T, K>]: false
  }
}[T]

const aaa: Test = {
  aaa: 'asc',
  bbb: false,
  ccc: false,
  ddd: false
}

const bbb: Test = {
  aaa: false,
  bbb: 'asc',
  ccc: false,
  ddd: false
}

const ccc: G = {
  aaa: false,
  bbb: false,
  ccc: false,
  ddd: 'asc'
}
type G = GenerateType<'aaa' | 'bbb' | 'ccc' | 'ddd'>

type Key = keyof any // string | number | symbol

export {}
