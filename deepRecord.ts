type Data = {
  aaa: number
  bbb: {
    ccc: number
    ddd: string
  }
  eee: {
    fff: string
    ddd: number
  }
}

const data: DeepRecord<Data> = {
  aaa: 1,
  bbb: {
    ccc: 1,
    ddd: 'cc'
  },
  eee: {
    fff: 'cc',
    ddd: 1,
    ff: 1
  }
}

type DeepRecord<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<string, any> ? DeepRecord<T[K]> & Record<string, any> : T[K]
} & Record<string, any>

export {}
