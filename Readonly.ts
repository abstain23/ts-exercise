interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar'
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// todo.description = '1111'

export {}
