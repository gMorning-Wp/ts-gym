
// 该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。
// 这里会讲到便利一个对象
// type MyReadonly<T> = anys



// ts 实现方式
// 思路：将接口对象循环赋值给新对象，并在每个对象key上拼接上readOnly字段
//  1.返回一个对象
//  2.遍历 obj （js对象 ts接口） in -> mapped keyof -> lookup
//  3. 加上 readonly 关键字
//  4. 通过key 来获取 obj（接口）里面的值 indexed

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}


// js 实现方式

// function MyReadonlyFn(todo) {
//   let obj = {}
//   for (const i in todo) {
//     obj['readonly' + i] = todo[i]
//   }
//   return obj
// }


interface B {
  a: string
}


type A = {
  name: string
}


const dd: Readonly<A> = {
  name: 'ddd'
}
